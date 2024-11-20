/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAllUserQuery } from '@/redux/services/user';
import React from 'react';

const Page = () => {

  const {data} = useAllUserQuery()
     const users = data?.data
      

    return (
        <div className=' p-4 bg-white my-10'>
            <p className='text-2xl font-bold'>User Details</p>
            <Table className=''>
  <TableCaption>A list of your users.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">name</TableHead>
      <TableHead className='lg:flex hidden'>email</TableHead>
      <TableHead className="text-right">balance</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users?.map((user:any) => (
        <TableRow key={user.email}>
            <TableCell className="w-[100px]">{user.name}</TableCell>
            <TableCell className='lg:flex hidden'>{user.email}</TableCell>
            <TableCell className="text-right">{user.balance}</TableCell>

        </TableRow>
    ))}
  </TableBody>
</Table>

        </div>
    );
};

export default Page;