'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookmarkSchema = new Schema({
  bookmark: {
    type: String,
    required: 'Kindly enter the url'
  },
  keywords:{
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);
