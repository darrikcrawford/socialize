const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String
  }
});

  // create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;
