import React from "react";
import { List, Button } from "antd";

const UsersList = ({ users, ShowLoader }) => {
  let data = users;
  data.sort((a, b) => {
    if (a.firstName > b.firstName) {
      return 1;
    } else if (a.firstName < b.firstName) {
      return -1;
    } else if (a.lastName > b.lastName) {
      return 1;
    } else if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 0;
    }
  });
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      loading={ShowLoader}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <div>
            {item.firstName} {item.lastName}
          </div>
          {/* <List.Item.Meta title={item.firstName} description="" /> */}
          <div>
            <Button danger>Delete</Button>
          </div>
        </List.Item>
      )}
    />
  );
};

export default UsersList;
