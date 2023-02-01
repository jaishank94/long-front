import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Chip } from "@mui/material";
import FullWidthTabs from "./SupplementDetailsTab";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white"
  }
}));

function SupplementDrawer({ open, trigger, rowData }) {
  const classes = useStyles();
  const { name, othername } = rowData;

  
  return (
    <>
      <Drawer
        open={open}
        anchor={'right'}
        onClose={() => trigger(false)}
      >
        <Box>
          {/* <div className=" py-2 mb-4">
            <label>Name: </label>
            <label className="font-semibold">{name}</label>
          </div>
          <div className="py-2 mb-4">
            <label>Also Good For: </label>
            <Genres values={alsogoodfor} color='primary' />
          </div>
          <div className=" py-2 mb-4">
            <label>Test Organism: </label>
            <Genres values={testorganism} color='primary' />
          </div>
          <div className="text-center mt-10">
            <button color="primary" className="px-3 py-2 rounded bg-[#1976d2] text-white">BUY NOW</button>
          </div> */}
          <div className="px-10 text-center mt-5 md:mt-10 ">
            <p className=" font-samsung text-3xl">{name}</p>
            <p className="font-gordita text-lg text-gray-400">{othername}</p>
            <div className="text-center mt-14 gap-4 flex justify-center">
              <button color="primary" className="px-6 py-2 text-xl font-samsung rounded bg-[#1976d2] text-white">BUY NOW</button>
              <button color="primary" className="px-6 py-2 text-xl font-samsung rounded bg-[#1976d2] text-white">SELL</button>
            </div>
          </div>
          <div className="mt-10">
            <FullWidthTabs rowData={rowData} />
          </div>
        </Box>
      </Drawer>
    </>
  );
}
export default SupplementDrawer;