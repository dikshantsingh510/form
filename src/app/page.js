import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-bold  mb-10 text-6xl md:text-8xl lg:text-[10rem]">
        Welcome
      </h1>
      <Link
        className="flex w-52 justify-center rounded-md bg-indigo-600 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        href={"/login"}
      >
        Login
      </Link>
      <Link
        className="flex w-52 justify-center rounded-md bg-indigo-600 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        href={"/signup"}
      >
        signUp
      </Link>
    </main>
  );
}
