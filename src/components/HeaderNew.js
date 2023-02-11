import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: '1.8rem 0',
    "&:hover": {
      color: '#ccc'
    },
  },
}));

function HeaderNew() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className="flex justify-between bg-[#1976d2]">
        <a href="/" className=" flex justify-between items-center gap-2">
          <img src='/images/longeIcon.png' width='48px' alt="longeicon" />
          <label className="text-white font-gordita text-xl">Longevitytable.com</label>
        </a>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <a href="/" className={classes.link}>
              LONGEVITY SUPPLEMENTS
            </a>
            <a href="/aboutus" className={classes.link}>
              ABOUT US
            </a>
            <a href="/contact" className={classes.link}>
              OFFER YOUR SUPPLEMENT
            </a>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default HeaderNew;