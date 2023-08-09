import { cookies } from "next/headers";
import { TOKEN_COOKIE_NAME, base_url } from "../../../../constants";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get(TOKEN_COOKIE_NAME);
  console.log("header", token.value);

  if (token?.value) {
    try {
      const res = await fetch(base_url + "/verify-token", {
        method: "GET",
        headers: {
          token: token?.value,
        },
      });
      const data = await res.json();
      if (res.status === 200) {
        return NextResponse.json(
          {
            message: data.message,
          },
          {
            status: 200,
          }
        );
      } else {
        throw { message: data.message };
      }
    } catch (err) {
      return NextResponse.json(
        {
          message: err.message,
        },
        {
          status: 400,
        }
      );
    }
  }
}
