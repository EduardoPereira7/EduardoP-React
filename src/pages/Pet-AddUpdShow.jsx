import React from "react";
import { useParams } from "react-router-dom";
import PetShow from "../components/PetShow";
import PetUpdateForm from "../components/PetUpdateForm";

export default function PetAddUpdShow(){
    const { id } = useParams();
    return(
        <>
        <PetShow id={id}></PetShow>
        <PetUpdateForm id={id}></PetUpdateForm>
        </>
    )
}