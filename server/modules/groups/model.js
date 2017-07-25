import mongoose, { Schema } from 'mongoose';


const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Name must be 5 characters long']
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'Name must be 10 characters long']
  },
  category: {
    type: String
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup'
  }]
}, { timestamps: true });

// create a meetup and add it to Group

GroupSchema.statics.addMeetup = async function(id, args) {
  const Meetup = mongoose.model('Meetup');

  // const group = await this.findById(id);
  // we add the group ID to the meetup group element
  // finally this is the author of the meetups element
  const meetup = await new Meetup({ ...args, group: id });
  // we found the group with the id provided in the url
  // And we pushed the meetup ID in the meetups element
  const group = await this.findByIdAndUpdate(id, { $push: { meetups: meetup.id } });

  // group.meetups.push(meetup);

  // const result = await Promise.all([meetup.save(), group.save()]);

  // return result;
  return {
    meetup: await meetup.save(),
    group
  };
};

export default mongoose.model('Group', GroupSchema);
