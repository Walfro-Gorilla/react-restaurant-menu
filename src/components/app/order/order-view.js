import React, { Component } from "react"
import OrderItem from "./order-item"
import Grid from "@material-ui/core/Grid"

export default class OrderView extends Component {
  handleClick = (id, itemTitle) => {
    this.props.itemHandler(id, itemTitle)
  }

  render() {
    return this.props.data.map(res => (
      <Grid item xs={4} key={res.id}>
          <OrderItem
            id={res.id}
            itemTitle={res.title}
            itemDescription={res.description}
            itemImage={res.image}
            itemHandler={this.handleClick}
            className="order-item"
            selected={this.props.selectedItems.hasOwnProperty(res.id)}
          />
      </Grid>
    ))
  }
}
