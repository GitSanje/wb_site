export interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  roles: string[]
  avatar_url?: string
  phone?: string
  bio?: string
  address?: string
  date_of_birth?: string
  created_at?: string
  updated_at?: string
}
export interface RegisterData {
  username: string
  email: string
  password: string
  confirmPassword: string
  first_name: string
  last_name: string
  phone?: string
}

export interface LoginData {
  username: string
  password: string
}

export interface AuthResponse {
  token: string
  user_email: string
  user_nicename: string
  user_display_name: string
}

export interface WordPressError {
  code: string
  message: string
  data: {
    status: number
  }
}
