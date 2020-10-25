import React from "react";
import DataAreaContext from "../utils/DataAreaContext";

function searchform () {
   
    return (
        <div className="search-box">
            <form className="form-inline">
                <input
                    type="search"
                    placeholder="Search"
                    onChange={e => DataAreaContext.handleSearchChange(e)}
                />
                <button>
                    Search
                </button>
            </form>
        </div>
    )
}

export default searchform;