import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { updateUser } from "../../slices/userSlice";
import "./Panel.css";

interface SkillsProps {
  image1: string | null | ArrayBuffer;
  image2: string | null | ArrayBuffer;
  image3: string | null | ArrayBuffer;
  image4: string | null | ArrayBuffer;
  image5: string | null | ArrayBuffer;
  image6: string | null | ArrayBuffer;
}

interface AboutProps {
  avatar: string | null | ArrayBuffer;
  name: string;
  title: string;
  description: string;
  quote: string;
}

const skillsInitialState: SkillsProps = {
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  image5: "",
  image6: "",
};

const aboutInitialState: AboutProps = {
  avatar: "",
  name: "",
  title: "",
  description: "",
  quote: "",
};

const Panel = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState<SkillsProps>(skillsInitialState);
  const [about, setAbout] = useState<AboutProps>(aboutInitialState);

  const dispatch = useAppDispatch();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(name, email, password, skills, about));

    console.log(name, email, password, skills, about);
  };

  const handleImages = (e: any, value: number) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (value === 1) {
          setSkills({ ...skills, image1: Reader.result });
        }
        if (value === 2) {
          setSkills({ ...skills, image2: Reader.result });
        }
        if (value === 3) {
          setSkills({ ...skills, image3: Reader.result });
        }
        if (value === 4) {
          setSkills({ ...skills, image4: Reader.result });
        }
        if (value === 5) {
          setSkills({ ...skills, image5: Reader.result });
        }
        if (value === 6) {
          setSkills({ ...skills, image6: Reader.result });
        }
      }
    };
  };

  const handleAboutImage = (e: any) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({ ...about, avatar: Reader.result });
      }
    };
  };

  return (
    <div className="adminPanel">
      <div className="adminContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChangeName}
            className="adminPanelInputs"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
            className="adminPanelInputs"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
            className="adminPanelInputs"
          />
          <div className="adminPanelSkills">
            <div>
              <Typography> SKILL 1 </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImages(e, 1)}
              />
            </div>
            <div>
              <Typography>SKILL 2</Typography>

              <input
                type="file"
                onChange={(e) => handleImages(e, 2)}
                accept="image/*"
                className="adminPanelFileUpload"
              />
            </div>
            <div>
              <Typography>SKILL 3</Typography>

              <input
                type="file"
                onChange={(e) => handleImages(e, 3)}
                accept="image/*"
                className="adminPanelFileUpload"
              />
            </div>
            <div>
              <Typography>SKILL 4</Typography>

              <input
                type="file"
                onChange={(e) => handleImages(e, 4)}
                accept="image/*"
                className="adminPanelFileUpload"
              />
            </div>
            <div>
              <Typography>SKILL 5</Typography>

              <input
                type="file"
                onChange={(e) => handleImages(e, 5)}
                accept="image/*"
                className="adminPanelFileUpload"
              />
            </div>
            <div>
              <Typography>SKILL 6</Typography>

              <input
                type="file"
                onChange={(e) => handleImages(e, 6)}
                accept="image/*"
                className="adminPanelFileUpload"
              />
            </div>
          </div>

          <div className="adminPanelAbout">
            <fieldset>
              <legend>About</legend>
              <input
                type="text"
                placeholder="Name"
                value={about.name}
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Title"
                value={about.title}
                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                className="adminPanelInputs"
              />

              <input
                type="text"
                placeholder="Description"
                value={about.description}
                onChange={(e) =>
                  setAbout({ ...about, description: e.target.value })
                }
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Quote"
                value={about.quote}
                onChange={(e) => setAbout({ ...about, quote: e.target.value })}
                className="adminPanelInputs"
              />

              <input
                type="file"
                onChange={handleAboutImage}
                className="adminPanelFileUpload"
                placeholder="Choose Avatar"
                accept="image/*"
              />
            </fieldset>
          </div>
        </form>
      </div>
      <h2>Panel de administrador</h2>
    </div>
  );
};

export default Panel;
