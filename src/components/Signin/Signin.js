import { async } from "@firebase/util";
import React from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../Context/AuthContext";
import './Signin.css'

const Signin = () => {
  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="holyshit" name="signin">
      <h2 className="wtfishika">Sign in</h2>
      <div className="max-w-[240px] m-auto py-4">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;
