import {
  integer,
  sqliteTable,
  text,
  primaryKey,
} from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: integer("id").primaryKey(),
  login: text("login").unique().notNull(),
  password: text("password").notNull(),
});

export const userStatTable = sqliteTable("statisticsTable", {
  userId: integer("userId")
    .references(() => usersTable.id)
    .primaryKey(),
  totalScore: integer("totalScore").notNull().default(0),
  maxStreak: integer("maxStreak").notNull().default(0),
});

export const letterScores = sqliteTable(
  "letterScores",
  {
    userId: integer("userId").references(() => userStatTable.userId),
    letter: text("letter").notNull(),
    correctPerLetter: integer("correctPerLetter").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.userId, t.letter] })]
);

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
