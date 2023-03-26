import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileForm from "./1ProfileForm";
import SocialForm from "./2SocialForm";
import Review from "./3Review";
import { SignupFormProvider } from "./SignupFormContext";
import StepLinks from "./StepLinks";

const SignupForm = () => {
  return (
    <SignupFormProvider>
      <div className='signup-form'>
        <StepLinks />
        <Routes>
          <Route path='/' element={<ProfileForm />} />
          <Route path='/social' element={<SocialForm />} />
          <Route path='/review' element={<Review />} />
        </Routes>
      </div>
    </SignupFormProvider>
  );
};

export default SignupForm;
