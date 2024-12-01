import mongoose from "mongoose";


const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.pguwp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log('database connected sucessfully');
    }catch (error) {
        console.log('Erro while connecting with the server', error);
    }
}

export default Connection;