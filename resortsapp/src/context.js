import React, { Component } from 'react';
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,

        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize:0,
        maxSize: 0,
        breakfast: false,
        pets: false

    };

    //getData

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPr = Math.max(...rooms.map(i => i.price));
        let maxS = Math.max(...rooms.map(i => i.size));

        this.setState({ 
            rooms,  
            featuredRooms, 
            sortedRooms: rooms,
            loading: false,
            price: maxPr,
            maxPrice: maxPr,
            maxSize: maxS  
         });
    }


    getRoom = (slug) => {
        let tempRooms =[...this.state.rooms];
        const room = tempRooms.find((r) => r.slug === slug);
        return room;
    }

    handleChange = event =>{

        const type = event.target.type;
        
        const target = event.target;
        const value = event.type === 'checkbox' ? target.checked: target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        }, this.filterRooms)

        console.log(type);
        console.log(name);
        console.log(value);
    }

    filterRooms = () =>{
        console.log("Hello Filter Rooms! Mar Mar mmmmmmmmmmmm")
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
            <RoomContext.Provider 
                value={{ 
                ...this.state, 
                getRoom: this.getRoom,
                handleChange: this.handleChange
                }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper (props) {
        return <RoomConsumer>
            {value => <Component {...props} context ={value} />}
        </RoomConsumer>
    }
};

export { RoomProvider, RoomConsumer, RoomContext };