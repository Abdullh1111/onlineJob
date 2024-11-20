"use client"
import { useGetUserQuery } from "@/redux/services/user"
import { setUser } from "@/redux/features/userSlice"
import { useEffect } from "react"
import { useAppDispatch } from "@/redux/redux.hook";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl,  FormField,  FormItem, FormLabel, FormMessage } from "../ui/form";

import { Input } from "../ui/input";
type formItems = {
    label:string,
    name?:string,
    form:any
}

const FormItems = ({label,name,form}:formItems) => {
  const dispatch = useAppDispatch()
const {data} = useGetUserQuery()
useEffect(() => {
  if(data?.data){
      dispatch(setUser(data?.data))
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[data])
    return (
        <FormField
          control={form.control}
          name={label || name || ""}
          render={({ field }) => (
            <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input  {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
          )}
        />
    );
};

export default FormItems;