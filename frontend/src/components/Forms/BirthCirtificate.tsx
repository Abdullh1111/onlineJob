"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import FormItems from "./FormItems"
import { useFormSubmissionMutation } from "@/redux/services/form"
import { useAppSelector } from "@/redux/redux.hook"


export function BirthCertificateForm({name}:{name:string}) {
  // ...
const form = useForm()

const users = useAppSelector((state) => state.user.user)
const [submitForm,{isLoading}] = useFormSubmissionMutation()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onsubmit = (data:any) => {
  submitForm({formName:name,cost:50,formDetails:data,userId:users?.id})
}

  return (
    <div className="my-10">
        <p className="text-center">ফাইল আপলোড সাইন কপি</p>
        <div className="border-2 2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] lg:p-10 p-2">
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-8">
        <FormItems form={form} label="Register Office Address"></FormItems>
        <FormItems form={form} label="Upazila/Pourashava/City Corporation, Zila"></FormItems>
        <FormItems form={form} label="Birth Registration Number"></FormItems>
        <FormItems form={form} label="Gender"></FormItems>
        <FormItems form={form} label="Date of Registration"></FormItems>
        <FormItems form={form} label="Date of Issuance"></FormItems>
        <FormItems form={form} label="Left Bar Code"></FormItems>
        <FormItems form={form} label="QR Link"></FormItems>
        <FormItems form={form} label="Date of Birth"></FormItems>
        <FormItems form={form} label="Date of Birth in Word"></FormItems>
        <FormItems form={form} label="নাম"></FormItems>
        <FormItems form={form} label="Name"></FormItems>
        <FormItems form={form} label="পিতার নামঃ"></FormItems>
        <FormItems form={form} label="Father Name"></FormItems>
        <FormItems form={form} label="পিতার জাতীয়তা"></FormItems>
        <FormItems form={form} label="Father Nationality"></FormItems>
        <FormItems form={form} label="মাতার নামঃ"></FormItems>
        <FormItems form={form} label="Mother Name"></FormItems>
        <FormItems form={form} label="মাতার জাতীয়তা"></FormItems>
        <FormItems form={form} label="Mother Nationality"></FormItems>
        <FormItems form={form} label="জন্ম স্থানঃ"></FormItems>
        <FormItems form={form} label="Place of Birth"></FormItems>
        <FormItems form={form} label="Permanent Address"></FormItems>
        <FormItems form={form} label="স্থায়ী ঠকিানা:"></FormItems>
        <div className="w-full flex justify-center items-center bg-primaryColour text-white lg:py-5 py-1 lg:rounded-xl rounded lg:text-xl text-sm">
        আপনার একাউন্ট থেকে 50 টাকা কাটা হবে।
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
