import React from "react";
import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Ketan Ketantanaaaaa",
      image:
        "https://miro.medium.com/fit/c/700/210/1*aK_PcqA4wVfsNAVjPmQbrA.jpeg",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
}
