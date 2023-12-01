import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";
import useSidebar from "@/hooks/useSidebar";
import useSemiDark from "@/hooks/useSemiDark";
import useSkin from "@/hooks/useSkin";



const SidebarLogo = ({ menuHover }) => {
  const [isDark] = useDarkMode();
  const [collapsed, setMenuCollapsed] = useSidebar();
  // semi dark
  const [isSemiDark] = useSemiDark();
  // skin
  const [skin] = useSkin();
  return (
    <div
      className={` logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] py-6  px-4 
      ${menuHover ? "logo-hovered" : ""}
      ${skin === "bordered"
          ? " border-b border-r-0 border-slate-200 dark:border-slate-700"
          : " border-none"
        }      
      `}
    >
      <Link to="/dashboard">
        <div className="flex items-center space-x-4">
          {/* <div className="logo-icon">
            {!isDark && !isSemiDark ? (
              <img src={MobileLogo} alt="" width="40px" />
            ) : (
              <img src={MobileLogoWhite} alt="" />
            )}
          </div> */}

          {(!collapsed || menuHover) && (
            <div>
              <p className="text-dark-600">
                <b>Tutor Finder </b>
              </p>
            </div>
          )}
        </div>
      </Link>
{/* 
      {(!collapsed || menuHover) && (
        <div
          onClick={() => setMenuCollapsed(!collapsed)}
          className={`h-4 w-4 border-[1.5px] border-dark-600 dark:border-success-600 rounded-full transition-all duration-150
          ${collapsed
              ? ""
              : "ring-2 ring-inset ring-offset-4 ring-dark-600 dark:ring-slate-400 bg-slate-900 dark:bg-slate-400 dark:ring-offset-slate-700"
            }
          `}
        ></div>
      )} */}
    </div>
  );
};

export default SidebarLogo;
