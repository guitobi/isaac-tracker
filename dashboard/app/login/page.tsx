"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const isDesktop = searchParams.get("desktop") === "true";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data: Record<string, string>) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Login failed! Check your username and password.");
      }

      const result: { access_token: string; username: string } = await res.json();

      if (result.access_token) {
        localStorage.setItem("isaac_token", result.access_token);
        if (isDesktop) {
          const desktopClientUrl = process.env.NEXT_PUBLIC_DESKTOP_CLIENT_URL || "http://localhost:12345";
          window.location.assign(`${desktopClientUrl}/?token=${result.access_token}&username=${result.username}`);
        } else {
          router.push("/");
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unknown error occurred.");
      }
    }
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="font-hand text-3xl font-bold">Username:</label>
            <input
              type="text"
              placeholder="e.g. Isaac"
              {...register("username", { required: "Username is required" })}
              className={`w-full p-3 font-pixel text-2xl border-4 ${errors.username ? "border-red-600" : "border-black"} bg-[rgba(0,0,0,0.05)] focus:bg-[rgba(255,255,255,0.5)] outline-none focus:ring-0 transition-colors shadow-[inset_3px_3px_0_rgba(0,0,0,0.1)] placeholder:text-gray-500`}
            />
            {errors.username && (
              <span className="font-pixel text-red-600 text-lg">
                {errors.username.message as string}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-hand text-3xl font-bold">Password:</label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
              className={`w-full p-3 font-pixel text-2xl border-4 ${errors.password ? "border-red-600" : "border-black"} bg-[rgba(0,0,0,0.05)] focus:bg-[rgba(255,255,255,0.5)] outline-none focus:ring-0 transition-colors shadow-[inset_3px_3px_0_rgba(0,0,0,0.1)] placeholder:text-gray-500`}
            />
            {errors.password && (
              <span className="font-pixel text-red-600 text-lg">
                {errors.password.message as string}
              </span>
            )}
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
