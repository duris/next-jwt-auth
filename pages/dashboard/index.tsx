import { useState } from "react";

export default function Dashbaord() {
  const [response, setResponse] = useState();

  const getUser = async () => {
    const user = await fetch("http://localhost:3001/api/user").then((data) => {
      console.log(data);
      console.log("hello!");
    });
  };

  getUser();

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
