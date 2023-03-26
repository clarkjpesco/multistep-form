import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";
const SocialForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { social, setSocial } = useSignupForm();

  function onSubmit(data) {
    setSocial(data);
    navigate("/review");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>How can we find you on social?</h2>
      <input
        type='text'
        name='twitter'
        placeholder="What's your twitter?"
        defaultValue={social.twitter}
        {...register("twitter", { required: true })}
      />
      <p>{errors.twitter && "Twitter is required"}</p>
      <input
        type='text'
        name='facebook'
        placeholder="What's your facebook?"
        defaultValue={social.facebook}
        {...register("facebook", {
          required: true,
        })}
      />
      <p>{errors.facebook && "Facebook is required"}</p>
      <input type='submit' value='Next' />
    </form>
  );
};

export default SocialForm;
