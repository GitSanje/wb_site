
const WORDPRESS_API_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json`

export class WordPressAPI {
  private baseUrl: string

  constructor() {
    this.baseUrl = WORDPRESS_API_URL
  }

  async register(userData: {
    username: string
    email: string
    password: string
    first_name: string
    last_name: string
    phone?: string
  }) {
    try {
      const response = await fetch(`${this.baseUrl}/custom/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
          first_name: userData.first_name,
          last_name: userData.last_name,
          meta: {
            phone: userData.phone || "",
          },
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Registration failed")
      }

      return await response.json()
    } catch (error) {
      console.error("Registration error:", error)
      throw error
    }
  }

  async login(credentials: { username: string; password: string }) {
    try {
      const response = await fetch(`${this.baseUrl}/jwt-auth/v1/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Login failed")
      }

      return await response.json()
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  }

  async validateToken(token: string) {
    try {
      const response = await fetch(`${this.baseUrl}/jwt-auth/v1/token/validate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      return response.ok
    } catch (error) {
      console.error("Token validation error:", error)
      return false
    }
  }

 async getUserProfile(token: string) {
  try {
    const response = await fetch(`${this.baseUrl}/wp/v2/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const contentType = response.headers.get("content-type") || "";

   if (!response.ok) {
  const text = await response.text()
  console.error("Raw error response:", text) 
  throw new Error("Failed to fetch user profile")
}

    return await response.json();
  } catch (error) {
    console.error("Get user profile error:", error);
    throw error;
  }
}




}

export const wordpressAPI = new WordPressAPI()
