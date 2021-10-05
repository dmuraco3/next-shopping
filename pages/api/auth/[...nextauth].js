import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

import {PrismaClient} from "@prisma/client"
import { signIn } from "next-auth/client";
import { FaLessThanEqual } from "react-icons/fa";

let userAccount = null;

const client = new PrismaClient()
export default NextAuth({
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "Email Address"},
                password: {label: "Password", type: "Password", placeholder : "Password"},
                fname: {label: "First Name", type: "text", placeholder: "First Name"},
                lname: {label: "Last Name", type: "text", placeholder: "Last Name"},
                date: {label: "Date of Birth", type: "date", placeholder: "Date of Birth"},
                country: {label: "Country", type: "text", placeholder: "Country"},
                gender: {label: "Gender", type: "text", placeholder: "Gender"}
                

            },
            async authorize(credentials, req) {
                const {
                    email,
                    password,
                    fname,
                    lname,
                    date,
                    country,
                    gender,
                    news,
                    type,
                } = credentials;
                
                if(type === "SignUp") {
                    const user = await client.user.create({
                        data: {
                            email: email,
                            password: password,
                            fname: fname,
                            lname: lname,
                            dob: new Date(date).toISOString(),
                            country: country,
                            gender: gender,
                            news: JSON.parse(news),
                            
                        },
                    })
                    if(user) {
                        return {email: user.email, fname: user.fname, lname: user.lname, role: user.role};
                    }
                } else if(type === "SignIn") {
                    const user = await client.user.findFirst({
                        where: {
                            email: email,
                            password: password,
                        },
                        select: {
                            email: true,
                            fname: true,
                            lname: true,
                            dob: true,
                            country: true,
                            gender: true,
                            role: true,
                            createdAt: false,
                            updatedAt: false,
                            news: true,
                            password: false,
                            id: false,
                        }
                    })
                    if(user) {
                        return user;
                    } else return null;
                }

            }
        })
    ],
    callbacks: {
        /**
         * @param  {object}  token     Decrypted JSON Web Token
         * @param  {object}  user      User object      (only available on sign in)
         * @param  {object}  account   Provider account (only available on sign in)
         * @param  {object}  profile   Provider profile (only available on sign in)
         * @param  {boolean} isNewUser True if new user (only available on sign in)
         * @return {object}            JSON Web Token that will be saved
         */
         async signIn(user, account, profile) {
            return user 
        },
        async jwt(token, user, account, profile, isNewUser) {
            if (user) {
                token.user = user;
            }
            return token
        },
        async session(session, user, token) {
            console.log(session, user, token)
            session.user = user.user;
            return session
        }
        
    }
})