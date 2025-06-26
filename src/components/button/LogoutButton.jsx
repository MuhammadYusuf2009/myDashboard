import React from "react";
import { logoutUser } from "../../firebase/firesotre/auth";

function LogoutButton() {
  return (
    <div>
      <button
        onClick={logoutUser}
        style={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        <Icon icon="mdi:logout" width="20" height="20" />
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
