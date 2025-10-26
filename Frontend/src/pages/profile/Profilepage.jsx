import Navigation from "../../components/Navigation";

function Profilepage() {


  return (
    <div className="w-full flex flex-col align-middle justify-center items-center gap-5">
      <div className="md:w-full">
        <Navigation />
      </div>
      <div className="flex flex-col gap-3 border-1 rounded-3xl p-6 justify-center items-center align-middle w-[95%] bg-yellow-100 sm:w-[90%] mb-4 md:w-1/3 md:self-start md:ml-10">
        <div className="border-4 border-black w-fit p-[2px] rounded-[20%] flex flex-col self-center ">
          <img
            className="rounded-[20%]"
            src="https://images.unsplash.com/photo-1538645731800-4640c639bba7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyb3dufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
            alt="User_photo"
            width="200"
          />
        </div>
        <h2 className="border-white border-1 size-fit p-2 font-bold text-2xl hover:border-1 hover:border-black rounded-2xl hover:bg-gray-200">
          User_name
        </h2>

        <p className="border-white border-1 size-fit p-2 font-bold text-2xl hover:border-1 hover:border-black rounded-2xl hover:bg-gray-200">
          user_gender
        </p>
        <p className="border-white border-1 size-fit p-2 font-bold text-2xl hover:border-1 hover:border-black rounded-2xl hover:bg-gray-200">
          User_email
        </p>
        
        <p className="border-white border-1 size-fit p-2 font-bold text-2xl hover:border-1 hover:border-black rounded-2xl hover:bg-gray-200">
          User_address
        </p>
        <button className="border-white border-1 p-2 font-bold text-2xl hover:border-1 hover:border-black rounded-2xl  hover:bg-gray-200">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profilepage;
