'use client'

import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [typedText, setTypedText] = useState('')
  const fullText = "The page you're looking for doesn't exist or has been moved."

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullText.length; i++) {
        setTypedText(fullText.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 50))
      }
    }
    typeText()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-5 overflow-hidden">
      <div className="text-center z-10">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            404
          </span>
        </h1>
        <p className="text-white text-2xl px-4 mt-4">{typedText}</p>
        <Link href="/" passHref>
          <Button className="mt-8 bg-white text-gray-900 hover:bg-gray-200 transition-all duration-200 transform hover:scale-105">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </Link>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  )
}