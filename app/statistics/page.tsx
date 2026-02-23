"use client";

import {
  getMaxStreak,
  getStreakPlace,
  getTotalPlace,
  getTotalScore,
} from "@/actions/stats";
import { useAuth } from "@/providers/AuthProvider";
import Image from "next/image";
import { useEffect, useState } from "react";

const Statistics = () => {
  const userContext = useAuth();
  const userLogin = userContext.user?.login;

  const [stats, setStats] = useState<{
    score: number | string;
    streak: number | string;
    scorePlace: number | string;
    streakPlace: number | string;
  }>({
    score: "Loading...",
    streak: "Loading...",
    scorePlace: "Loading...",
    streakPlace: "Loading...",
  });

  useEffect(() => {
    const fetchStats = async () => {
      if (!userLogin) return;

      try {
        const [scoreResp, streakResp, scorePlaceResp, streakPlaceResp] =
          await Promise.all([
            getTotalScore(userLogin),
            getMaxStreak(userLogin),
            getTotalPlace(userLogin),
            getStreakPlace(userLogin),
          ]);

        setStats({
          score: scoreResp.success ? scoreResp.result : "Error",
          streak: streakResp.success ? streakResp.result : "Error",
          scorePlace: scorePlaceResp.success ? scorePlaceResp.result : "Error",
          streakPlace: streakPlaceResp.success
            ? streakPlaceResp.result
            : "Error",
        });
      } catch (e) {
        setStats({
          score: "Error on server",
          streak: "Error on server",
          scorePlace: "Error on server",
          streakPlace: "Error on server",
        });
      }
    };

    fetchStats();
  }, [userLogin]);

  return (
    <section className="relative flex xl:landscape:flex-col pt-[30%] pb-[5%] md:py-0 h-full ">
      <div className="relative w-full h-[50%] md:h-[60%] lg:landscape:h-full xl:landscape:h-full flex flex-col justify-center md:justify-between xl:landscape:justify-center items-center py-5 md:py-10 xl:landscape:py-5">
        <Image
          src={"/images/practice_background.png"}
          alt="Scroll background"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-0 w-auto h-full object-fill xl:landscape:object-contain object-center -z-10"
        />
        <div className="relative flex flex-col justify-start text-center h-full md:h-[80%] xl:landscape:h-[90%] px-8 xl:landscape:px-[10%]">
          <div>
            <h1 className="text-[3rem]">Statistics</h1>

            {userContext?.user && (
              <span className="text-center">
                Username: <strong>{userContext.user.login}</strong>
              </span>
            )}
          </div>

          <ul className="absolute text-left text-2xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-full">
            <li className="flex justify-between gap-4">
              <span>Total score</span>
              <strong>{stats.score}</strong>
            </li>
            <li className="flex justify-between gap-4">
              <span>Max streak</span>
              <strong>{stats.streak}</strong>
            </li>
            <li className="flex justify-between gap-4">
              <span>Leaderboard place (Total score)</span>
              <strong>#{stats.scorePlace}</strong>
            </li>
            <li className="flex justify-between gap-4">
              <span>Leaderboard place (Max streak)</span>
              <strong>#{stats.streakPlace}</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
