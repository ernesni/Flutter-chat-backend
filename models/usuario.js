const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    online: {
        type: Boolean,
        default: false
    },

});

UsuarioSchema.method('toJSON', function() {
    //extraemos __v, _id y password, el resto va al object
    const { __v, _id, password, ...object } = this.toObject();
    //renombramos el _id como uid y lo agregamos
    object.uid = _id;
    return object;
})

module.exports = model('Usuario', UsuarioSchema);