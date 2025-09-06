import React from "react";
import { Formik, Form, Field } from "formik";

const GptSearchBar = () => {
  return (
    <div>
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
            initialValues={{content:""}}
            // onSubmit={handleSubmit}
          >
            {() => (
              <Form className="absolute p-4 text-white flex gap-2 rounded-md bg-black/70 w-[450px] my-36 mx-auto right-0 left-0">
                <div className="relative flex items-center w-full">
               
                  <Field
                    type="text"
                    name="content"
                    placeholder="What would you like to watch today?"
                    className="w-full p-2 h-10 text-sm bg-transparent border border-white rounded-lg focus:outline-none"
                  />
                <button className="p-2 m-2 rounded-lg text-white bg-red-600">Search</button>
                </div>
    
              </Form>
            )}
          </Formik>
    </div>
  );
}
export default GptSearchBar;