import React from "react";
import { data } from "../src/MOCK_DATA";
const Users = () => {
  return (
    <div className="px-5">
      <h1 className="text-center">Bootstrap Table</h1>
      <div
        className=""
        style={{
          border: "1px solid black",
          borderRadius: 14,
          overflow: "auto",
          background: "yellow",
          whiteSpace: "nowrap",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <table
          className=" table table-sm table-bordered table-hover table-striped  table-responsive-sm mb-0 "
          // style={{ width: "fit-content", margin: "auto" }}
        >
          <thead className="">
            <tr className="table-primary text-center">
              <th style={{ paddingLeft: 14, paddingRight: 14 }}>Id</th>
              <th style={{ paddingLeft: 14, paddingRight: 14 }}>First Name</th>
              <th style={{ paddingLeft: 14, paddingRight: 14 }}>Last Name</th>
              <th style={{ paddingLeft: 14, paddingRight: 14 }}>Email</th>
              <th style={{ paddingLeft: 14, paddingRight: 14 }}>Gender</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{data.id}</td>
                  <td>{data.first_name}</td>
                  <td className="tc">{data.last_name}</td>
                  <td> {data.email}</td>
                  <td className="text-center">{data.gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
