import mongoose, { Schema } from 'mongoose';


const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Name must be 5 characters long']
  }
  description: {
    type: String,
    required: true,
    minLength: [10, 'Name must be 10 characters long']
  },
  category: {
    type: String
  }
  meetups: [{
    type: Schema.types.ObjectId,
    ref: 'Meetup'
  }]
}, { timestamps: true });

export default mongoose.model('Group', GroupSchema);
