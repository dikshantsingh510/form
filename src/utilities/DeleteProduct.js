"use client";

import { useRouter } from "next/navigation";
import { baseUrl } from "./db";

export default function DeleteProduct(props) {
  const router = useRouter();

  const DeleteAccount = async () => {
    // console.log(props.email);

  

    let response = await fetch(`${baseUrl}/api/users/${props.email}`, {
      method: "delete",
    });
    // console.log(response);

    response = await response.json();

    if (response.success) alert(" your account deleted successfully!");
    router.push("/signup");
  };

  return (
    <>
      <button
        onClick={DeleteAccount}
        className="flex w-60 justify-center rounded-md bg-indigo-600 px-3 py-1.5 m-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Delete Account
      </button>
    </>
  );
}
