import React, { useEffect } from "react";
import "./About.css";
import { Typography } from "@mui/material";
import me from "../../images/yo.jpg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getProfileInfo } from "../../slices/userSlice";

const About = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.about); // Object { success , user: {}}

  useEffect(() => {
    dispatch(getProfileInfo());
  }, [dispatch]);

  return (
    <div className="about">
      <div className="firstContainer">
        <Typography> {user?.quote} </Typography>
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
            {user?.title}
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
            {user?.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
