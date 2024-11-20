import { Login } from '@/components/login';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='bg-[#F8FAFF] h-screen w-screen flex justify-center items-center'>
            <div className='flex flex-col w-[320px] justify-center items-center p-5 bg-white '>
            <Login/>
            <div  className='mt-5'>
            <p>Don't have account?</p>
            <Link className='text-primaryColour' href="/register">register now</Link>
            </div>
            </div>
        </div>
    );
};

export default page;