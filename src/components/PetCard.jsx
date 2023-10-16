import React from "react";
import { deletePet } from "../services/main/pets";

export default function PetCard({ pet, onDelete }) {

    const handleDelete = async () => {
        try {
            await deletePet(pet.id);
            onDelete(pet.id);
        } catch (error) {
            console.log("Error deleting pet", error);
        }
    }
    return(
    <>
        <td>{pet.name}</td>
        <td>{pet.breed}</td>
        <td>{pet.dateOfBirth}</td>
        <td>
            <button className="btn btn-primary">Show</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </td>
    </>
    )
}