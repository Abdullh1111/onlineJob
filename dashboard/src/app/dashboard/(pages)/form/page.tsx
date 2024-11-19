import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

const page = () => {

 const forms =  [
  {
    formName: "Contact Form",
    cost: "$10",
    process: "Pending",
  },
  {
    formName: "Survey Form",
    cost: "$20",
    process: "Finished",
  },
  {
    formName: "Feedback Form",
    cost: "$15",
    process: "Pending",
  },
];
  
      

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
    {forms.map((form) => (
        <TableRow key={form.formName}>
            <TableCell className="w-[100px]">{form.formName}</TableCell>
            <TableCell className='lg:flex items-center hidden '>{form.cost}</TableCell>
            <TableCell className={`text-right ${form.process === "Pending" ? "text-red-500" : "text-green-500"}`}>{form.process}</TableCell>

        </TableRow>
    ))}
  </TableBody>
</Table>

        </div>
    );
};

export default page;