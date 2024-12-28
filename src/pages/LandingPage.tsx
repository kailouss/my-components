import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LandingComponents from "./LandingComponents";

const LandingPage = () => {
  return (
    <motion.div
      className="bg-white fixed inset-0 text-black h-screen w-screen overflow-hidden"
      initial={{ x: "-100%", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute text-white border-black bg-black flex-col md:clip-path-slanted-left h-full md:w-2/3 w-full items-center flex justify-center md:items-start md:p-5 gap-y-4">
        <h1 className="text-5xl font-lexend font-bold">HELLO</h1>
        <p>Personal Components</p>
        <Link to="/contents">
          <button className="border w-auto h-10 bg-blue-500 p-2 rounded-2xl hover:bg-blue-700">
            Get Started ~~
          </button>
        </Link>
      </div>
      <div>
        <LandingComponents />
      </div>
    </motion.div>
  );
};

export default LandingPage;
