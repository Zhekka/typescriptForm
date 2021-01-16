import React from "react";

export interface DataProps {
    name: string,
    email: string,
    score: number
}

export default function Result({name, email, score}: DataProps) {
    return (<div>
            Name: {name}<br></br>
            Email: {email}<br></br>
            Phone number: {score}<br></br>
            <hr></hr>
        </div>
    )
}

