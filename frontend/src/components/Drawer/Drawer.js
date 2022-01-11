import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import EventNoteIcon from "@mui/icons-material/EventNote";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DashboardIcon from "@mui/icons-material/DashboardCustomize";
import AccountIcon from "@mui/icons-material/AccountCircle";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { Link, useNavigate } from "react-router-dom";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} id="student-portal-app-bar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" align="left">
            Student Portal
          </Typography>
          <UserProfile />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Divider />
        <List>
          {[
            {
              title: "Users",
              icon: AccountIcon,
              url: "Users",
            },
            {
              title: "Dashboard",
              icon: DashboardIcon,
              url: "Home",
            },
            { title: "Students", icon: BorderColorIcon, url: "Students" },
            { title: "Teachers", icon: LibraryBooksIcon, url: "Teachers" },
            {
              title: "Academic Plan",
              icon: EventNoteIcon,
              url: "AcademicPlan",
            },
            {
              title: "Examination",
              icon: HowToRegIcon,
              url: "Examination",
            },
          ].map((listItem, index) => {
            const Icon = listItem.icon;
            return (
              <ListItem button key={listItem.title}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <Link to={"/" + listItem.url}>
                  <ListItemText primary={listItem.title} />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>{props.children}</Typography>
      </Main>
    </Box>
  );
}

const USER_SETTINGS = [
  { title: "Profile", url: "/user-profile" },
  { title: "Dashboard", url: "/home" },
  { title: "Logout", url: "/login" },
];

export function UserProfile({ appBarId = "student-portal-app-bar" }) {
  const [userState, setUserState] = useState(null);
  const [settings, setSettings] = useState(USER_SETTINGS);

  const navigate = useNavigate();
  const onOpenUserProfile = (e) => {
    setUserState(e.currentTarget);
  };

  const onClickMenuItem = (setting) => {
    if (setting.url === "/login") {
      localStorage.clear();
      navigate(setting.url);
    } else {
      navigate(setting.url);
    }
  };

  const onCloseUserProfile = () => {
    setUserState(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="User Profile">
        <IconButton onClick={onOpenUserProfile} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id={appBarId}
        anchorEl={userState}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(userState)}
        onClose={onCloseUserProfile}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting.title}
            onClick={() => {
              onClickMenuItem(setting);
            }}
          >
            <Typography textAlign="center">{setting.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
