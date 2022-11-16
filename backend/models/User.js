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
    // select: false, propiedad que me inhabilita ver la contraseña en el estado global
    required: [true, "Please enter your password"],
  },

  skills: {
    image1: {
      public_id: String,
      url: String,
    },
    image2: {
      public_id: String,
      url: String,
    },
    image3: {
      public_id: String,
      url: String,
    },
    image4: {
      public_id: String,
      url: String,
    },
    image5: {
      public_id: String,
      url: String,
    },
    image6: {
      public_id: String,
      url: String,
    },
  },

  projects: [
    {
      title: String,
      url: String,
      image: {
        public_id: String,
        url: String,
      },
      description: String,
      techStach: String,
    },
  ],

  about: {
    name: String,
    title: String,
    subtitle: String,
    description: String,
    quote: String,
    avatar: {
      public_id: String,
      url: String,
    },
  },
});

export const User = mongoose.model("User", userSchema);
