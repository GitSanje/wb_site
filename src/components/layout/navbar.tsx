"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  User,
  ChevronDown,
  Phone,
  Mail,
  Home,
  Globe,
  Camera,
  FileText,
  BookOpen,
  GraduationCap,
  Icon,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../ui/collapsible";
import { UserMenu } from "../users/user-menu";
import { UserProfileModal } from "../users/user-profile-menu";
import { useAuth } from "@/hooks/use-auth";

const navigationItems = [
  { name: "Home", href: "/", icon: Home, active: true },

  {
    name: "Services",
    href: "/services",
    icon: GraduationCap,
    dropdown: ["E-Learning", "Aboard"],
  },

  {
    name: "Test Preparation",
    href: "/test-prep",
    icon: BookOpen,
    dropdown: ["IELTS", "PTE", "GMAT", "TOEFL", "SAT"],
  },
  { name: "Scholarships", href: "/scholarships", icon: Camera },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "About", href: "/about", icon: Globe },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);


  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white ">
      {/* Top Header Bar */}
      <div className="bg-indigo-600 text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>enquiry@kiea.edu.np</span>
          </div>
          <div className="flex items-center space-x-6">
            {/* Schedule Appointment Button */}
            <Button
              variant="outline"
              className="flex items-center space-x-2 bg-transparent"
            >
              <Phone className="h-4 w-4" />
              <span>Book Appointment</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="https://mloimffbzuc0.i.optimole.com/w:400/h:200/q:mauto/f:best/https://kieaeducation.com/wp-content/uploads/id:c954b272205b6281ba535223caf62171/https://kieaeducation.com/cropped-Kiea-logo-1.jpg"
              alt="Kiea Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu viewport={false} className="hidden lg:flex">
            <NavigationMenuList className="flex space-x-8 items-center">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.name} className="relative">
                  {item.dropdown ? (
                    <>
                      <NavigationMenuTrigger className="text-indigo-600 hover:text-teal-700 font-medium text-lg pb-1 border-b-2 border-transparent hover:border-teal-600 data-[state=open]:text-green-600 data-[state=open]:border-green-600 transition-colors">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute left-0 top-full mt-1 z-50">
                        <div className="grid w-[200px] gap-4 p-4 bg-white rounded shadow">
                          {item.dropdown.map((test) => (
                            <NavigationMenuLink
                              key={test}
                              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-100 rounded cursor-pointer"
                            >
                              {test}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink className="text-indigo-600 hover:text-indigo-700 font-medium text-lg pb-1 border-b-2 border-transparent hover:border-teal-600 transition-colors">
                      {item.name}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Buttons */}
            <div className="hidden lg:flex">
              <UserMenu />
            </div>
              
          
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <Image
                    src="https://mloimffbzuc0.i.optimole.com/w:400/h:200/q:mauto/f:best/https://kieaeducation.com/wp-content/uploads/id:c954b272205b6281ba535223caf62171/https://kieaeducation.com/cropped-Kiea-logo-1.jpg"
                    alt="Kiea Logo"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navigationItems.map((item) => (
                      <div key={item.name}>
                        {item.dropdown ? (
                          <Collapsible
                            open={isMobileDropdownOpen}
                            onOpenChange={setIsMobileDropdownOpen}
                          >
                            <CollapsibleTrigger
                              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                                item.active
                                  ? "bg-green-50 text-green-600"
                                  : "text-slate-600"
                              }`}
                            >
                              <div className="flex items-center">
                                <item.icon className="mr-3 h-4 w-4" />
                                {item.name}
                              </div>
                              <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-2 space-y-1">
                              <div className="ml-6 space-y-1">
                                <div className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium text-center mb-2">
                                  {item.name}
                                </div>
                                {item.dropdown.map((subItem) => (
                                  <button
                                    key={subItem}
                                    className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem}
                                  </button>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <button
                            className={`flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                              item.active
                                ? "bg-green-50 text-green-600"
                                : "text-slate-600"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="mr-3 h-4 w-4" />
                            {item.name}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Footer Buttons */}

                {
                  user ?  
                  <>
                   <UserMenu /> 
                 
                  </>
                  
                   :
                  <div className="border-t p-4 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center space-x-2 bg-transparent"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Contact</span>
                  </Button>

                  <div className="space-y-2">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 flex items-center justify-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Student Login</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center space-x-2 bg-transparent"
                    >
                      <User className="h-4 w-4" />
                      <span>Admin Login</span>
                    </Button>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>Register</span>
                    </Button>
                  </div>

                  {/* <Button className="w-full bg-green-600 hover:bg-green-700">Book Appointment</Button> */}
                </div>

                  
                }
                
                 
              </div>

          
                 

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
