import React, { Component } from "react"

export default class StepsButton extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.course)
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.handleClick}>
        {this.props.courseName}
      </button>
    )
  }
}