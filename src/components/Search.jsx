import React from "react";

export default function Search({ search, setSearch }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form>
                        <div className="form-group d-flex">
                            <label className="text-center w-25">Search: </label>
                            <input
                                type="text"
                                className="form-control w-50"
                                id="search"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}