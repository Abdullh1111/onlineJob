/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl,  FormField,  FormItem, FormLabel, FormMessage } from "../ui/form";

import { Input } from "../ui/input";
type formItems = {
    label:string,
    name:string,
    form:any
}

const FormItems = ({label,name,form}:formItems) => {
    
    return (
        <div>
        <FormField
          control={form.control}
          name={name}
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