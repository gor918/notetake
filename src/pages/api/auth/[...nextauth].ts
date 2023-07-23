import NextAuth from "next-auth";
import { authOptions } from "@shared/server/auth";

export default NextAuth(authOptions);
