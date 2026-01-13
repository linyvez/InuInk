"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export async function signUpUser(prevState: AuthState, data: FormData) {
  const login = data.get("login") as string;
  const password = data.get("password") as string;

  try {
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.login, login));

    if (existingUser.length > 0) {
      return {
        success: false,
        message: "Username already taken",
        login: null,
      };
    }

    await db.insert(usersTable).values({
      login: login,
      password: password,
    });
    return { success: true, message: "Successfully registered", login: login };
  } catch (e) {
    return { success: false, message: "Failed to create user", login: null };
  }
}

export async function logInUser(prevState: AuthState, data: FormData) {
  const login = data.get("login") as string;
  const password = data.get("password") as string;

  try {
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.login, login));

    if (existingUser.length > 0) {
      if (existingUser[0].password === password) {
        const cookieStore = await cookies();

        cookieStore.set("session_id", `${existingUser[0].id}`, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          path: "/",
        });

        return {
          success: true,
          message: "Successfully logged in",
          login: login,
        };
      }
      return { success: false, message: "Wrong password", login: null };
    }
    return { success: false, message: "No user with such login", login: null };
  } catch (e) {
    return { success: false, message: "Failed to log in", login: null };
  }
}

export async function logOutUser() {
  const cookieStore = await cookies();
  cookieStore.delete("session_id");
}

export async function authGateway(prevState: any, data: FormData) {
  const intent = data.get("intent");

  if (intent === "signup") {
    return await signUpUser(prevState, data);
  }

  if (intent === "login") {
    return await logInUser(prevState, data);
  }

  return { success: false, message: "Unknown action", login: null };
}
