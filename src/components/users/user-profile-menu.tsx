"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit3,
  Save,
  X,
  GraduationCap,
  BookOpen,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { UserAvatar } from "./user-avatar"


const profileSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  address: z.string().optional(),
  date_of_birth: z.string().optional(),
})

type ProfileFormData = z.infer<typeof profileSchema>

interface UserProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export function UserProfileModal({ isOpen, onClose }: UserProfileModalProps) {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      bio: user?.bio || "",
      address: user?.address || "",
      date_of_birth: user?.date_of_birth || "",
    },
  })

  const onSubmit = async (data: ProfileFormData) => {
    try {
      // Here you would update the user profile via API
      console.log("Updating profile:", data)
      setIsEditing(false)
    } catch (error) {
      console.error("Profile update failed:", error)
    }
  }

  if (!user) return null

  const mockCourses = [
    { name: "IELTS Preparation", status: "In Progress", progress: 75, startDate: "2024-01-15" },
    { name: "University Application", status: "Completed", progress: 100, startDate: "2023-12-01" },
    { name: "Visa Consultation", status: "Upcoming", progress: 0, startDate: "2024-02-01" },
  ]

  const mockAppointments = [
    { date: "2024-01-20", time: "10:00 AM", counselor: "Dr. Sarah Johnson", type: "IELTS Consultation" },
    { date: "2024-01-25", time: "2:00 PM", counselor: "Mr. John Smith", type: "University Selection" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <UserAvatar user={user} size="lg" showBadge />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Personal Information</span>
                </CardTitle>
                <Button
                  variant={isEditing ? "destructive" : "outline"}
                  size="sm"
                  onClick={() => {
                    if (isEditing) {
                      setIsEditing(false)
                      reset()
                    } else {
                      setIsEditing(true)
                    }
                  }}
                >
                  {isEditing ? (
                    <>
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </>
                  ) : (
                    <>
                      <Edit3 className="h-4 w-4 mr-2" />
                      Edit
                    </>
                  )}
                </Button>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first_name">First Name</Label>
                        <Input id="first_name" {...register("first_name")} />
                        {errors.first_name && <p className="text-sm text-red-600">{errors.first_name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input id="last_name" {...register("last_name")} />
                        {errors.last_name && <p className="text-sm text-red-600">{errors.last_name.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" {...register("email")} />
                      {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" {...register("phone")} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" rows={3} {...register("bio")} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" {...register("address")} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date_of_birth">Date of Birth</Label>
                      <Input id="date_of_birth" type="date" {...register("date_of_birth")} />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="bg-teal-600 hover:bg-teal-700">
                      <Save className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Saving..." : "Save Changes"}
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-medium">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="font-medium">{user.phone || "Not provided"}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-600">Address</p>
                          <p className="font-medium">{user.address || "Not provided"}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-600">Date of Birth</p>
                          <p className="font-medium">{user.date_of_birth || "Not provided"}</p>
                        </div>
                      </div>
                    </div>
                    {user.bio && (
                      <div className="mt-6">
                        <p className="text-sm text-gray-600 mb-2">Bio</p>
                        <p className="text-gray-800">{user.bio}</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4">
            {mockCourses.map((course, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-teal-600" />
                      <h3 className="font-semibold text-lg">{course.name}</h3>
                    </div>
                    <Badge
                      variant={
                        course.status === "Completed"
                          ? "default"
                          : course.status === "In Progress"
                            ? "secondary"
                            : "outline"
                      }
                      className={
                        course.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : course.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                      }
                    >
                      {course.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">Started: {course.startDate}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="appointments" className="space-y-4">
            {mockAppointments.map((appointment, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
                        <Calendar className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{appointment.type}</h3>
                        <p className="text-gray-600">with {appointment.counselor}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>{appointment.date}</span>
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Clock className="h-4 w-4 mr-2" />
                      Reschedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">IELTS Achievement</h3>
                  <p className="text-3xl font-bold text-teal-600 mb-2">7.5</p>
                  <p className="text-sm text-gray-600">Overall Band Score</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">University Acceptance</h3>
                  <p className="text-lg font-semibold text-green-600 mb-2">3 Universities</p>
                  <p className="text-sm text-gray-600">Accepted Applications</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <GraduationCap className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Courses Completed</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">5</p>
                  <p className="text-sm text-gray-600">Preparation Courses</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Scholarship</h3>
                  <p className="text-lg font-semibold text-purple-600 mb-2">$15,000</p>
                  <p className="text-sm text-gray-600">Merit Scholarship</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
