import React from "react";
import { Link } from "react-router";

function Body_page() {
  return (
    <div>
      <div className="bg-yellow-200 m-3 p-5 flex flex-row align-middle justify-around items-center gap-8 flex-wrap">
        <Link className="flex flex-col align-middle justify-center items-center " to="/manpage_section">
          <img className="rounded-sm h-26 "
            src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
            alt="man-image"
            width="90"
          />{" "}
          <button className="text-2xl">Man</button>
          </Link>

          {/* women section */}
          <Link className="flex flex-col align-middle justify-center items-center " to="/manpage_section">
          <img className="rounded-sm h-26 "
            src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
            alt="man-image"
            width="90"
          />{" "}
          <button className="text-2xl">Women</button>
          </Link> 


      </div>
    </div>
  );
}

export default Body_page;
