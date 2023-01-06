import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
//import Box from "@mui/material/Box";
// import './assets/main.css'
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./components/Sidebar";

export default function Header() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar className="flex justify-between py-4">
          <a href="/" className=" flex justify-between items-center gap-2">
            <img src='/images/longeIcon.png' width='48px' alt="longeicon" />
            <label className="text-white font-gordita text-xl">Longevitytable.com</label>
          </a>
          <div className="">
            <Button color="inherit">LONGEVITY SUPPLEMENTS</Button>
            <Button color="inherit">ABOUT US</Button>
            <Button color="inherit">OFFER YOUR SUPPLEMENT</Button>
          </div>
          <div className="block md:hidden">
          </div>
        </Toolbar>
      </AppBar>
      {/* <Sidebar isOpen={true} /> */}
    </>
  );
}