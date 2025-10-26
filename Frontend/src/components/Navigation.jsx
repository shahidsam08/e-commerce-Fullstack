import { Link } from "react-router";

function Navigation() {
  return (
    <div
      className="flex flex-row align-middle justify-around
     p-2 items-center flex-wrap gap-3 bg-yellow-300"
    >
      <div>
        <img
          className="rounded-[2rem]"
          src="zipper.png"
          alt="company logo"
          width="70"
        />
      </div>
      {/* search element for products. */}
      <div className="basis-lg ">
        <input
          className="border-1 w-full rounded-[0.5rem] border-black  text-black outline-none p-2"
          type="search"
          placeholder="Search the product"
          name="search"
        />
      </div>
      {/* Log In page. */}
      <div>
        <Link to="/signin_page">
          <button className="bg-black text-white px-3 py-2 text-2xl rounded-[2rem] hover:bg-white hover:text-black transition duration-500 ease-in-out cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>
      <div>
        <Link to="/signup_page">
          <button className="bg-black text-white px-3 py-2 text-2xl rounded-[2rem] hover:bg-white hover:text-black transition duration-500 ease-in-out cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
      <div>
        <Link to="/cart_page">
          <button className="bg-black text-white px-3 py-2 text-2xl rounded-[2rem] hover:bg-white hover:text-black transition duration-500 ease-in-out cursor-pointer">
            Cart
          </button>
        </Link>
      </div>
      <div>
        <Link to="/profile_page">
          <button className="bg-black text-white px-3 py-2 text-2xl rounded-[2rem] hover:bg-white hover:text-black transition duration-500 ease-in-out cursor-pointer">
            Profile
          </button>
        </Link>
      </div>
      <div>
        <Link to="/become_seller" className="px-3 py-2 text-2xl rounded-[2rem] hover:bg-black hover:text-white transition duration-500 text-nowrap ease-in-out cursor-pointer">Become seller</Link>
      </div>
      <div>
        <select className="px-4 py-2" name="select">
          <option value="English">English</option>
          <option value="Hindi">हिंदी </option>
        </select>
      </div>
    </div>
  );
}

export default Navigation;

// This is the navigation components.
