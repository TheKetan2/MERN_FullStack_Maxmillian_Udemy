import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

export default function UsersList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found...</h2>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="users-list">
          {props.items.map(user => (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placesCount={user.places}
            />
          ))}
        </ul>
      </div>
    );
  }
}
