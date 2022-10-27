import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
  },

  password: {
    type: String,
    select: false,
    required: [true, "Please enter your password"],
  },

  timeline: [
    {
      title: String,
      description: String,
      date: Date,
    },
  ],

  skills: {
    image1: {
      publicId: String,
      url: String,
    },
    image2: {
      publicId: String,
      url: String,
    },
    image3: {
      publicId: String,
      url: String,
    },
    image4: {
      publicId: String,
      url: String,
    },
    image5: {
      publicId: String,
      url: String,
    },
    image6: {
      publicId: String,
      url: String,
    },
  },

  projects: [
    {
      title: String,
      url: String,
      image: {
        publicId: String,
        url: String,
      },
      description: String,
      techStach: {
        type: Array,
        default: [],
      },
    },
  ],

  about: {
    name: String,
    title: String,
    subtitle: String,
    description: String,
    quote: String,
    avatar: {
      publicId: String,
      url: String,
    },
  },
});

export const User = mongoose.model("User", userSchema);
