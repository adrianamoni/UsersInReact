import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class UsersTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      content: user => <Link to={`/users/${user.id}`}>{user.name}</Link>
    },
    { path: "company.name", label: "Company" },
    { path: "username", label: "Username" },
    { path: "email", label: "Email" }
  ];

  render() {
    const { users, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;
