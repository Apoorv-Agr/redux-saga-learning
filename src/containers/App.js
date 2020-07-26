import React from "react";
import { connect } from "react-redux";
import { getUserRequest } from "../actions/users";
import UsersList from "../components/UsersList";
import NewUsersForm from "../components/NewUsersForm";

class App extends React.Component {
  // props.getUserRequest();
  // console.log('props : ', props)
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUserRequest();
  }

  handleSubmit = ({ firstName, lastName }) => {
    console.log(firstName, lastName);
  };

  render() {
    console.log("props : ", this.props);
    const { userLists, ShowLoader } = this.props;
    return (
      <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
        <NewUsersForm onSubmit={this.handleSubmit}/>
        <UsersList users={userLists.items} ShowLoader={ShowLoader} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLists: state.users,
  };
};
export default connect(mapStateToProps, {
  getUserRequest,
})(App);
