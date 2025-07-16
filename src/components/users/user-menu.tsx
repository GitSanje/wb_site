"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut, BookOpen, Calendar, Bell, ChevronDown, Award, Mail, Phone } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { UserAvatar } from "./user-avatar"
import { UserProfileModal } from "./user-profile-menu"
import Link from "next/link"


export function UserMenu() {
  const { user, logout } = useAuth()
 
  const [showProfileModal, setShowProfileModal] = useState(false)



  if (!user) {
    return (
      <>
             <div className="flex items-center space-x-4 hidden lg:flex">
            {/* Contact Button */}
            <Button
              variant="outline"
              className="flex items-center space-x-2 bg-transparent"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Button>
            {/* Login Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-teal-600 hover:bg-teal-700 flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <Link href={"signin"}>
                  <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
                    <User className="h-4 w-4" />
                    <span>Student Login</span>
                  </DropdownMenuItem>
                </Link>
                <Link href={"register"}>
                  <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
                    <User className="h-4 w-4" />
                    <span>Admin Login</span>
                  </DropdownMenuItem>
                </Link>
                <Link href={"register"}>
                  <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
                    <Mail className="h-4 w-4" />
                    <span>Register</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

      </>
    )
  }

  return (
    <div >
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-auto p-2 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <UserAvatar user={user} size="md" showBadge />
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-xs text-gray-500 truncate max-w-[120px]">{user.email}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64" align="end" forceMount>
          <div className="flex items-center justify-start gap-3 p-3 border-b">
            <UserAvatar user={user} size="md" showBadge />
            <div className="flex flex-col space-y-1 leading-none">
              <p className="font-medium text-gray-900">
                {user.first_name} {user.last_name}
              </p>
              <p className="text-sm text-gray-500 truncate">{user.email}</p>
              {user.roles?.[0] && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                  {user.roles[0] === "administrator"
                    ? "Admin"
                    : user.roles[0] === "student"
                      ? "Student"
                      : user.roles[0] === "counselor"
                        ? "Counselor"
                        : "User"}
                </span>
              )}
            </div>
          </div>

          <DropdownMenuItem onClick={() => setShowProfileModal(true)} className="cursor-pointer">
            <User className="mr-3 h-4 w-4" />
            <span>View Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <BookOpen className="mr-3 h-4 w-4" />
            <span>My Courses</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Calendar className="mr-3 h-4 w-4" />
            <span>Appointments</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Award className="mr-3 h-4 w-4" />
            <span>Achievements</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Bell className="mr-3 h-4 w-4" />
            <span>Notifications</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-3 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:text-red-600">
            <LogOut className="mr-3 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <UserProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
    </div>
  )
}
