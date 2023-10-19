// user name diegotoro6789
// password Rutablanca17.

//mongodb://diegotoro6789:Rutablanca17.@ac-yt8y6sg-shard-00-00.6qc3zk7.mongodb.net:27017,ac-yt8y6sg-shard-00-01.6qc3zk7.mongodb.net:27017,ac-yt8y6sg-shard-00-02.6qc3zk7.mongodb.net:27017/?ssl=true&replicaSet=atlas-10gz9c-shard-0&authSource=admin&retryWrites=true&w=majority


import mongoose from "mongoose"

const connectToDataBase = async () => {
    await mongoose.connect(process.env.MONGODB_URI,{dbName:'test'})

    try{
        console.log("conectado exitosamente")
    }catch(err){
        console.log(" No conectado "+err)
    }
};

export default connectToDataBase;