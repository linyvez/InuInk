"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

export async function signUpUser(prevState: any, data: FormData) {
  const login = data.get("login") as string;
  const password = data.get("password") as string;

  try {
    await db.insert(usersTable).values({
      login: login,
      password: password,
    });
    return { success: true, message: "Success" };
  } catch (e) {
    return { success: false, message: "Failed to create user" };
  }
}
