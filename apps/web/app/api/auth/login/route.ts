import { NextResponse } from "next/server";
import { TOKEN_COOKIE_NAME, base_url } from "../../../../constants";
import { serialize } from "cookie";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;
  if (email && password) {
    try {
      const res = await fetch(base_url + "/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.status === 400) {
        throw { message: data.message };
      }
      const serialized = serialize(TOKEN_COOKIE_NAME, data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });

      return NextResponse.json(
        {
          message: "Login successful",
          data: data,
        },
        {
          status: 200,
          headers: {
            "Set-Cookie": serialized,
          },
        }
      );
    } catch (err) {
      return NextResponse.json(
        {
          message: err.message,
          data: null,
        },
        {
          status: 400,
        }
      );
    }
  }
}
