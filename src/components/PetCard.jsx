import React from "react";
import { deletePet } from "../services/main/pets";
import {Link} from "react-router-dom";

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
            <Link to={`pet/${pet.id}`}>
                <button className="btn btn-primary">Show</button>
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </td>
    </>
    )
}