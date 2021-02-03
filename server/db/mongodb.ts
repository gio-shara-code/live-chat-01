import * as mongodb from 'mongodb'
import * as dbConfig from './dbconfig.json'

export const connectDB = async (): Promise<mongodb.MongoClient> => {
    const url = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@demo-cluster.ycsr4.mongodb.net/${dbConfig.dbname}?retryWrites=true&w=majority`
    const mongodbClient = new mongodb.MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        validateOptions: false,
    });

    try{
        return await mongodbClient.connect()
    }catch(err){
        console.log(err)
        return null;
    }
}