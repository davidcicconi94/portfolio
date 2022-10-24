import React from "react";
import "./Contact.css";
import { Typography, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().required(),
});

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);

    data.name = "";
  };

  return (
    <div className="contact">
      <div className="rightBar"></div>

      <div className="contactContainer">
        <form onSubmit={handleSubmit(onSubmit)} className="containerForm">
          <Typography variant="h4">CONTACT ME</Typography>

          <input type="text" placeholder="Name..." {...register("name")} />
          <p>{errors.name?.message}</p>

          <input type="email" placeholder="Email..." {...register("email")} />
          <p>{errors.email?.message}</p>

          <textarea
            placeholder="Message..."
            style={{ resize: "none" }}
            cols={30}
            rows={10}
            {...register("message")}
          ></textarea>
          <p>{errors.message?.message}</p>

          <Button variant="contained" type="submit">
            <b style={{ letterSpacing: "2px" }}>SEND</b>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
