"use client"

import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLoginUserMutation } from "@/redux/services/user"


export function Login() {
  
    
const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  
  const [submitData,{data,error,isLoading}] = useLoginUserMutation()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onsubmit = (datas: any) => {
    submitData(datas)
  }
  
  console.log(data,error)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>Submit</Button>
      </form>
    </Form>
  )
}