import React, { Component } from 'react'
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title"

export default class FeaturedRooms extends Component {

    static contextType = RoomContext;
    render() {
               
        // const {name, greeting} = this.context;
       let { loading, featuredRooms : rooms} = this.context;
       
       rooms = rooms.map(r => {
           return <Room key={r.id} room={r} />
       })
      // console.log("price2 " + rooms[0].price);
        return (
            <section className="featured-rooms">
                <Title title='Featured Rooms'></Title>
                <div className="featured-rooms-center">
                    { loading ? <Loading /> : rooms }
                </div>
                
            </section>
        )
    }
}
