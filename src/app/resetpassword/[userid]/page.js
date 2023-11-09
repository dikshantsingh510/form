"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page(props) {
  const id = atob(decodeURIComponent(props.params.userid))
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // console.log(id);
  useEffect(() => {
    const userData = async () => {
      let data = await fetch(`http://localhost:3000/api/users/${id}`);

      data = await data.json();
      // console.log(data.result);
      if (data.success) {
        setName(data.result.name);
        setEmail(data.result.email);
      }
    };

    userData();
  }, [id]);

  // console.log(userData);

  const updatePassword = async (e) => {
    e.preventDefault();
    if (newPassword == confirmNewPassword) {
      let password = newPassword;
      let data = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({ password }),
      });

      data = await data.json();
      if (data.success) alert("password changed successfully!");
      router.push("/login");
      // console.log(data);
    } else {
      alert("new password does not match with confirm password");
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            unoptimized
            width={170}
            height={150}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
            Create new password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={updatePassword}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  value={name}
                  readOnly
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-100 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={email}
                  readOnly
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-100 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  New Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-100 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmNewPassword"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmNewPassword"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-100 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
