"use server";

import { currentUser } from "@clerk/nextjs";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error("You are not authenticated!");
  if (!apiKey) throw new Error("API Key Missing!");
  if (!apiSecret) throw new Error("API Secret Missing!");

  const client = new StreamClient(apiKey, apiSecret);

  // exp is optional (by default the token is valid for an hour)
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

  const issued = Math.floor(new Date().getTime() / 1000) - 60;

  const token = await client.createToken(user.id, exp, issued);
  return token;
};
