"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { checkUsers, setNewUser } from "../utils/localStorage";

function SignUp() {
  /* -------------------------------------------------------------------------- */
  /*                                    hooks                                   */
  /* -------------------------------------------------------------------------- */
  const router = useRouter();
  /* -------------------------------------------------------------------------- */
  /*                                   states                                   */
  /* -------------------------------------------------------------------------- */
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  /* -------------------------------------------------------------------------- */
  /*                                  functions                                 */
  /* -------------------------------------------------------------------------- */
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(checkUsers({ userName, email }));

    if (checkUsers({ userName, email })) {
      alert("کاربر با این اطلاعات از قبل وجود دارد");
    } else {
      setNewUser({ name, family, userName, email, phone, role });
      alert("ثبت نام انجام شد.");
      router.push("/login");
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
            نام:
            <input
              required
              type="text"
              name="name"
              className="text-black p-1 rounded-lg"
              value={name}
              onChange={(e) => {
                console.log(e.target.value);
                setName(e.target.value);
              }}
            />
          </label>

          <label className="flex flex-col gap-3">
            نام خانوادگی:
            <input
              required
              type="text"
              name="family"
              className="text-black p-1 rounded-lg"
              value={family}
              onChange={(e) => setFamily(e.target.value)}
            />
          </label>

          <label className="flex flex-col gap-3">
            نام کاربری:
            <input
              required
              type="text"
              name="userName"
              className="text-black p-1 rounded-lg ltr"
              title="نام کاربری باید انگلیسی باشد*"
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

          <label className="flex flex-col gap-3">
            شماره همراه:
            <input
              type="number"
              name="phone"
              className="text-black p-1 rounded-lg ltr"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <hr />
          <div className="flex flex-col">
            <h2>نقش خود را انتخاب کنید:</h2>
            <label>
              <input
                required
                type="radio"
                name="role"
                value="admin"
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              ادمین
            </label>
            <label>
              <input
                required
                type="radio"
                name="role"
                value="designer"
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              طراح بازی
            </label>
            <label>
              <input
                required
                type="radio"
                name="role"
                value="player"
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              بازی کننده
            </label>
          </div>
          <hr />
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 text-black rounded-lg py-2 px-4"
            >
              ثبت نام
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

export default SignUp;
