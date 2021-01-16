import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Result from "./Result";

export interface IFormData {
    name: string;
    email: string;
    number: number;
}

export default function Form() {

    const [form] = useState<IFormData[]>([])

    const {register, handleSubmit} = useForm<IFormData>();

    const onSubmit = (data: IFormData) => {
        form.push(data)
    };

    let render = form.map(data =>(
        <Result name={data.name} email={data.email} score={data.number}/>
    ));

    return (<div>
            <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="field">
                    <label htmlFor="name">Name</label>
                     <input
                         placeholder="Name"
                         ref={register}
                         type="text"
                         id="name"
                         name="name"
                     />
                 </div>
                 <div className="field">
                     <label htmlFor="email">Email</label>
                     <input
                         placeholder="Email"
                         ref={register}
                         type="email"
                         id="email"
                         name="email"
                     />
                 </div>
                 <div className="field">
                     <label htmlFor="number">Number</label>
                     <input
                         placeholder="Phone number"
                         ref={register}
                         type="phone"
                         id="number"
                         name="number"
                     />
                 </div>
                 <button type="submit">Save</button>
             </form>

            <div>
            <hr></hr>
            {render}
            </div>

         </div>
     )
 }


