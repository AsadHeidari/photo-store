import Link from "next/link";
import Header from "./components/header";

function MainPage() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
        <h1 className="mb-14 font-bold text-6xl">به گیمکده خوش آمدید</h1>
        <div className="flex gap-3">
          <Link
            href="login"
            className="bg-yellow-400 text-black rounded-lg py-2 px-4"
          >
            ورود
          </Link>
          <Link
            href="signup"
            className="bg-yellow-400 text-black rounded-lg py-2 px-4"
          >
            ثبت نام
          </Link>
        </div>
        <p className="mt-12 text-sm">
          برای استفاده ازین سایت ایتدا باید ثبت نام کنید
        </p>
      </main>
    </>
  );
}

export default MainPage;
