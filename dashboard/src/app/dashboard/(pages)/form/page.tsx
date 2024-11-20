/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetAllFormsQuery } from '@/redux/services/form';
import React from 'react';

const Page = () => {
  const {data} = useGetAllFormsQuery()
  console.log(data?.data)
  let forms = []
if(data){
   forms = data?.data
}
  
      

    return (
        <div className=' p-4 bg-white my-10'>
            <p className='text-2xl font-bold'>User Details</p>
            <Table className=''>
  <TableCaption>A list of your users.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Form Name</TableHead>
      <TableHead className='lg:flex hidden items-center'>cost</TableHead>
      <TableHead className="text-right">proccess</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {forms?.map((form:any,index : number) => (
        <TableRow key={index}>
            <TableCell className="w-[100px]">{form.formName}</TableCell>
            <TableCell className='lg:flex items-center hidden '>{form.cost}</TableCell>
            <TableCell className={`text-right ${form.proccess === "pending" ? "text-red-500" : "text-green-500"}`}>{form.proccess}</TableCell>

        </TableRow>
    ))}
  </TableBody>
</Table>

        </div>
    );
};

export default Page;