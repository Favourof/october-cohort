import { useForm } from 'react-hook-form'
import './Register.css'

import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/Schema/auth'
import { publicInstance } from '@/lib/axios'
import { toast } from '@/components/ui/toast'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState:{errors}}=useForm({
    resolver:zodResolver(loginSchema)
  })

    const onSubmit = async(data)=>{
      console.log(data);
      
      try {
        const res = await publicInstance.post("auth/login", data)
        console.log(res);
        
        if (res.status == 200) {
          console.log(res.data);
          localStorage.setItem("token", res.data.token)
          navigate('/')
          toast.add({
                    title: res.data.status? "success" : "error",
                    description: res.data.message,
                    variant: res.data.status ? "default" : "destructive",

          })
          
        }
        
      } catch (error) {
        console.log(error);
        
      }

    }

    console.log("errors:",errors);
    

  return (
    <main className="Login-page">
      <section className="register-card" aria-labelledby="register-heading">
        <p className="register-eyebrow">GET STARTED</p>
        <h1 id="Login-heading">Create your account</h1>
        <p className="register-description">Enter your details below to join us.</p>

        <form  onSubmit={handleSubmit(onSubmit)} className="register-form">

          <div className="register-field">
            <label htmlFor="email">Email address</label>
            <input {...register("email")} id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com"  />
             {errors.email && <p className='text-red-400 text-xs'>{errors.email.message}</p>}
          </div>

          <div className="register-field">
            <label htmlFor="password">Password</label>
            <input  {...register("password")}id="password" name="password" type="password" autoComplete="new-password" placeholder="Create a password"  />
             {errors.password && <p className='text-red-400 text-xs'>{errors.password.message}</p>}

          </div>

          <button className="register-button" type="submit">Log in</button>
        </form>
      </section>
    </main>
  )
}