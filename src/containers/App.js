import React from "react";
import { connect } from "react-redux";
import {
  getUserRequest,
  createNewUserRequest,
  deleteUserRequest,
} from "../actions/users";
import UsersList from "../components/UsersList";
import NewUsersForm from "../components/NewUsersForm";

class App extends React.Component {
  /* constructor(props) {
    super(props);
  } */
  componentDidMount() {
    this.props.getUserRequest();
  }

  handleSubmit = ({ firstName, lastName }) => {
    this.props.createNewUserRequest({ firstName, lastName });
  };
  deleteUser = (userID) => {
    this.props.deleteUserRequest(userID);
  };

  render() {
    const { userLists, ShowLoader } = this.props;
    return (
      <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
        <NewUsersForm onSubmit={this.handleSubmit} />
        <UsersList
          users={userLists.items}
          ShowLoader={ShowLoader}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLists: state.users,
    ShowLoader: state.users.ShowLoader,
  };
};
export default connect(mapStateToProps, {
  getUserRequest,
  createNewUserRequest,
  deleteUserRequest,
})(App);
