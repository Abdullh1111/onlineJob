"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import FormItems from "./FormItems"


export function BirthCertificateForm() {
  // ...
const form = useForm()
  return (
    <div className="my-10">
        <p className="text-center">ফাইল আপলোড সাইন কপি</p>
        <div className="border-2 2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] lg:p-10 p-2">
        <Form {...form}>
      <form  className="space-y-8">
        <FormItems label="Register Office Address"></FormItems>
        <FormItems label="Upazila/Pourashava/City Corporation, Zila"></FormItems>
        <FormItems label="Birth Registration Number"></FormItems>
        <FormItems label="Gender"></FormItems>
        <FormItems label="Date of Registration"></FormItems>
        <FormItems label="Date of Issuance"></FormItems>
        <FormItems label="Left Bar Code"></FormItems>
        <FormItems label="QR Link"></FormItems>
        <FormItems label="Date of Birth"></FormItems>
        <FormItems label="Date of Birth in Word"></FormItems>
        <FormItems label="নাম"></FormItems>
        <FormItems label="Name"></FormItems>
        <FormItems label="পিতার নামঃ"></FormItems>
        <FormItems label="Father Name"></FormItems>
        <FormItems label="পিতার জাতীয়তা"></FormItems>
        <FormItems label="Father Nationality"></FormItems>
        <FormItems label="মাতার নামঃ"></FormItems>
        <FormItems label="Mother Name"></FormItems>
        <FormItems label="মাতার জাতীয়তা"></FormItems>
        <FormItems label="Mother Nationality"></FormItems>
        <FormItems label="জন্ম স্থানঃ"></FormItems>
        <FormItems label="Place of Birth"></FormItems>
        <FormItems label="Permanent Address"></FormItems>
        <FormItems label="স্থায়ী ঠকিানা:"></FormItems>
        <div className="w-full flex justify-center items-center bg-primaryColour text-white lg:py-5 py-1 lg:rounded-xl rounded lg:text-xl text-sm">
        আপনার একাউন্ট থেকে 50 টাকা কাটা হবে।
        </div>
        <div className="flex justify-center">
            
        <Button className="bg-primaryColour text-lg text-white" type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </div>
    </div>
  )
}
