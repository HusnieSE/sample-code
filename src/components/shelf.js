import React, { Component } from 'react';

class Shelf extends Component {
    constructor(props) {
        super(props)
        const clickItem = this.clickItem.bind(this)
        this.state = {
            shelfItems: [
                "Shampoo",
                "Chocolate",
                "yogurt"
            ]
        }
    }

    clickItem(item) {

        this.props.addItem(item);
    }

    render() {
        const shelfItem = this.state.shelfItems.map((item, index) => {
            return <li key={index}> <button onClick = {()=>this.clickItem(item)}> + </button> {item} </li>
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
