import React, { useEffect } from "react";
import "./About.css";
import { Typography } from "@mui/material";
import me from "../../images/yo.jpg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUser } from "../../slices/userSlice";

const About = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.about); // Object { success , user: {}}

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  console.log(user);

  return (
    <div className="about">
      <div className="firstContainer">
        <Typography>Write just here motherfucker</Typography>
      </div>

      <div className="secondContainer">
        <div>
          <img src={me} alt="david-avatar.jpg" className="meAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {user?.name}
          </Typography>
          <Typography variant="h5" style={{ letterSpacing: "5px" }}>
            Full Stack Web Developer
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            This is description: Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Natus ex error odit dolores assumenda quibusdam
            nemo nesciunt soluta aut sunt!
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
