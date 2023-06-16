"use client";
import { useCallback, useState } from "react";
import Input from "@/components/Input";


 
const Auth = () => {
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  
  const [variant, setVariant] = useState('Login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant == 'login' ? 'register' : 'login')
  }, [])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12"></img>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant == 'login' ? 'Sing in' : 'Register'}
            </h2>
          
            <div className="flex flex-col gap-4" >
              {variant == 'register' && (
              <Input
                id="name"
                onChange={(ev: any) => setName(ev.target.value)}
                value={name}
                lable="Username"
              />
              )}
              <Input
                id="email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                value={email}
                lable="Email"
                type="email"
              />
              <Input
                id="password"
                onChange={(ev: any) => setEmail(ev.target.value)}
                value={password}
                lable="Password"
                type="password"
              />
            </div>
              <button className="bg-red-600 py-3 text-white rounded-md  w-full mt-10 hover:bg-red-900 transition-transform">
                {variant == 'login' ? 'login' : 'Sing up'}
              </button>
              <p className="text-neutral-500 mt-12">
                {variant == 'login' ? 'First time Using TV.PS? ' : 'Already have an account? '}
                <span onClick={toggleVariant} className="text-white m1-1 hover:underline cursor-pointer">
                    {variant == 'login' ? 'Create an account' : 'login'}
                </span>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;