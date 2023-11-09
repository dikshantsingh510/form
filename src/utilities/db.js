// console.log(process.env.USER_NAME);

export const connectionURL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.rfy4oia.mongodb.net/userDB?retryWrites=true&w=majority`;
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://form-by-dikshant.vercel.app"
    : "http://localhost:3000";
