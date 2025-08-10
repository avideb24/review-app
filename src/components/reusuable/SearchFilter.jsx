import React from "react";


const SearchFilter = ({ searchTerm, onSearchChange }) => {

    return (
        <div className="card my-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                    <label htmlFor="search" className="input-label">
                        Search by Shop Name
                    </label>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Enter shop name to filter..."
                        className="input"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
