import React, { Component } from 'react'
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {

    static contextType = RoomContext;
    render() {
       
        // const {name, greeting} = this.context;
       const {featuredRooms : rooms} = this.context;
       console.log(rooms);
       console.log("price " + rooms.name);
      // console.log("price2 " + rooms[0].price);
        return (
            <div>
                hello from Featured Rooms {rooms.price}
            </div>
        )
    }
}
