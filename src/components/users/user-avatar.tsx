"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { User } from "@/lib/types"

interface UserAvatarProps {
  user: User
  size?: "sm" | "md" | "lg"
  showBadge?: boolean
}

export function UserAvatar({ user, size = "md", showBadge = false }: UserAvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  }

  const initials =
    `${user.first_name?.[0] || ""}${user.last_name?.[0] || ""}`.toUpperCase() ||
    user.username?.[0]?.toUpperCase() ||
    "U"

  const getStatusColor = (role: string) => {
    switch (role) {
      case "administrator":
        return "bg-red-500"
      case "student":
        return "bg-green-500"
      case "counselor":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="relative">
      <Avatar className={sizeClasses[size]}>
        <AvatarImage src={user.avatar_url || "/placeholder.svg"} alt={`${user.first_name} ${user.last_name}`} />
        <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-teal-500 text-white font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>
      {showBadge && user.roles?.[0] && (
        <Badge
          className={`absolute -bottom-1 -right-1 text-xs px-1 py-0 ${getStatusColor(user.roles[0])} text-white border-2 border-white`}
        >
          {user.roles[0] === "administrator"
            ? "Admin"
            : user.roles[0] === "student"
              ? "Student"
              : user.roles[0] === "counselor"
                ? "Counselor"
                : "User"}
        </Badge>
      )}
    </div>
  )
}
