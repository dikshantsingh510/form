import DeleteProduct from "@/utilities/DeleteProduct";
import Link from "next/link";

const userDetails = async (email) => {
  let data = await fetch(`http://localhost:3000/api/users/${email}`, {
    cache: "no-cache",
  });
  data = await data.json();

  return data;
};



export default async function Page(props) {
  // const router = useRouter()
  // * Decoding url parameter (email)
  let urlParams = atob(decodeURIComponent(props.params.userid))
  // console.log(urlParams);
  let data = await userDetails(urlParams);
  
  // console.log(data);
  return (
    <>
      <div className="flex min-h-screen w-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-gray-900">
        {data.success && data.result ? (
          <>
            <h1 className="text-3xl">Hii {data.result.name}</h1>
            <h1 className="text-3xl">You logged in successfully</h1>
            <DeleteProduct email={data.result.email} />
            <Link
              href={"/resetpassword"}
              className="flex w-60 justify-center rounded-md bg-indigo-600 px-3 py-1.5 m-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset password
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-3xl">404 Error : No data found </h1>
          </>
        )}
      </div>
    </>
  );
}
