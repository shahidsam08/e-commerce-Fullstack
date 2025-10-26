import React from 'react'

function Continue_with_google() {
  return (
    <div>
      <button className="lg:w-120 border-1 rounded-4xl px-10 py-4 text-2xl flex flex-row align-middle justify-center mt-4 gap-8 mx-6 text-wrap hover:bg-black hover:text-white hover:transition hover:scale-102 hover:duration-1000  ease-out cursor-pointer">
            {" "}
            <img
              className="inline-block mr-5"
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              alt="Google"
              width="30"
            />{" "}
            Continue with Google
          </button>
    </div>
  )
}

export default Continue_with_google


// this is components show the Continue with google.
