"use client"
import { CardDemo } from '@/components/card';
import { useFinishedFormsQuery } from '@/redux/services/form';
import React from 'react';

const Page = () => {

    const {data} = useFinishedFormsQuery()  
    
    return (
        <div>
            <p className='text-2xl font-bold'>Finished</p>

            <CardDemo data={data}></CardDemo>
        </div>
    );
};

export default Page;