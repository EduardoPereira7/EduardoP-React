import React,{useState} from "react";
import Search from "../components/Search";
import PetsList from "../components/PetsList";
import { Link } from "react-router-dom";

export default function PetsListPage() {
    const [search, setSearch] = useState("");

    return (
        <>
        <div className="container d-flex flex-column">
        <h1 className="text-center">Pets List</h1>
        <div className="container d-flex justify-content-center my-3">
            <Search search={search} setSearch={setSearch}></Search>
            <button className="btn btn-primary">Add Pet
                <Link to={'/add'}></Link>
            </button>
        </div>
        <div className="container">
        <PetsList search={search} />
        </div>
        </div>
        </>
    );
}
