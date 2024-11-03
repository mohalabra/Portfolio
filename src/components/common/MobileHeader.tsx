import React from "react";
import ThemeToggle from "../../theme/ThemeToggle";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useScreenSize from "@/src/hooks/useScreenSize";
import { MenuItems } from "@/src/utils/Constants";

const MobileHeader = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(!openDrawer);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Box sx={{ textAlign: "end", p: 2 }}>
        <IconButton
          size="large"
          edge="start"
          onClick={() => setOpenDrawer(false)}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {MenuItems.map((page, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <page.icon />
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      {/* Theme Toggle */}
      <ThemeToggle />

      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor={"right"} open={openDrawer} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default MobileHeader;
