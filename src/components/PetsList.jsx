import React from 'react';
import { getAllPets } from '../services/main/pets';
import { useState, useEffect } from 'react';
import PetCard from './PetCard';

export default function PetsList({search}) {

    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPets() {
            try {
                const data = await getAllPets();
                setPets(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchPets();
    }, []);

    const filteredPets = pets.filter((pet) => 
        pet.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div className="container">
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Breed</th>
                <th>Date of Birth</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {filteredPets.map((pet) => (
                <tr key={pet.id}>
                <PetCard pet={pet} />
                </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
}

