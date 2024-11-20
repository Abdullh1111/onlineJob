"use client"
import { CardDemo } from '@/components/card';
import { usePendingFormsQuery } from '@/redux/services/form';
import React from 'react';

const Page = () => {
    const {data} = usePendingFormsQuery()
    return (
        <div>
            <p className='text-2xl font-bold'>Pending</p>

            <CardDemo data={data}></CardDemo>
        </div>
    );
};

export default Page;