import React, { Component } from 'react';
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };

    //getData

    componentDidMount() {
        let rooms = this.formatData(items);
        
        
        let featuredRooms = rooms.filter(room => room.featured === true);

        this.setState({ rooms,  featuredRooms, sortedRooms: rooms,loading: false });
    }


    getRoom = (slug) => {
        let tempRooms =[...this.state.rooms];
        const room = tempRooms.find((r) => r.slug === slug);
        return room;
    }


    formatData(items) {
        let tempItems = items.map(item => {

            let id = item.sys.id;
            let images = item.fields.images.map(i =>
                i.fields.file.url
            );
            //let room = {...item.fields,images:images,id}
            //alternatie way:
            // since images are part of field in the data we just overwritting with out new array off images. According to new ES6 instead of images: images, we will just write images, id, on the other hand is not part of field in the data and must be added:
            let room = {...item.fields,images,id}

            return room;
        })
        return tempItems;
    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };