"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { checkUsers, setUser } from "../utils/localStorage";

function LogIn() {
  /* -------------------------------------------------------------------------- */
  /*                                    hooks                                   */
  /* -------------------------------------------------------------------------- */
  const router = useRouter();
  /* -------------------------------------------------------------------------- */
  /*                                   states                                   */
  /* -------------------------------------------------------------------------- */
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  /* -------------------------------------------------------------------------- */
  /*                                  functions                                 */
  /* -------------------------------------------------------------------------- */
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const user = checkUsers({ userName, email });
    console.log(user);

    if (user) {
      alert(`${user.name} عزیز خوش آمدی`);
      setUser(user);

      switch (user.role) {
        case "admin":
          router.push("/adminDashboard");
          break;
        case "designer":
          router.push("/designerDashboard");
          break;
        case "player":
          router.push("/player");
          break;
      }
    } else {
      alert("کاربری با این مشخصات یافت نشد. لطفا ابتدا ثبت نام کنید.");
      router.push("/signup");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 w-96 rounded-lg p-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-full w-full gap-4"
        >
          <label className="flex flex-col gap-3">
            نام کاربری:
            <input
              required
              type="text"
              name="userName"
              className="text-black p-1 rounded-lg ltr"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>

          <label className="flex flex-col gap-3">
            ایمیل:
            <input
              required
              type="email"
              name="email"
              className="text-black p-1 rounded-lg ltr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <hr />
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 text-black rounded-lg py-2 px-4"
            >
              ورود
            </button>
          </div>
        </form>
        <Link href="/">
          <button className="bg-red-400 rounded-lg py-2 px-4 absolute top-4 left-4">
            بازگشت
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LogIn;
