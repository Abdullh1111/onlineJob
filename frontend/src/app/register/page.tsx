
import { Register } from '@/components/Register';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='bg-[#F8FAFF] h-screen w-screen flex justify-center items-center'>
            <div className='flex flex-col w-[320px] justify-center items-center p-5 bg-white '>
                <Register></Register>
                
            <div className='mt-5'>
            <p>Already have account?</p>
            <Link className='text-primaryColour' href="/login">Login now</Link>
            </div>
            </div>
        </div>
    );
};

export default page;