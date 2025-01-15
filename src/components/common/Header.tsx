"use client";

import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { MenuItems } from "@/src/utils/Constants";
import Link from "next/link";
import ThemeToggle from "../../theme/ThemeToggle";
import MobileHeader from "./MobileHeader";
import { TbBackground } from "react-icons/tb";

const Header = () => {
  const router = useRouter();

  return (
    <Box
      sx={(theme) => ({
        flexGrow: 1,
        display: "flex",
        border: "1px solid",
        borderColor: theme.palette.primary.main,
      })}
    >
      <AppBar
        position="static"
        sx={{ boxShadow: "none", position: "relative" }}
      >
        {/* Semi-transparent background layer */}
        <Box
          sx={(theme) => ({
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme.palette.background.headerBackground,
          })}
        />
        <Toolbar
          sx={{
            backgroundColor: "background.headerBackground",
            color: "primary.main",
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <Box
            sx={(theme) => ({
              cursor: "pointer",
            })}
          >
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

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
        ? "text-white font-semibold bg-black px-3 py-2 after:scale-x-100 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        : "hover:text-white hover:bg-black hover:scale-105 hover:transition-transform hover:duration-300 hover:px-3 hover:py-2";
    }

    return pathname.startsWith(path)
      ? "text-white font-semibold bg-black px-3 py-2 after:scale-x-100 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
      : "hover:text-white hover:bg-black hover:scale-105 hover:transition-transform hover:duration-300 hover:px-3 hover:py-2";
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
              <Link href={page.to} key={index}>
                <Typography
                  variant="button"
                  color="palette.text.primary"
                  sx={(theme) => ({
                    border: "1px solid",
                    borderColor: theme.palette.primary.main,
                    px: 2,
                    py: 1,
                    // color: theme.palette.primary.main,
                    // background: theme.palette.background.default
                  })}
                  className={`${isActive(page.to)} text-lg`}
                >
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
