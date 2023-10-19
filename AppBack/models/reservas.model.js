import mongoose from "mongoose";

const reservaSchema = mongoose.Schema(
    {
        nombrecompleto: {
            type: String,
            require: true
        },
        email: {
            type:String,
            require: true
        },
        creadoPor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            require: true
        },
        telnumero: {
            type: Number,
            require: true
        },
        ciudad: {
            type: String,
            require: true,
        },
        cpostal: {
            type: Number,
            require: true,
        },
        pais: {
            type: String,
            require: true,
        },
        detallesviaje: {
            type: String,
            require: true,
        },
        destino: {
            type: String,
            require: true,
        },
        fechai: {
            type: Date,
            require: true,
        },
        fechaf: {
            type: Date,
            require: true,
        },
        numeroadultos: {
            type: Number,
            require: true,
        },
        numeronino: {
            type: Number,
            require: true,
        },
        tipohabit: {
            type: String,
            require: true,
        }
    }
);

export default mongoose.model("reservas", reservaSchema);