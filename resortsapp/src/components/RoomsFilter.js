import React from 'react';
import { useContext } from 'react';
import { RoomContext } from "../context";
import Title from "../components/Title";

//get all unique values

const getUnique = (items, value) => {

    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter() {

    const context = useContext(RoomContext);

    const { rooms, handleChange, type, capacity, price, minPrice, maxPrice,
        minSize, maxSize, breakfast, pets } = context;

    //get unique types
    let types = getUnique(rooms, 'type');
        //add all
    types = ['all', ...types];

    //map to jsx
        types = types.map( (i,idx)=>{
            return <option value={i} key={idx}>{i}</option>
        });



    return (
        <section className="filter-container">

            <Title title="search-rooms" />

            <form className="filter-form">
                {/* Select Type*/}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control"
                        onChange={handleChange}>
                        {types}

                    </select>
                </div>
                {/* end of Select Type */}


                {/*  */}
                {/* end of  */}
            </form>
        </section>
    )
}



