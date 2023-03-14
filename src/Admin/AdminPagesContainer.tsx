import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";

export default function AdminPagesContainer({ children }: any) {
  const themeInstance = useTheme();
  const isXS: boolean = useMediaQuery(themeInstance.breakpoints.only("xs"));

  const user: string | null = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;

  const [openSidebar, setOpenSidebar] = useState(isXS ? "0vw" : "5vw");
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          alignItems: "flex-start",
          backgroundColor:'background.default',
          justifyContent: "flex-start",
        }}
      >
        <Sidebar
          user={user}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          {/* APPBAR */}
          <Appbar
            user={user}
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
          {children}
        </Box>
      </Box>
    </>
  );
}
