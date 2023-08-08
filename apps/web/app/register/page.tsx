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
import { useState } from "react";

interface IRegistration {
  name: string;
  email: string;
  password: string;
  repassword: string;
}

export default function Page() {
  const [registration, setRegistration] = useState<IRegistration>({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    setRegistration((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3003/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: registration.name,
        email: registration.email,
        password: registration.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                onChange={handleChange}
                value={registration.name}
                placeholder="Your name here..."
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                onChange={handleChange}
                value={registration.email}
                placeholder="Your email here..."
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                value={registration.password}
                placeholder="Please enter password here..."
              />
            </FormControl>
            <FormControl
              isRequired
              isInvalid={registration.password !== registration.repassword}
            >
              <FormLabel>Password</FormLabel>
              <Input
                name="repassword"
                type="password"
                onChange={handleChange}
                value={registration.repassword}
                placeholder="Please enter password here..."
              />
            </FormControl>
            <Button type="submit">Login</Button>
          </Flex>
        </form>
      </Card>
    </Flex>
  );
}
