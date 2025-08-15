import { PrismaClient } from "@prisma/client";
import express from "express"
import bcrypt from "bcrypt";
const app = express();
const client = new PrismaClient();
app.post("/user", async (req, res) => {
    const { username, password,age } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);
    await client.user.create({
        data: {
            username: username,
            password: hashedpassword,
            age:age
        }
    });
    res.status(201).json({ message: "User created" });
});




app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json(users);
});
app.get("/users/:id",async(req,res)=>{
    const id=req.params.id ;
    const user=await client.user.findFirst({
        where:{
            id:parseInt(id)
        },select:{
            todos:true
        }
    });
    res.json({user});
})

app.listen(3000);



