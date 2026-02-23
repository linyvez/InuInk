"use server";

import { db } from "@/db";
import { letterScores, usersTable, userStatTable } from "@/db/schema";
import { count, desc, eq, gt, sql } from "drizzle-orm";

export async function updateStats(
  userLogin: string,
  char: string,
  newStreak: number,
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

export async function getTotalPlace(userLogin: string) {
  try {
    const user = await db
      .select({ score: userStatTable.totalScore })
      .from(userStatTable)
      .innerJoin(usersTable, eq(userStatTable.userId, usersTable.id))
      .where(eq(usersTable.login, userLogin))
      .limit(1);

    if (user.length === 0) {
      return { success: false, result: "No information found" };
    }

    const userScore = user[0].score;

    const higherUsers = await db
      .select({ value: count() })
      .from(userStatTable)
      .where(gt(userStatTable.totalScore, userScore));

    const place = higherUsers[0].value + 1;

    return { success: true, result: place };
  } catch (e) {
    return { success: false, result: "Error", error: e };
  }
}

export async function getStreakPlace(userLogin: string) {
  try {
    const user = await db
      .select({ streak: userStatTable.maxStreak })
      .from(userStatTable)
      .innerJoin(usersTable, eq(userStatTable.userId, usersTable.id))
      .where(eq(usersTable.login, userLogin))
      .limit(1);

    if (user.length === 0) {
      return { success: false, result: "No information found" };
    }

    const userStreak = user[0].streak;

    const higherUsers = await db
      .select({ value: count() })
      .from(userStatTable)
      .where(gt(userStatTable.maxStreak, userStreak));

    const place = higherUsers[0].value + 1;

    return { success: true, result: place };
  } catch (e) {
    return { success: false, result: "Error", error: e };
  }
}

export async function getTotalScore(userLogin: string) {
  try {
    const user = await db
      .select({ score: userStatTable.totalScore })
      .from(userStatTable)
      .innerJoin(usersTable, eq(userStatTable.userId, usersTable.id))
      .where(eq(usersTable.login, userLogin))
      .limit(1);

    if (user.length === 0) {
      return { success: false, result: "No information found" };
    }
    return { success: true, result: user[0].score };
  } catch (e) {
    return { success: false, result: "Error", error: e };
  }
}

export async function getMaxStreak(userLogin: string) {
  try {
    const user = await db
      .select({ streak: userStatTable.maxStreak })
      .from(userStatTable)
      .innerJoin(usersTable, eq(userStatTable.userId, usersTable.id))
      .where(eq(usersTable.login, userLogin))
      .limit(1);

    if (user.length === 0) {
      return { success: false, result: "No information found" };
    }
    return { success: true, result: user[0].streak };
  } catch (e) {
    return { success: false, result: "Error", error: e };
  }
}
