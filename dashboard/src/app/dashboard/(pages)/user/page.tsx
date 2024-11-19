import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

const page = () => {

     const users = [
        {
          name: "John Doe",
          email: "johndoe@example.com",
          password: "$2b$10$G5Rq8fV7fKPN.324hxrUY.pGcQT3jyswNGikzM7meAQnUF83Gb/Za",
          role: "user",
          balance: 0,
        },
        {
          name: "Jane Smith",
          email: "janesmith@example.com",
          password: "$2b$10$G5Rq8fV7fKPN.324hxrUY.pGcQT3jyswNGikzM7meAQnUF83Gb/Za",
          role: "user",
          balance: 0,
        },
        {
          name: "Alice Brown",
          email: "alicebrown@example.com",
          password: "$2b$10$G5Rq8fV7fKPN.324hxrUY.pGcQT3jyswNGikzM7meAQnUF83Gb/Za",
          role: "user",
          balance: 0,
        },
        {
          name: "Bob Johnson",
          email: "bobjohnson@example.com",
          password: "$2b$10$G5Rq8fV7fKPN.324hxrUY.pGcQT3jyswNGikzM7meAQnUF83Gb/Za",
          role: "user",
          balance: 0,
        },
        {
          name: "Charlie Davis",
          email: "charliedavis@example.com",
          password: "$2b$10$G5Rq8fV7fKPN.324hxrUY.pGcQT3jyswNGikzM7meAQnUF83Gb/Za",
          role: "user",
          balance: 0,
        },
      ];
      

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
    {users.map((user) => (
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

export default page;