import { useContext } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ClearOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import { UiContext } from "../../context";
import Logo from "../../public/cc/CC-logo-White.png";

export const Navbar = () => {
  const { asPath, push } = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  // const { numberOfItems } = useContext( CartContext );

  return (
    <AppBar>
      <Toolbar>
        {/* <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            
            <Image src={Logo} width="300" height="100" alt="cc" />
          </Link>
        </NextLink> */}

        <Box  sx={{ justifyContent: 'space-between' }} display="flex" alignItems="center" >
          <Image src={Logo} width="250" height="100" alt="cc" />
        </Box>

        <Button onClick={toggleSideMenu}>
          Menú <MenuOutlined />
        </Button>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};
