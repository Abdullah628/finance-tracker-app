import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";



const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://abdullah628360:LBpcY4t0cjdM5FqI@cluster0.mtqqflv.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(mongoURI).then(()=> console.log("Connected sucessfully!!"))
.catch((err)=>{
    if(err) throw err;
})

app.use("/financial-records", financialRecordRouter);

app.listen(port, ()=>{
    console.log(`Server Running at ${port}`);
})