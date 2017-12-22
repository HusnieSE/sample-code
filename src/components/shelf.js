import React, { Component } from 'react';

class Shelf extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shelfItems: [
                "Shampoo",
                "Chocolate",
                "yogurt"
            ]
        }
    } 

    render() {
        const shelfItem = this.state.shelfItems.map((item, index) => {
            return <li key={index}> <button> + </button> {item} </li>
        })

        return (
            <div>
                <h2> Shelf </h2>
                <ul>
                    {shelfItem}
                </ul>
            </div>
        );
  }
}

export default Shelf;
