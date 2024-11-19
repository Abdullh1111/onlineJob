import { Login } from '@/components/login';
import React from 'react';

const page = () => {
    return (
        <div className='bg-[#F8FAFF] h-screen w-screen flex justify-center items-center'>
            <div className='flex w-[320px] justify-center items-center p-5 bg-white '>
            <Login/>
            </div>
        </div>
    );
};

export default page;