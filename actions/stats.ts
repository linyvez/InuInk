"use server";

import { db } from "@/db";
import { letterScores, usersTable, userStatTable } from "@/db/schema";
import { desc, eq, sql } from "drizzle-orm";

export async function updateStats(
  userLogin: string,
  char: string,
  newStreak: number
) {
  try {
    const users = await db
      .select({ id: usersTable.id })
      .from(usersTable)
      .where(eq(usersTable.login, userLogin))
      .limit(1);

    const userId = users[0].id;

    await db
      .update(userStatTable)
      .set({
        totalScore: sql`${userStatTable.totalScore} + 1`,
        maxStreak: sql`MAX(${userStatTable.maxStreak}, ${newStreak})`,
      })
      .where(eq(userStatTable.userId, userId));

    await db
      .insert(letterScores)
      .values({
        userId: userId,
        letter: char,
        correctPerLetter: 1,
      })
      .onConflictDoUpdate({
        target: [letterScores.userId, letterScores.letter],
        set: {
          correctPerLetter: sql`${letterScores.correctPerLetter} + 1`,
        },
      });

    return { success: true };
  } catch (e) {
    return { success: false, error: e };
  }
}

export async function getTotalLeaderboard() {
  try {
    const leaderboard = await db
      .select({ login: usersTable.login, totalScore: userStatTable.totalScore })
      .from(userStatTable)
      .innerJoin(usersTable, eq(userStatTable.userId, usersTable.id))
      .orderBy(desc(userStatTable.totalScore))
      .limit(5);

    return { success: true, result: leaderboard };
  } catch (e) {
    return { success: false, error: e };
  }
}

export async function getStreakLeaderboard() {
  try {
    const leaderboard = await db
      .select({ login: usersTable.login, maxStreak: userStatTable.maxStreak })
      .from(userStatTable)
      .innerJoin(usersTable, eq(userStatTable.userId, usersTable.id))
      .orderBy(desc(userStatTable.maxStreak))
      .limit(5);

    return { success: true, result: leaderboard };
  } catch (e) {
    return { success: false, error: e };
  }
}
