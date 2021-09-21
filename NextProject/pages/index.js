import React from "react";
import Container from "../components/Container";
import Head from "next/head";
import axios from "axios";
import Users from "../components/Users";

const Index = (props) => {
  return (
    <Container>
      <Head>
        <title>Next.js Project - Home </title>
      </Head>
      <h1>Demo</h1>
      <Users users={props.users} />
    </Container>
  );
};
//Nos sirve para obtener datos
//Es propio de Next.js
Index.getInitialProps = async (ctx) => {
  const response = await axios.get("https://reqres.in/api/users");
  //const users = response.data.slice(0, 5);
  //console.log(users);
  //console.log(response.data);
  //const resJSON = await response.json();
  return {
    users: response.data.data,
  };
};

export default Index;
