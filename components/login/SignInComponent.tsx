"use client"
import { signIn } from "next-auth/react"
import Image  from "next/image"

export default function SignInPage(){
    return(
        <div>
            <h1 className="  text-center text-2xl bg-gray-800 ">
                Welcome To Github
            </h1>
            <div className="flex justify-center items-center">
            <button 
                onClick={() => signIn()}
            >
                Click On The Image To Sign In!
            </button>
        </div>
            <div className="flex justify-center items-center">
  <button onClick={() => window.open("https://github.com", "_blank")}>
    <Image
      className="cursor-pointer"
      src="/github-mark-white.png"
      alt="Github Logo"
      width={300}
      height={300}
    />
  </button>
</div>
            </div>
        )
}