"use client"
import { useGetUserQuery } from "@/redux/services/user"
import { setUser } from "@/redux/features/userSlice"
import { useEffect } from "react"
import React from 'react';
import { useAppDispatch, useAppSelector } from "@/redux/redux.hook";
const Page = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector((state) => state.user.user)
  const {data} = useGetUserQuery()
  useEffect(() => {
    if(data?.data){
        dispatch(setUser(data?.data))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])
  console.log(users)
    return (
        <div>
            
        </div>
    );
};

export default Page;