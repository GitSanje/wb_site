"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

import { wordpressAPI } from "@/lib/wordpress-api"
import type { AuthResponse, User } from "@/lib/types"

interface AuthContextType {
  user: User | null
  token: string | null
  login: (credentials: { username: string; password: string }) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => void
  loading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check for stored token on mount
    const storedToken = localStorage.getItem("auth_token")
    if (storedToken) {
      validateAndSetToken(storedToken)
    } else {
      setLoading(false)
    }
  }, [])

  const validateAndSetToken = async (token: string) => {
    try {
      const isValid = await wordpressAPI.validateToken(token)
      if (isValid) {
        const userProfile = await wordpressAPI.getUserProfile(token)
        setToken(token)
        setUser(userProfile)
      } else {
        localStorage.removeItem("auth_token")
      }
    } catch (error) {
      console.error("Token validation failed:", error)
      localStorage.removeItem("auth_token")
    } finally {
      setLoading(false)
    }
  }

  const login = async (credentials: { username: string; password: string }) => {
    try {
      setLoading(true)
      setError(null)

      const response: AuthResponse = await wordpressAPI.login(credentials)

      localStorage.setItem("auth_token", response.token)
      setToken(response.token)

      // Fetch full user profile
      const userProfile = await wordpressAPI.getUserProfile(response.token)
      setUser(userProfile)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Login failed")
      throw error
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData: any) => {
    try {
      setLoading(true)
      setError(null)

      await wordpressAPI.register(userData)

      // Auto-login after successful registration
      await login({
        username: userData.username,
        password: userData.password,
      })
    } catch (error) {
        console.log(error);
        
      setError(error instanceof Error ? error.message : "Registration failed")
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("auth_token")
    setToken(null)
    setUser(null)
    setError(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
