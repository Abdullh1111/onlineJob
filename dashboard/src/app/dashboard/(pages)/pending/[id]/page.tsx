"use client"
import { Button } from '@/components/ui/button';
import { useGetByIdFormQuery, useUpdateFormsMutation } from '@/redux/services/form';
import { useParams } from 'next/navigation';
import React, { useState,useEffect } from 'react';

const Page = () => {
    const {id} = useParams();
    const {data} = useGetByIdFormQuery(id as string)
    const [key,setKeys] = useState<string[]>([]) 
    const [values,setValues] = useState<string[]>([])
    const [updated,{isLoading}]=useUpdateFormsMutation()
    useEffect(()=>{
        if(data){
            setKeys(Object?.keys(data?.data?.formDetails))
            setValues(Object?.values(data?.data?.formDetails))
        }
    },[data])
    const update = () => {
        updated({id,proccess:"finished"})
    }
    return (
        <div>
            <p className='text-2xl font-bold'> Forms Details</p>
            {
                key?.map((key,index)=>{
                    return <p key={index}><span className="font-extrabold mr-10">{key}</span> : {values[index]}</p>
                })
            }
            <Button disabled={isLoading} className={`${data?.data?.proccess === "finished" && "hidden"}`} onClick={update}>update form</Button>
        </div>
    );
};

export default Page;