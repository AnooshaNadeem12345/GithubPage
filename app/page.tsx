import { SessionWrapper } from "@/components/login/SessionWrapper";
import SignInPage from "@/components/login/SignInComponent";
import SignOutPage from "@/components/login/SignOutComponent";
import { auth } from "@/lib/auth";

export default async function Home(){
  const session = await auth()
  const isAuthenticated = !!session?.user
  return (
    <div>
      <SessionWrapper>
        {isAuthenticated ? <SignOutPage /> : <SignInPage />}
      </SessionWrapper>
    </div>
  )
}