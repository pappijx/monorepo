import { NextResponse } from "next/server";
import { base_url } from "../../../../constants";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;
  if (email && password) {
    try {
      console.log("try", email, password);

      const res = await fetch(base_url + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      return NextResponse.json(
        {
          message: "User Registered successfully",
          data: data,
        },
        {
          status: 200,
        }
      );
    } catch (err) {
      return NextResponse.json(
        {
          message: "Failed to register, please try after sometime",
          data: err,
        },
        {
          status: 400,
        }
      );
    }
  }
}
