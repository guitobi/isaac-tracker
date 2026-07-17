"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
    // TODO: зробити POST запит на бекенд і зберегти JWT/сесію
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-8 left-8 px-4 py-2 bg-black hover:bg-[#2a221d] text-white border-4 border-white font-pixel text-xl shadow-[4px_4px_0_rgba(0,0,0,1)] transition-colors"
      >
        {"< BACK"}
      </Link>

      <div className="isaac-card p-10 w-full max-w-md flex flex-col items-center">
        <h1
          className="font-hand text-6xl font-bold mb-8 text-center"
          style={{ textShadow: "3px 3px 0 #fff, -1px -1px 0 #fff" }}
        >
          ENTER THE BASEMENT
        </h1>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-hand text-3xl font-bold">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. Isaac"
              className="w-full p-3 font-pixel text-2xl border-4 border-black bg-[rgba(0,0,0,0.05)] focus:bg-[rgba(255,255,255,0.5)] outline-none focus:ring-0 transition-colors shadow-[inset_3px_3px_0_rgba(0,0,0,0.1)] placeholder:text-gray-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-hand text-3xl font-bold">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 font-pixel text-2xl border-4 border-black bg-[rgba(0,0,0,0.05)] focus:bg-[rgba(255,255,255,0.5)] outline-none focus:ring-0 transition-colors shadow-[inset_3px_3px_0_rgba(0,0,0,0.1)] placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-3 bg-[#8b0000] hover:bg-[#600000] text-white border-4 border-black font-hand text-4xl font-bold shadow-[4px_4px_0_#000] active:translate-y-1 active:shadow-[0px_0px_0_#000] transition-all"
          >
            DESCEND
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="font-pixel text-xl text-gray-700">
            New soul?{" "}
            <Link
              href="/register"
              className="font-bold text-black hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
