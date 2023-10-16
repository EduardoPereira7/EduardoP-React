import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPetById, updatePet } from "../services/main/pets";

export default function PetEdit() {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    useEffect(() => {
        async function fetchPet() {
            try {
                const petData = await getPetById(id);
                setPet(petData);
                setName(petData.name);
                setBreed(petData.breed);
                setDateOfBirth(petData.dateOfBirth);
            } catch (error) {
                console.error("Error fetching pet:", error);
            }
        }
        fetchPet();
    }, [id]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedPet = {
                id: pet.id,
                name,
                breed,
                dateOfBirth,
            };
            const result = await updatePet(updatedPet);
            console.log("Pet updated:", result);
        } catch (error) {
            console.error("Error updating pet:", error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center m-4">Edit Pet</h2>
            <form className="p-3 rounded bg-light" onSubmit={handleFormSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="breed" className="form-label">
                        Breed
                    </label>
                    <input
                        type="text"
                        name="breed"
                        id="breed"
                        className="form-control"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="dateOfBirth" className="form-label">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        className="form-control"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Pet
                </button>
            </form>
        </div>
    );
}
