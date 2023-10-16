import React, { useState } from "react";
import { createPet } from "../services/main/pets";
import { useNavigate } from "react-router-dom";

export default function PetFormCreate() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

    try {
        const newPet = {
        name,
        breed,
        dateOfBirth,
        };

        const createdPet = await createPet(newPet);
        console.log("Pet created:", createdPet);
        navigate("/pets");
    } catch (error) {
        console.error("Error creating pet:", error);
    }
}

    return (
    <div className="container">
        <h2 className="text-center m-4">Create Pet</h2>
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
            Create Pet
        </button>
        </form>
    </div>
    );
}
