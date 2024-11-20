"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import FormItems from "./FormItems"
import { useFormSubmissionMutation } from "@/redux/services/form"
import { useAppSelector } from "@/redux/redux.hook"


export function NumberForm({name,label}:{label:string,name:string}) {
  // ...
  const users = useAppSelector((state) => state.user.user)

  // console.log(users)
  const [submitForm,{isLoading}] = useFormSubmissionMutation()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onsubmit = (data:any) => {
    submitForm({formName:name,cost:7,formDetails:data,userId:users?.id})
  }
const form = useForm()
  return (
    <div className="my-10">
        <p className="text-center">ফাইল আপলোড সাইন কপি</p>
        <div className="border-2 2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] lg:p-10 p-2">
        <Form {...form} >
      <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-8">
        <FormItems form={form} name="number" label={label}></FormItems>
        <div className="w-full flex justify-center items-center bg-primaryColour text-white lg:py-5 py-1 lg:rounded-xl rounded lg:text-xl text-sm">
        আপনার একাউন্ট থেকে 7 টাকা কাটা হবে।
        </div>
        <div className="flex justify-center">
            
        <Button disabled={isLoading} className="bg-primaryColour text-lg text-white" type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </div>
    </div>
  )
}
