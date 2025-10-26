import Continue_with_google from "../../components/Continue_with_google";
import { Link } from "react-router";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function SignInpage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5002/api/login", {
        email: email, 
        password: password
      });
      if(response.data === "Log In successfully!") {
        alert("Log in successfully!")
        return navigate("/")
      } else if (response.data === "password is wrong") {
        return alert("password is wrong! check your password!")
      } else if (response.data === "Email is wrong!") {
        return alert("Check your email!")
      } else {
        return alert("Something else happen!")
      }
    } catch (error) {
      console.log("The error is " , error)
      alert("something went wrong!")
    }
  }
  return (
    <div>
      <div className="h-[15vh]">
        <img
          className="rounded-2xl"
          src="zipper.png"
          alt="company_logo"
          width="100"
        />
      </div>
      <div className="flex flex-col align-middle justify-center items-center gap-4">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5645/5645046.png"
          alt="login_image"
          width="90"
        />
        <h1 className="text-5xl font-bold text-center">Welcome back</h1>

        {/* Continue with google components. */}
        <Continue_with_google />

        <p className="text-2xl ">or</p>
        <form action="" onSubmit={handleLogin}>
          <input
            className="block w-full border-1 rounded-[0.5rem] h-14 text-2xl  indent-2.5 lg:min-w-100 mb-4 sm:min-w-120 "
            type="email"
            placeholder="Enter email address"
            required
            name="password"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="block w-full border-1 rounded-[0.5rem] h-14 text-2xl  indent-2.5 lg:min-w-100 mb-4 sm:min-w-120 "
            type="password"
            placeholder="Enter your password"
            required
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          
          <button className="block border-1 rounded-[0.5rem] h-14 text-2xl w-full lg:w-120 pl-2.5 mb-4 bg-black text-white" type="submit">Submit</button>
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
          Don't have an account?{" "}
          <Link to="/signup_page" className="underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInpage;
