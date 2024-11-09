/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl,  FormField,  FormItem, FormLabel, FormMessage } from "../ui/form";

import { useForm } from "react-hook-form"
import { Input } from "../ui/input";
type formItems = {
    label:string,
}

const FormItems = ({label}:formItems) => {
    
const form = useForm()
    return (
        <div>
        <FormField
          control={form.control}
          name="username"
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
        </div>
    );
};

export default FormItems;