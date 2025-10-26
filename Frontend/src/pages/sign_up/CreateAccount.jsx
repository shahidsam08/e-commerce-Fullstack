import { Link } from "react-router";
import Continue_with_google from "../../components/Continue_with_google";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateAccount() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handlesubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5002/api/registers", {
        firstname : firstname,
        lastname : lastname,
        email : email,
        password : password
      });
      if(response.data === "already have an account") {
        alert("Already have an account!")
        return navigate("/signin_page")
      } else if(response.data === "New user created") {
         alert("New User Created")
          return navigate("/signin_page")
      } else {
        return alert("something went wrong")
      }
    } catch (error) {
      alert("The error is : ", error)
    }
  }
  return (
    <div className="p-8 bg-white">
      <div className="h-[15vh]">
        <img
          className="rounded-2xl"
          src="zipper.png"
          alt="company_logo"
          width="100"
        />
      </div>
      <div>
        <div className="flex flex-col items-center align-middle justify-around gap-2 ">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/17163/17163751.png"
              alt=""
              width="100"
            />
          </div>
          <h2 className="text-5xl text-center font-bold">Welcome to Zippr</h2>
          <p className="text-2xl text-gray-800 text-center">
            Create your account and discover trending products.
          </p>

          {/* button for the "continue with google" */}

          <Continue_with_google />

          {/* Using this components from the components folder. */}

          {/* or part */}
          <p className="text-2xl">or</p>
          <form onSubmit={handlesubmit}>
            <input
              className="border-1 w-full mb-3 h-14 pl-2 rounded-[0.5rem] text-2xl lg:w-59 mr-2"
              type="text"
              name="firstname"
              placeholder="Enter firstname"
              required
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
            />
            <input
              className="border-1 w-full mb-3 h-14 pl-2 rounded-[0.5rem] text-2xl lg:w-59"
              type="text"
              name="lastname"
              placeholder="Enter lastname"
              required
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
            <input
              className="block border-1 rounded-[0.5rem] h-14 text-2xl w-full lg:w-120 pl-2.5 mb-4"
              type="email"
              name="email"
              placeholder="Enter email address"
              required
              autoComplete="on"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              className="block border-1 rounded-[0.5rem] h-14 text-2xl w-full lg:w-120 pl-2.5 mb-4"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              maxLength={12}
            />
            <button
              className="block border-1 rounded-[0.5rem] h-14 text-2xl w-full lg:w-120 pl-2.5 mb-4 bg-black text-white cursor-pointer"
              type="submit"
            >
              Continue
            </button>
          </form>

          {/* The company terms and conditions info */}
          <p className="text-center">
            By continuing, you agree to our{" "}
            <Link className="underline text-gray-600" to="/companies_terms">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="/companies_privacy" className="underline text-gray-600">
              Privacy Policy.
            </Link>
          </p>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/signin_page" className="underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
