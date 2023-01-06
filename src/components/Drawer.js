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
import { Box } from "@mui/material";

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

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        anchor={'left'}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
        >
          <List>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                {/* <Link to="/" className={classes.link}>Home</Link> */}
                <a href="#" className={classes.link}>Longevity Supplements</a>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <a href="#" className={classes.link}>About Us</a>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <a href="#" className={classes.link}>Offer your Supplement</a>
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;