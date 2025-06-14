import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { LayoutDashboard, PenBox } from "lucide-react"
import { checkUser } from "@/lib/checkUser"


const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/">
              <Image src={"/ruptrix.png"}alt="logo" height={60} width={200} className="h-15 w-auto object-contain"></Image>
              </Link>

            <div className="flex items-center space-x-4">
            <SignedIn>
              <Link href={"/dashboard"}className="hover:flex items-center gap-2"><Button variant="outline"className="bg-white text-black hover:bg-black hover:text-white cursor-pointer flex items-center gap-2 w-full"><LayoutDashboard size={18} /><span className="hidden md:inline ">Dashboard</span></Button></Link>
              <Link href={"/transaction/create"}className="hover:flex items-center gap-2"><Button variant="outline"className="bg-white text-black hover:bg-black hover:text-white cursor-pointer flex items-center gap-2 w-full"><PenBox size={18} /><span className="hidden md:inline ">Add Transaction</span></Button></Link>
            </SignedIn>
          
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline"className="bg-white text-black hover:bg-black hover:text-white cursor-pointer">Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton  appearance={{elements:{avatarBox:"w-10 h-10 mr-2",},}}/>
            </SignedIn>
            </div>
            </nav>
            </div>
  )
}

export default Header