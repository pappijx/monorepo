import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;
  if (email && password) {
    console.log(email, password);

    try {
      console.log("try", email, password);

      const res = await fetch("http://localhost:3003/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log("uhfsuhf");

      const data = await res.json();
      console.log(data);

      return NextResponse.json(
        {
          message: "Login successful",
          data: data,
        },
        {
          status: 200,
        }
      );
    } catch (err) {
      console.log("catch");
      return NextResponse.json(
        {
          message: "Failed to login",
          data: err,
        },
        {
          status: 400,
        }
      );
    }
  }
}
