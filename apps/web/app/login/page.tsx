"use client";

import {
  Button,
  Card,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import jwt_decode from "jwt-decode";
interface ILoginForm {
  email: string;
  password: string;
}

export default function Page() {
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });
  const handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    setLoginForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3003/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginForm.email,
        password: loginForm.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const userdata: any = jwt_decode(data.token);
        console.log(userdata);

        localStorage.setItem("token", data.token);
        localStorage.setItem("name", JSON.stringify(userdata));
      });
  };
  return (
    <Flex
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      direction="column"
      gap="1rem"
    >
      <Card
        bgColor="inherit"
        width="360px"
        padding="1rem"
        borderRadius="1rem"
        border="1px"
        gap="1rem"
      >
        <Heading>Login</Heading>

        <form onSubmit={onSubmit}>
          <Flex direction="column" gap="1rem">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                onChange={handleChange}
                value={loginForm.email}
                placeholder="Please enter username here..."
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                value={loginForm.password}
                placeholder="Please enter username here..."
              />
            </FormControl>
            <Button type="submit">Login</Button>
          </Flex>
        </form>
      </Card>
    </Flex>
  );
}
