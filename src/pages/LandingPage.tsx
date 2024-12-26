import MainHeader from "../components/header/MainHeader";

//HEADER
//ROUTES

const LandingPage = () => {
  return (
    <div className="bg-white text-black h-screen w-full">
      <div className="relative text-white border-black bg-black flex-col md:clip-path-slanted-left h-full md:w-2/3 w-full items-center flex justify-center md:items-start md:p-5 gap-y-4">
        <h1 className="text-5xl font-lexend font-bold">HELLO</h1>
        <p>Personal Portfolio</p>
        <button className="border w-auto h-10 bg-blue-500 p-2 rounded-2xl hover:bg-blue-700">
          Get Started ~~
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
