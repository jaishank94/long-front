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
  const { alsogoodfor, name, testorganism } = rowData;

  const Genres = ({ values, color }) => {
    console.log("called");
    return (
      <>
        {
          values.map((genre, idx) => {
            return (
              <Chip label={genre} size="small" color={color} variant="outlined" key={idx} />
            );
          })}
      </>
    )
  };
  return (
    <>
      <Drawer
        open={open}
        anchor={'right'}
        onClose={() => trigger(false)}
      >
        <Box
          sx={{ marginTop: '10rem', paddingLeft: '10px', paddingRight: '10px' }}
        >
          <div className=" py-2 mb-4">
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
          </div>
        </Box>
      </Drawer>
    </>
  );
}
export default SupplementDrawer;