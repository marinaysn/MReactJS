import React, { Component } from 'react'
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {

    static contextType = RoomContext;
    render() {

        // const {name, greeting} = this.context;
       const {featuredRooms : rooms} = this.context;
       console.log(rooms);
        return (
            <div>
                hello from Featured Rooms
            </div>
        )
    }
}
