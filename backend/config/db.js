import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mariya:Mariya1729maria@cluster0.lxvr7.mongodb.net/MOV ').then(()=>console.log("DB connected"));

}