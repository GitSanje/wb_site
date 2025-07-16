import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import HeroSection from './hero-section'
import { GraduationCap, BookOpen, Users, Award, CheckCircle, Star, Play, Calendar, Trophy, Target } from "lucide-react"
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Badge } from '../ui/badge'
import DestinationSection from './destination-section'


type Props = {
  title: string
  
  imageUrl: string
  destinations: {
    name:string,
    image: string
  }[]
  
}

  const testimonials = [
    {
      name: "SARAH TAMANG",
      role: "Student",
      quote:
        "Thanks to GIA, studying in Australia became a reality. Their team made the entire process of getting admission and visa smooth. I got support every step of the way.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "RUSHA SHRESTHA",
      role: "Australia",
      quote:
        "Choosing GIA for my Australian study was a game-changer. Their personalized approach and expert guidance made my dreams seamless and stress-free.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "NARENDRA AGARWAL",
      role: "Student",
      quote:
        "I achieved GIA with my IELTS preparation and application to Australia. I was happy because I found the best consultancy for my journey.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "ANKIT THAPA",
      role: "Student",
      quote:
        "Thanks to GIA, navigating the visa application was a breeze! Their expert guidance and support were invaluable in making my Australian education dreams come true.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "UNIQUE SHRESTHA",
      role: "Australia",
      quote:
        "GIA's expertise and support made studying in Australia a reality. Their dedication, professionalism and highly experienced team guided me throughout.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "SAPAL REGMI",
      role: "Student",
      quote:
        "GIA made my dream of studying in Australia a reality. Their comprehensive support, exceptional services and world-class mentoring helped me achieve success with overseas education.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const testTypes = [
    { name: "IELTS", color: "bg-blue-600" },
    { name: "PTE", color: "bg-green-600" },
    { name: "SAT", color: "bg-purple-600" },
    { name: "TOEFL", color: "bg-orange-600" },
    { name: "GRE", color: "bg-red-600" },
    { name: "GMAT", color: "bg-indigo-600" },
  ]

  const features = [
    {
      icon: Users,
      title: "Supportive Environment",
      description:
        "We have a friendly & supportive environment that encourages students to learn and grow in their studies.",
    },
    {
      icon: BookOpen,
      title: "Learning Materials",
      description: "We use all the learning materials after you enroll in any test preparation course.",
    },
    {
      icon: Target,
      title: "Mock Test",
      description: "We conduct mock tests and walk you through the questions which help the students ability to learn.",
    },
  ]

  
  const courses = [
    "Career Counseling",
    "Courses Options",
    "Universities & Colleges",
    "Fees & Scholarships",
    "Up to 100% scholarship opportunities",
    "& Many More...",
  ]

  
const Landing = ({ title, imageUrl , destinations}:Props ) => {

  
  return (
   

         <div className=" mx-auto py-8   ">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Hero Section */}
          <HeroSection title={title} imageUrl={imageUrl}/>
          
       
          {/* Study Destinations Section */}
           <DestinationSection destinations = {destinations}/>
          {/* <section className=''>
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <p className="text-center text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className=" grid md:grid-cols-3 gap-6 mx-4">
              <Card className="bg-red-600 text-white ">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    STUDENT
                    <br />
                    ADMISSION
                  </h3>
                  <p className="text-sm opacity-90">
                    We provide comprehensive admission guidance and support for students.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-white border-white hover:bg-white hover:text-red-600 bg-transparent"
                  >
                    Learn more
                  </Button>
                </CardContent>
              </Card>

              <Card className="  bg-gray-800 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    STUDENT
                    <br />
                    ACCOMMODATION
                  </h3>
                  <p className="text-sm opacity-90">
                    We help students find suitable accommodation options near their universities.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-white border-white hover:bg-white hover:text-gray-800 bg-transparent"
                  >
                    Learn more
                  </Button>
                </CardContent>
              </Card>

              <Card className="  bg-gray-700 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    END TO END
                    <br />
                    SERVICE
                  </h3>
                  <p className="text-sm opacity-90">Complete support from application to graduation and beyond.</p>
                  <Button
                    variant="outline"
                    className="mt-4 text-white border-white hover:bg-white hover:text-gray-700 bg-transparent"
                  >
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section> */}

           {/* Authorized Testing Affiliates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-600 mb-4">GREAT DEALS</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Are Authorized Testing Affiliates:</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Card */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <GraduationCap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-green-800 mb-2">
                    Start Your Test Preparation Classes With Our Experts.
                  </h3>
                  <p className="text-sm text-green-700 mb-4">
                    Get expert guidance and comprehensive preparation for all major tests.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Register Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Center - Pearson Logo */}
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Pearson</h3>
                    <p className="text-lg text-gray-600">PTE Academic</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Additional Info */}
            <div className="text-center">
              <div className="bg-blue-50 rounded-lg p-6">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-blue-800 mb-2">Certified Excellence</h3>
                <p className="text-sm text-blue-700">
                  Official testing partner with proven track record of student success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Selection Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-600 mb-4">WHERE TO APPLY</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still, Confused About Which Course To Choose & From Where To Apply?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pink-200 rounded-lg p-4 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Student Consultation</p>
                  </div>
                </div>
                <div className="bg-orange-200 rounded-lg p-4 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Course Guidance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Course List */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Get your profile evaluated by our expert to know the best fit country for you.
              </h3>

              <div className="space-y-3 mb-6">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Book Free Session</Button>
            </div>
          </div>
        </div>
      </section>

{/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
       {/* Test Preparation Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A Step-By-Step Guide To Score Highest Marks In Test Preparation Examination.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our IELTS, PTE, TOEFL & SAT preparation classes and get up to 50% fee discount on enrollment.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {testTypes.map((test, index) => (
              <Button key={index} className={`${test.color} hover:opacity-90 text-white px-6 py-3 text-lg font-medium`}>
                {test.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
      {/* Student Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-600 mb-4">TESTIMONIALS</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say About Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-1 mb-3">
                    <span className="text-4xl text-green-600 leading-none">"</span>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-gray-600 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Badge className="bg-gray-800 text-white px-4 py-2">STUDENT SUCCESS MOMENTS</Badge>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-red-600 hover:bg-red-700 rounded-full p-4">
                  <Play className="h-8 w-8 text-white" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">Student Success Story</p>
              </div>
            </div>
          </div>
        </div>
      </section>



          {/* Why Choose Us */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Why choose us</h2>
            <p className="text-center text-gray-600 mb-8">
              We've created a range of subsidiary services to make your study abroad journey less daunting than
              anticipated, while easily seeking where do you need help today!
            </p>
            <div className="mx-4  grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-teal-600 rounded"></div>
                </div>
                <h3 className="font-bold mb-2">Accommodation</h3>
                <p className="text-sm text-gray-600">
                  It is a long established fact that a reader will be distracted by the readable content.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-teal-600 rounded"></div>
                </div>
                <h3 className="font-bold mb-2">Changing Universities</h3>
                <p className="text-sm text-gray-600">
                  It is a long established fact that a reader will be distracted by the readable content.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-teal-600 rounded"></div>
                </div>
                <h3 className="font-bold mb-2">Visa Consultancy</h3>
                <p className="text-sm text-gray-600">
                  It is a long established fact that a reader will be distracted by the readable content.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-teal-600 rounded"></div>
                </div>
                <h3 className="font-bold mb-2">Pre-Departure Briefing</h3>
                <p className="text-sm text-gray-600">
                  It is a long established fact that a reader will be distracted by the readable content.
                </p>
              </div>
            </div>
          </section>

         
        </div>

        {/* Achievement Stats */}
          {/* <Card className="bg-teal-600 text-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-center mb-4">Achievement through Time</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">1205</div>
                  <div className="text-sm opacity-90">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">90%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">88%</div>
                  <div className="text-sm opacity-90">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">92%</div>
                  <div className="text-sm opacity-90">Completion</div>
                </div>
              </div>
            </CardContent>
          </Card> */}

        {/* Sidebar */}
        <div className="mt-4 space-y-8 mx-4">


          {/* Video Section */}
          {/* <Card>
            <CardContent className="p-6">
              <div className="relative mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Video thumbnail"
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
                <Button size="icon" className="absolute inset-0 m-auto bg-white/80 hover:bg-white">
                  <Play className="h-6 w-6 text-teal-600" />
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
              <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700">Learn more</Button>
            </CardContent>
          </Card> */}

          {/* Partners */}
          {/* <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-center mb-4">Our Partners</h3>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-100 p-2 rounded">
                    <Image
                      src="/placeholder.svg?height=40&width=60"
                      alt={`Partner ${i}`}
                      width={60}
                      height={40}
                      className="w-full h-8 object-contain"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card> */}

          

          {/* Student Reviews */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-center mb-4">Our Student's Review</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                We have partnered with colleges and universities across the globe that can give you a truly unique, best
                education and meet the beginning of your studying life abroad.
              </p>
              <div className="grid sm:grid-cols-3 space-y-4 ">
                {[
                  { name: "John Anderson", role: "Student" },
                  { name: "Sarah Wilson", role: "Graduate" },
                  { name: "David Brown", role: "Alumni" },
                                   
                ].map((student, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Image
                      src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg"
                      alt={student.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{student.name}</div>
                      <div className="text-xs text-gray-500">{student.role}</div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-center mb-4">Contact Us</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Book a free appointment today to discuss your desired degree.
              </p>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone Number" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Your Message" />
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Send Message</Button>
              </form>
            </CardContent>
          </Card>

           {/* About KIEA */}
          <section className=" bg-teal-700 text-white rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About KIEA</h2>
                <p className="mb-4">
                  We are committed to providing comprehensive educational consultancy services to help students achieve
                  their academic goals abroad.
                </p>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-teal-700 bg-transparent"
                >
                  Learn more
                </Button>
              </div>
              <div>
                <Image
                  src="https://mloimffbzuc0.i.optimole.com/w:400/h:200/q:mauto/f:best/https://kieaeducation.com/wp-content/uploads/id:c954b272205b6281ba535223caf62171/https://kieaeducation.com/cropped-Kiea-logo-1.jpg"
                  alt="About KIEA"
                  width={100}
                  height={40}
                 
                />
              </div>
            </div>
          </section>
      
      </div>

      </div>
    
  )
}

export default Landing


