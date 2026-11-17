  import z from 'zod'
  
  export const registerSchema = z.object({
    firstName: z.string({invalid_type_error: "FirstName must be a string", required_error: "FirstName is required",}).min(3, "Firstname must be atleast 3 characters").max(30, "Firstname must not be longer than 30 character"),
     lastName: z.string({invalid_type_error: "lastName must be a string", required_error: "lastName is required",}).min(3, "lastName must be atleast 3 characters").max(30, "lastName must not be longer than 30 character"),
     email: z.email("must be a valid email adderess").lowercase().nonempty("email is required"),
     password: z
  .string({
    error: "Password must be a string",
  })
  .min(8, { error: "Password must be at least 8 characters" })
  .max(32, { error: "Password must not exceed 32 characters" })
  .regex(/[A-Z]/, { error: "Must contain at least one uppercase letter" })
  .regex(/[a-z]/, { error: "Must contain at least one lowercase letter" })
  .regex(/[0-9]/, { error: "Must contain at least one number" })
  .regex(/[^A-Za-z0-9]/, { error: "Must contain at least one special character" }),   
    
  })
  

    
  export const loginSchema = z.object({
     email: z.email("must be a valid email adderess").lowercase().nonempty("email is required"),
     password: z
  .string({
    error: "Password must be a string",
  })
  .min(8, { error: "Password must be at least 8 characters" })
  .max(32, { error: "Password must not exceed 32 characters" })
  .regex(/[A-Z]/, { error: "Must contain at least one uppercase letter" })
  .regex(/[a-z]/, { error: "Must contain at least one lowercase letter" })
  .regex(/[0-9]/, { error: "Must contain at least one number" })
  .regex(/[^A-Za-z0-9]/, { error: "Must contain at least one special character" }),   
    
  })