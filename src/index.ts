import { PrismaClient } from "@prisma/client";
import express from "express"
const app = express();
const client = new PrismaClient();
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



