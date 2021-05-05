import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    yearOfBirth: Number,
    address: String
});
//Definišemo sva polja kojima je definisan student

export default mongoose.model('Student', StudentSchema);
