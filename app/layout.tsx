import type { Metadata } from "next";
import { Protest_Revolution } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { cookies } from "next/headers";
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { AuthProvider } from "@/providers/AuthProvider";

const protestRev = Protest_Revolution({
  variable: "--font-protest-revolution",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "InuInk",
  description: "Practice hiragana online",
};

async function getUserFromCookie() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session_id")?.value;

  if (!sessionId) return null;

  const users = await db
    .select({ login: usersTable.login })
    .from(usersTable)
    .where(eq(usersTable.id, parseInt(sessionId)));

  return users[0] || null;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserFromCookie();

  return (
    <html lang="en">
      <body
        className={`${protestRev.variable} antialiased flex flex-col h-dvh w-screen pt-5`}
      >
        <AuthProvider initialUser={user}>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
