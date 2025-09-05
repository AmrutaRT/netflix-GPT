import React from "react";
import Header from "./Header";
import { Formik, Form, Field } from "formik";

const Login = () => {
    const [isSignIn, setIsSignIn] = React.useState(true);

    const toggleSignIn = () => {
      setIsSignIn(!isSignIn);
    }

  const validateForm = (values) => {
    const errors = {};
    
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be at least 4 characters";
    } else if (values.password.length > 60) {
      errors.password = "Password must be less than 60 characters";
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Add your login logic here
    console.log("Form values:", values);
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <Header />
      {/* Background container */}
      <div className="fixed w-full h-full top-0 left-0">
     {/* Image with zoom effect */}
     <img
     src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_large.jpg"
     srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_small.jpg 959w"
     alt=""
     className="w-full h-full object-cover transform scale-125"
   />
   {/* Dark gradient overlay */}
   <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      <Formik
        initialValues={{ name:'',email: "", password: "" }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="absolute p-12 text-white flex flex-col rounded-md bg-black/70 w-[450px] my-36 mx-auto right-0 left-0">
            <h2 className="font-bold text-3xl py-4">Sign In</h2>
            
            <div className="relative">
            {!isSignIn && <Field
            type="text"
            name="name"
            placeholder="Name"
            className="p-4 my-4 rounded-sm w-full bg-transparent border border-white"
            />}
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="p-4 my-4 rounded-sm w-full bg-transparent border border-white"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div className="relative">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="p-4 my-4 rounded-sm w-full bg-transparent border border-white"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
              )}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className=" bg-red-600 p-4 my-6 rounded-sm w-full hover:bg-red-700 disabled:opacity-50"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p className="cursor-pointer" onClick={toggleSignIn} >
              {isSignIn? "New to Netflix? Sign up Now" :"Alredy a user? Sign In"}
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;