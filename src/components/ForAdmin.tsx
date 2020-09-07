import React from "react";
import { Divider } from "@material-ui/core";

import AllUsersListAdmin from "./AllUserAdmin";
import OnlineUsersAdmin from "./OnlineUserAdmin";

// export default function AdminView({ allUsers, socket, user }) {
export default function AdminView() {
  //   const onBan = (userId) => {
  //     socket.emit("ban", { id: userId });
  //     console.log(`user id - ${userId} is baned`);
  //   };

  //   const onUnBan = (userId) => {
  //     socket.emit("unban", { id: userId });
  //     console.log(`user id - ${userId} is Unbaned`);
  //   };

  //   const onMute = (userId) => {
  //     socket.emit("mute", { id: userId });
  //     console.log(`user id - ${userId} is mute`);
  //   };

  //   const onUnMute = (userId) => {
  //     socket.emit("unmute", { id: userId });
  //     console.log(`user id - ${userId} is Unmute`);
  //   };

  return (
    <>
      <p>admin veiw</p>
      <Divider />
      <OnlineUsersAdmin />
      <Divider />
      <AllUsersListAdmin />
    </>
  );
}
