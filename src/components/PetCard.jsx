import React from "react";

export default function PetCard({ pet }) {
    return(
    <>
        <td>{pet.name}</td>
        <td>{pet.breed}</td>
        <td>{pet.dateOfBirth}</td>
        <td>
            <button></button>
        </td>
    </>
    )
}