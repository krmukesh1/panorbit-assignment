import React, { Component } from "react";
import MapComponent from "./MapComponent";
import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";
import Axios from "axios";

class Profile extends Component {
  state = {
    userData: {},
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const userId = parseInt(params.userId, 10);

    // this.props.actions.getUserList().then(() => {
    //   const userData = this.props.users.find(user => user.id === userId);

    //   this.setState({ users: this.props.users, userData });
    // });
    Axios.get("https://panorbit.in/api/users.json").then((res) => {
      const { users } = res.data;
      const userData = users.find((user) => user.id === userId);
      this.setState({ users, userData });
    });
  }

  render() {
    const { userData } = this.state;
    return (
      <div className="profile-cont">
        <Sidebar />
        <div className="main-cont">
          <PageHeader />
          <div style={{ display: "flex" }}>
            <div className="profile-det-cont">
              <div
                className="profile-image"
                style={{
                  backgroundImage: "url(" + userData.profilepicture + ")",
                }}
              ></div>
              <div>
                <strong>{userData.name}</strong>
              </div>
              <div className="det-item">
                <div className="label">Username : </div>
                <div className="value"> {userData.username}</div>
              </div>
              <div className="det-item">
                <div className="label">E-mail : </div>
                <div className="value"> {userData.email}</div>
              </div>
              <div className="det-item">
                <div className="label">Phone : </div>
                <div className="value"> {userData.phone}</div>
              </div>
              <div className="det-item">
                <div className="label">Website : </div>
                <div className="value"> {userData.website}</div>
              </div>

              <div className="det-item border-top">
                <div className="label">Company </div>
              </div>

              <div className="det-item">
                <div className="label">Name : </div>
                <div className="value">
                  {userData.company && userData.company.name}
                </div>
              </div>
              <div className="det-item">
                <div className="label">catchPhrase : </div>
                <div className="value">
                  {userData.company && userData.company.catchPhrase}
                </div>
              </div>
              <div className="det-item">
                <div className="label">bs : </div>
                <div className="value">
                  {userData.company && userData.company.bs}
                </div>
              </div>
            </div>
            <div className="profile-map-cont ">
              <div className="profile-det-cont">
                <div className="det-item ">
                  <div className="label">Address </div>
                  <div className="value"></div>
                </div>
                <div className="det-item">
                  <div className="label">Street : </div>
                  <div className="value">
                    {userData.address && userData.address.street}
                  </div>
                </div>
                <div className="det-item">
                  <div className="label">Suite : </div>
                  <div className="value">
                    {userData.address && userData.address.suite}
                  </div>
                </div>
                <div className="det-item">
                  <div className="label">City : </div>
                  <div className="value">
                    {userData.address && userData.address.city}
                  </div>
                </div>
                <div className="det-item">
                  <div className="label">Zipcode : </div>
                  <div className="value">
                    {userData.address && userData.address.zipcode}
                  </div>
                </div>
              </div>

              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
