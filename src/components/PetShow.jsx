import React, { useState, useEffect } from "react";
import { getPetById } from "../services/main/pets";
import { Link } from "react-router-dom";


export default function PetShow({id}) {
    const [pet, setPet] = useState(null);

    useEffect(() => {
        async function fetchPet() {
            try {
                const petData = await getPetById(id);
                setPet(petData);
            } catch (error) {
                console.error("Error fetching pet:", error);
            }
        }
        fetchPet();
    }, [id]);


    return (
        <div className="container">
            <h2 className="text-center m-4">Pet Details</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{pet.breed}</h6>
                    <p className="card-text">Date of Birth: {pet.dateOfBirth}</p>
                </div>
            </div>
            <Link to={`/edit/${pet.id}`}>
                <button className="btn btn-primary">Edit</button>
                </Link>
        </div>
    );
}
