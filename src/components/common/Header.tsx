"use client";

import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import React, { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MenuItems } from "@/src/utils/Constants";
import Link from "next/link";
import ThemeToggle from "../../theme/ThemeToggle";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const router = useRouter();

  return (
    <Box
      sx={(theme) => ({
        flexGrow: 1,
        display: "flex",
        borderBottom: "3px solid",
        borderColor: theme.palette.primary.main,
      })}
    >
      <AppBar position="fixed" sx={{ boxShadow: "none" }}>
        <Toolbar
          sx={{
            backgroundColor: "background.headerBackground",
            color: "primary.main",
          }}
        >
          <Box sx={{ flexGrow: 1, cursor: "pointer" }}>
            <img
              src="/logo.png"
              alt="Logo"
              className="w-[150px] h-[40px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]"
              onClick={() => router.push("/")}
            />
          </Box>
          <HeaderItems />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const HeaderItems = () => {
  const pathname = usePathname();

  const trackUser = async (pageTo: string) => {
    console.log(pageTo);
    await fetch("/api/track-visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page: pageTo }),
    });
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
        ? "text-white font-semibold bg-black px-3 py-2 after:scale-x-100 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        : "hover:text-white hover:bg-black hover:scale-105 hover:transition-transform hover:duration-300 px-3 py-2";
    }

    return pathname.startsWith(path)
      ? "text-white font-semibold bg-black px-3 py-2 after:scale-x-100 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
      : "hover:text-white hover:bg-black hover:scale-105 hover:transition-transform hover:duration-300 px-3 py-2";
  };

  return (
    <Box>
      {/* Computer Header */}
      <div className=" hidden md:flex p-2 md:p-4 lg:p-6">
        <React.Fragment>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={7}
          >
            {MenuItems.map((page, index) => (
              <Link
                href={page.to}
                key={index}
                onClick={() => trackUser(page.to)}
                className={`${isActive(page.to)} text-lg flex items-center gap-2 rounded-xl`}
              >
                {<page.icon />}
                <Typography variant="button" color="palette.text.primary">
                  {page.name}
                </Typography>
              </Link>
            ))}

            {/* Theme Toggle */}
            <ThemeToggle />
          </Stack>
        </React.Fragment>
      </div>

      <div className="md:hidden">
        <MobileHeader />
      </div>
    </Box>
  );
};

export default Header;
