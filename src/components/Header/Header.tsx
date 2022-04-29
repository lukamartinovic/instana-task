import React, { ChangeEvent } from "react";
import { filterLikedToggle } from "observables";

export const Header = () => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        filterLikedToggle.next(e.target.checked);
    };

    return (
        <header>
            <label>
                Show only liked tweets
                <input onChange={handleChange} type="checkbox" name="list" value="all" />
            </label>
        </header>
    );
};
