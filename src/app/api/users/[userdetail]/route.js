import { connectionURL } from "@/utilities/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { User } from "@/utilities/model/user";

// export async function GET(request, content) {
//   let data = [];
//   let success = false;
//   try {
//     const email = content.params.userdetail;
//     // console.log(content.params);
//     const record = { email };
//     await mongoose.connect(connectionURL);
//     data = await User.findOne(record);
//     success = true;
//   } catch (error) {
//     data = { message: " No data found" };
//   }

//   //   console.log(data);
//   return NextResponse.json({ result: data, success });
// }

export async function GET(request, content) {
  let data = [];
  let success = true;
  const email = content.params.userdetail;
  // console.log(content.params);
  const record = { email };
  await mongoose.connect(connectionURL);
  data = await User.findOne(record);
  if (data == null) success = false;

  //   console.log(data);
  return NextResponse.json({ result: data, success });
}

export async function PUT(request, content) {
  let data = [];
  let success = false;
  try {
    const email = content.params.userdetail;
    const filter = { email };
    const payload = await request.json();
    await mongoose.connect(connectionURL);
    data = await User.findOneAndUpdate(filter, payload);
    success = true;
  } catch (error) {
    data = error;
  }

  return NextResponse.json({ result: data, success });
}

export async function DELETE(request, content) {
  const email = content.params.userdetail;
  // console.log(email);
  const record = { email };
  await mongoose.connect(connectionURL);
  const result = await User.deleteOne(record);
  return NextResponse.json({ result, success: true });
}
