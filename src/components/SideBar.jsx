import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { styled, useTheme } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import MailIcon from "@mui/icons-material/Mail";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Avatar, Stack, Tooltip, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const elementArrOne = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];

const elementArrTwo = [
  {
    text: "Profile Form",
    icon: <PersonOutlineOutlinedIcon />,
    path: "/profileForm",
  },
  { text: "Calender", icon: <CalendarTodayOutlinedIcon />, path: "/calender" },
  { text: "FAQs Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
];

const elementArrThree = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/barchart" },
  {
    text: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    path: "/piechart",
  },
  { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/linechart" },
  { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/mapchart" },
];

export default function SideBar({ open, handleDrawerClose }) {
  const location = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ scrollbarColor: "#888 transparent" }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <Stack direction="column" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            sx={{
              my: 1,
              width: open ? 88 : 44,
              height: open ? 88 : 44,
              border: "2px solid gray",
              transition: "0.25s",
            }}
            src="data:image/jpeg;base64,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"
          />
          <Typography sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}>
            {" "}
            Asmaa Hassan{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: open ? 15 : 0,
              my: 1,
              transition: "0.25s",
              color: theme.palette.info.main,
            }}
          >
            Admin
          </Typography>
        </Stack>

        <Divider />

        <List>
          {elementArrOne.map((ele) => (
            <ListItem key={ele.path} disablePadding sx={{ display: "block" }}>
              <Tooltip title={open ? null : ele.text} placement="left-end">
                <ListItemButton
                  onClick={() => {
                    navigate(ele.path);
                  }}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      bgcolor: location.pathname === ele.path ? "gray" : null,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {ele.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={ele.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {elementArrTwo.map((ele) => (
            <ListItem key={ele.path} disablePadding sx={{ display: "block" }}>
              <Tooltip title={open ? null : ele.text} placement="left-end">
                <ListItemButton
                  onClick={() => {
                    navigate(ele.path);
                  }}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      bgcolor: location.pathname === ele.path ? "gray" : null,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {ele.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={ele.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {elementArrThree.map((ele) => (
            <ListItem key={ele.path} disablePadding sx={{ display: "block" }}>
              <Tooltip title={open ? null : ele.text} placement="left-end">
                <ListItemButton
                  onClick={() => {
                    navigate(ele.path);
                  }}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      bgcolor: location.pathname === ele.path ? "gray" : null,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {ele.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={ele.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
