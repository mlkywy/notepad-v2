import React from "react";
import Title from "../../components/Title";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import { Primary } from "../../components/Buttons";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="w-screen h-screen">
      <Title title="log in" />
      <div className="mt-10 pb-40 w-full flex justify-center gap-6 pl-56 pr-56">
        <Form
          text="Don't have an account?"
          button={<Primary option={"log in"} link="#" />}
          link={
            <Link to="login">
              <p className="inline-flex text-sm text-lavender hover:text-white">
                Sign up here!
              </p>
            </Link>
          }
        >
          <InputField
            label="Email"
            id="login-email"
            placeholder="Enter email"
            type="email"
            errorMsg="Error here"
          />
          <InputField
            label="Password"
            id="login-password"
            placeholder="Enter password"
            type="password"
            errorMsg="Error here"
          />
        </Form>
      </div>
    </div>
  );
};

export default LoginScreen;
