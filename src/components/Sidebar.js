import React, { Component } from "react";

export default class Sidebar extends Component {
  state = {
    menuItems: [
      { id: 0, name: "Profile", active: true },
      { id: 1, name: "Posts" },
      { id: 2, name: "Gallery" },
      { id: 3, name: "ToDo" },
    ],
  };

  componentDidMount() {}

  render() {
    return (
      <div className="sidebar-cont">
        {this.state.menuItems.map((item) => (
          <div
            className={"sidebar-item " + (item.active ? "active" : "")}
            key={item.id}
          >
            <span className="item-title">{item.name}</span>
            {item.active ? <span className="active-icon"> * </span> : ""}
          </div>
        ))}
      </div>
    );
  }
}
