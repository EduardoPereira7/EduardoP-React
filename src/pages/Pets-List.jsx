import React,{useState} from "react";
import Search from "../components/Search";
import PetsList from "../components/PetsList";

export default function PetsListPage() {
    const [search, setSearch] = useState("");

    return (
        <>
        <div className="d-flex ">
            <Search search={search} setSearch={setSearch}></Search>
        </div>
        <div className="container">
        <h1>Pets List</h1>
        <PetsList search={search} />
        </div>
        </>
    );
}
