import {login} from './actions.js'
import Link from 'next/link.js';

function Signin() {
  return (
    <div>
      <p className='text-center font-semibold text-lg mb-5'>Sign Up</p>
      <form className='w-full h-full flex flex-col'>
      <input className='border rounded py-3 mb-4 px-4 border-green-700' id="email" name="email" type="email" placeholder='Email address' required />
      <input className='border rounded py-3 mb-6 px-4 border-green-700' id="password" name="password" type="password" placeholder='Password' required />
      <button className='bg-green-700 rounded cursor-pointer py-3 px-4 w-full text-white font-medium hover:bg-green-900' formAction={login}>Sign in</button>
    </form>
    <Link href={"/sign-up"} className='text-green-700 cursor-pointer text-center text-sm mt-5 hover:text-green-800'>Dont have Account ? Signup</Link>
    </div>
  )
}

export const metadata = {
    title: "Sign in - ChatGPT",
    description: "A ChatGPT clone from nextjs ",
  };
  

export default Signin