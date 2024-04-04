import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
}, { timestamps: true });

courseSchema.plugin(mongoosePaginate);

const Course = mongoose.model('Course', courseSchema);

export default Course;
