import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
{
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLegth: 6,
    }
});

export const User = mongoose.model('Users', userSchema);

