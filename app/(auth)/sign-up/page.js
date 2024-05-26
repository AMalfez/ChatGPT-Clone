import { signup } from './actions';
import Link from 'next/link';

function Signup() {
  
  return (
    <div className='w-3/12 border min-h-96'>
      <p className='text-center font-semibold text-lg mb-5'>Sign Up</p>
      <form className='w-full h-full flex flex-col'>
      <input className='border rounded py-3 mb-4 px-4 border-green-700' id="email" name="email" type="email" placeholder='Email address' required />
      <input className='border rounded py-3 mb-4 px-4 border-green-700' id="name" name="name" type="text" placeholder='Username' required />
      <input className='border rounded py-3 mb-6 px-4 border-green-700' id="password" name="password" type="password" placeholder='Password' required />
      <button className='bg-green-700 rounded cursor-pointer py-3 px-4 w-full text-white font-medium hover:bg-green-900' formAction={signup}>Sign up</button>
    </form>
    <Link href={"/sign-in"} className='text-green-700 cursor-pointer text-center text-sm mt-5 hover:text-green-800'>Already have Account ? Login</Link>
    </div>
  )
}
export const metadata = {
    title: "Sign Up - ChatGPT",
    description: "A ChatGPT clone from nextjs ",
  };
  
  
export default Signup