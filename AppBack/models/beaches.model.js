import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: false
    },
    estrellas: {
        type: String,
        require: true
    }
}, {
    _id: false
});



const beachSchema = mongoose.Schema(
    {
        playa: {
            type: String,
            require: true
        },
        pais: {
            type: String,
            require: true
        },
        ciudad: {
            type: String,
            require: true
        },
        hoteles: [
            hotelSchema
        ]

    }
);

export default mongoose.model("beaches", beachSchema);