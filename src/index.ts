import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
async function createUser(){
await client.user.create({
    data:{
        username: "john_doe",
        password: "securepassword",
        age: 30,
        email: "john@example.com"
    }
})
}
createUser();