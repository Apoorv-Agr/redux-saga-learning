import React from "react";
import { connect } from "react-redux";
import {
  getUserRequest,
  createNewUserRequest,
  deleteUserRequest,
  userError,
} from "../actions/users";
import UsersList from "../components/UsersList";
import NewUsersForm from "../components/NewUsersForm";
import { Alert } from "antd";

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
  onClose = (e) => {
    e.preventDefault();
    this.props.userError({ error: "" });
  };

  render() {
    const { userLists, ShowLoader } = this.props;
    return (
      <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
        {userLists.error !== "" && (
          <Alert
            message="Error Text"
            description={userLists.error}
            type="error"
            closable
            onClose={this.onClose}
          />
        )}

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
  userError,
})(App);
