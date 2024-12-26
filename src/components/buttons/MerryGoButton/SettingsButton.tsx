import { useState } from "react";
import Content from "./content";
import "./button.css";

const SettingsButton = () => {
  const [isSettingActive, setIsSettingActive] = useState(false);
  const [overlayContent, setOverlayContent] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsSettingActive((prev) => !prev);
  };

  const showOverlay = (contentId: string) => {
    setOverlayContent(`Content of ${contentId}`);
  };

  const hideOverlay = () => {
    setOverlayContent(null);
  };

  return (
    <div className="relative border border-green-300 h-full flex justify-center items-center">
      <div className="settings-button-container">
        <div
          id="menu-button"
          className="bg-[url('src/assets/settings-icon.webp')] bg-contain bg-no-repeat bg-center border-4 inset-1 border-gray-500 bg-[rgb(128,128,128)] z-20 w-36 h-36 rounded-full cursor-pointer justify-center m-auto flex hover:opacity-70 hover:scale-105 transition"
          onClick={toggleMenu}
        ></div>
        <div
          className={`circle-container flex justify-center items-center absolute top-1/2 left-1/2 translate-y-1/2 translate-x-1/2 ${
            isSettingActive ? "active" : ""
          }`}
        >
          <div className="circle" onClick={() => showOverlay("content1")}>
            1
          </div>
          <div className="circle" onClick={() => showOverlay("content2")}>
            2
          </div>
          <div className="circle" onClick={() => showOverlay("content3")}>
            3
          </div>
          <div className="circle" onClick={() => showOverlay("content4")}>
            4
          </div>
          <div className="circle" onClick={() => showOverlay("content5")}>
            5
          </div>
          <div className="circle" onClick={() => showOverlay("content6")}>
            6
          </div>
          <div className="circle" onClick={() => showOverlay("content7")}>
            7
          </div>
          <div className="circle" onClick={() => showOverlay("content8")}>
            8
          </div>
        </div>
        {overlayContent && (
          <div
            id="screendisplay"
            className={`relative top-0 left-0 w-full h-full bg-[rgba(105,104,104,0.8)] justify-center items-center text-white text-2xl z-30 ${
              overlayContent ? "flex" : "hidden"
            }`}
            onClick={hideOverlay}
          >
            <div
              id="content"
              className="bg-[#333] p-5 rounded-2xl text-center z-50"
            >
              {overlayContent}
            </div>
          </div>
        )}
        {overlayContent && <Content />}
      </div>
    </div>
  );
};

export default SettingsButton;
