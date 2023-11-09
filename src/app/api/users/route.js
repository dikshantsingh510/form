import mongoose from "mongoose";
import { connectionURL } from "@/utilities/db";
import { NextResponse } from "next/server";
import { User } from "@/utilities/model/user";

// export async function GET() {
//   let data = [];
//   let success = false;
//   try {
//     await mongoose.connect(connectionURL);
//     data = await User.find();
//     success = true;
//   } catch (error) {
//     data = error;
//   }

//   return NextResponse.json({ result: data, success });
// }

export async function POST(request) {
  let data = [];
  let success = false;
  try {
    let payload = await request.json();
    await mongoose.connect(connectionURL);
    let user = new User(payload);
    // console.log(payload);
    data = await user.save();
    success = true;
  } catch (error) {
    data = error;
  }
  // console.log(data);
  return NextResponse.json({ result: data, success });
}
