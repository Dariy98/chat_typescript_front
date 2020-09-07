import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Divider from "@material-ui/core/Divider";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import { Button } from "@material-ui/core";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import io from "socket.io-client";
// import { useHistory } from "react-router-dom";
// import decode from "jwt-decode";

import Messages from "./../components/Messages";
import UserList from "./../components/UserLIst";
import AdminView from "./../components/ForAdmin";
import Footer from "./../components/Footer";

export const ChatPage: React.FunctionComponent = () => {
  return (
    <>
      <Messages />
      <AdminView />
      <UserList />
      <Footer />
    </>
  );
};
export default ChatPage;
