import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sendMail } from "../middlewares/sendMail.js";
import cloudinary from "cloudinary";

dotenv.config({ path: "./config/config.env" });

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password!",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 259200000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Welcome back",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Good bye! Come back soon.",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne();

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const user = await User.findOne().select("-password -email");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { email, name, message } = req.body;

    const userMessage = `Hi, i am ${name}. My email is ${email} and my message is: ${message}`;

    await sendMail(userMessage);

    return res.status(200).json({
      success: true,
      message: "Message sent succesfully!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: "david.cicconi94@gmail.com" });
    console.log("Este es el contenido del usuario:", user);

    const { name, email, password, skills, about } = req.body;

    if (user) user.name = name;

    if (email) user.email = email;

    if (password) user.password = password;

    if (skills) {
      if (skills.image1) {
        await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
          folder: "portfolio",
        });
        user.skills.image1 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image2) {
        await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
          folder: "portfolio",
        });
        user.skills.image2 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image3) {
        await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
          folder: "portfolio",
        });
        user.skills.image3 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image4) {
        await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
          folder: "portfolio",
        });
        user.skills.image4 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image5) {
        await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
          folder: "portfolio",
        });
        user.skills.image5 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image6) {
        await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
          folder: "portfolio",
        });
        user.skills.image6 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }

    if (about) {
      user.about.name = about.name;
      user.about.title = about.title;
      user.about.subtitle = about.subtitle;
      user.about.description = about.description;
      user.about.quote = about.quote;

      if (about.avatar) {
        await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);

        const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
          folder: "portfolio",
        });

        user.about.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User updated!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addProject = async (req, res) => {
  try {
    const { url, title, image, description, techStack } = req.body;

    const user = await User.findById(req.user._id);

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "portfolio",
    });

    user.projects.unshift({
      url,
      title,
      description,
      techStack,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "New project added successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    const project = user.projects.filter((project) => project._id === id);

    await cloudinary.v2.uploader.destroy(project.image.public_id);

    user.projects = user.projects.filter((project) => project._id === id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Project deleted succesfully!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
