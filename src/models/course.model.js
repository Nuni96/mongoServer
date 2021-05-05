import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    name: String,
    points: Number,
});
//Definišemo sva polja kojima je definisan kurs

export default mongoose.model('Course', CourseSchema);
