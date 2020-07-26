import React from "react";
import { Form, Button, Input } from "antd";

const tailLayout = {
  wrapperCol: null,
};
const layout = {
  labelCol: null,
  wrapperCol: null,
};
class NewUsersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
  }
  onFinish = () => {
    // event.preventDefault();
    // console.log("values : ", values);
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    this.setState({ firstName: "", lastName: "" });
  };

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };
  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };
  render() {
    return (
      <Form
        {...layout}
        layout="vertical"
        name="basic"
        autoComplete="off"
        onFinish={this.onFinish}
      >
        <Form.Item label="FirstName">
          <Input
            placeholder="First Name"
            onChange={this.handleFirstNameChange}
            value={this.state.firstName}
          />
        </Form.Item>
        <Form.Item label="LastName">
          <Input
            placeholder="Last Name"
            onChange={this.handleLastNameChange}
            value={this.state.lastName}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            CREATE
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default NewUsersForm;
