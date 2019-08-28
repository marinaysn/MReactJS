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

    const { rooms, handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    //get unique types
    let types = getUnique(rooms, 'type');

    //add all
    types = ['all', ...types.reverse()];

    //map to jsx
    types = types.map((i, index) => {
        return <option value={i} key={index}>{i}</option>
    });

     //get unique capacity
     let guest = getUnique(rooms, 'capacity');

     //map to jsx
     guest = guest.reverse().map((i, index) => {
         return <option value={i} key={index}>{i}</option>
     });



    return (
        <section className="filter-container">

            <Title title="Quick Rooms Search" />

            <form className="filter-form">
                {/* Select Type*/}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* end of Select Type */}

                {/* Select Guests*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {guest}
                    </select>
                </div>
                {/* end of Select Guests */}


                {/* Price Range Filter*/}
                <div className="form-group">
                    <label htmlFor="price">Price: ${price}</label>
                <input 
                type="range" 
                name="price" 
                min={minPrice} 
                max={maxPrice} 
                id="price" 
                value={price} 
                className="form-control" 
                onChange={handleChange} />
                </div>
                {/* end of Price Range Filter*/}

                {/*  */}
                {/* end of  */}
            </form>
        </section>
    )
}



