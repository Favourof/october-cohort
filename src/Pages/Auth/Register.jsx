import { useForm } from 'react-hook-form'
import './Register.css'

export const Register = () => {
  const {register, handleSubmit, formState:{errors}}=useForm()

    const onSubmit = (data)=>{
      console.log(data);
      

    }

    console.log("errors:",errors);
    

  return (
    <main className="register-page">
      <section className="register-card" aria-labelledby="register-heading">
        <p className="register-eyebrow">GET STARTED</p>
        <h1 id="register-heading">Create your account</h1>
        <p className="register-description">Enter your details below to join us.</p>

        <form  onSubmit={handleSubmit(onSubmit)} className="register-form">
          <div className="register-name-row">
            <div className="register-field">
              <label htmlFor="firstName">First name</label>
              <input {...register("firstName", {required: "First Name is required", minLength:{value:3, message:"Firstname must be atleast 3 characters"}, maxLength:{value: 30, message: "Firstname must not be longer than 30 characters"}})} id="firstName" name="firstName" type="text" autoComplete="given-name" placeholder="First name"  />
              {errors.firstName && <p className='text-red-400 text-xs'>{errors.firstName.message}</p>}
            </div>
            <div className="register-field">
              <label htmlFor="lastName">Last name</label>
              <input {...register("lastName", {required: "last Name is required", minLength:{value:3, message:"lastName must be atleast 3 characters"}, maxLength:{value: 30, message: "lastName must not be longer than 30 characters"}})}  id="lastName" name="lastName" type="text" autoComplete="family-name" placeholder="Last name"  />
              {errors.lastName && <p className='text-red-400 text-xs'>{errors.lastName.message}</p>}
            </div>  
          </div>

          <div className="register-field">
            <label htmlFor="email">Email address</label>
            <input {...register("email")} id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com"  />
          </div>

          <div className="register-field">
            <label htmlFor="password">Password</label>
            <input  {...register("password")}id="password" name="password" type="password" autoComplete="new-password" placeholder="Create a password"  />
          </div>

          <button className="register-button" type="submit">Create account</button>
        </form>
      </section>
    </main>
  )
}