import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credential";

import {getCsrfToken} from "next-auth/react"
import {PrismaClient} from "@prisma/client"

const client = new PrismaClient()
export default NextAuth({
    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "Ex. jdoe"},
                password: {label: "Password", type: "Password"},
            },
            async authorize(credentials, req) {
                const {username, password} = credentials;
                const user = await client.user.findUnique({
                    where: {
                        username: username,
                    }
                })
                if(user) {
                    const valid = await client.user.findUnique({
                        where: {
                            username: username,
                            password: password,
                        }
                    })
                    if(valid) {
                        return valid
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
        }),
        CredentialProvider({
            name: "CredentialsSignUp",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "Ex. jdoe"},
                password1: {label: "Password", type: "Password"},
                password2: {label: "Confirm Password", type: "Password"},

            },
            async authorize(credentials, req) {
                const {username, password1, password2} = credentials;
                if(password1 !== password2) {
                    return null;
                }
                
                const user = await client.user.create({
                    where: {
                        username: username,
                        password: password1
                    }
                })
                if(user) {
                    return user;
                } else {
                    return null
                }
            }
        })
    ]
})