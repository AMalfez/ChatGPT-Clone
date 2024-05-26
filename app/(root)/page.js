"use server"
import Home from "@/components/Home/Home"
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
async function Page() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/sign-in')
  }

  return (
    <>
    <Home user={data.user}/>
    </>
  )
}

export default Page