import Axios from "axios";
import React, { Component } from "react";

class Home extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    // APi call to load profiles
    // this.props.actions.getUserList().then(() => {
    //   console.log(this.props.users);
    //   this.setState({ users: this.props.users });
    // });
    Axios.get("https://panorbit.in/api/users.json").then((res) => {
      const { users } = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div className="page-cont">
        <div className="user-list-cont">
          <div className="list-header">Select an account</div>
          <div className="list-body">
            {this.state.users.map((user, idx) => (
              <a className="list-item" key={idx} href={"/profile/" + user.id}>
                <div
                  className="item-img"
                  style={{
                    backgroundImage: "url(" + user.profilepicture + ")",
                  }}
                ></div>
                <div>{user.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
