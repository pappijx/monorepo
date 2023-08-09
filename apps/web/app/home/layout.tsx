"use client";
import { Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import React, { useEffect, useState } from "react";

interface UserResponse {
  user: string | null;
  error: NextResponse | null;
}

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isSuccess, setIsSucess] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (error) {
        router.push("/");
        return;
      }
      setIsSucess(true);
      // if no error
    })();
  }, []);

  if (!isSuccess) {
    return <Spinner />;
  }

  return <div>{children}</div>;
};

export default HomeLayout;

async function getUser(): Promise<UserResponse> {
  try {
    const res = await fetch("/api/auth/me", {
      method: "GET",
    });
    const data = await res.json();
    return {
      user: data,
      error: null,
    };
  } catch (err) {
    const error = err as NextResponse;
    return {
      user: null,
      error: error,
    };
  }
}
