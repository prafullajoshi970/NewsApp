import React, { useState } from "react";
import { Box, Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import News from "./News";

import "./Nav.css";
function Nav(props) {
  const [relatednews, setRelatdnews] = useState("");

  return (
    <div className="main">
      <div className="Navmain">
        <Box ml="50px" w="30%">
          <Menu>
            <MenuButton
              color="white"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList bg="rgb(87, 89, 86)">
              <button onClick={() => setRelatdnews("Business")}>
                Business
              </button>
              <br />
              <button onClick={() => setRelatdnews("Entertainment")}>
                Entertainment
              </button>
              <br />
              <button onClick={() => setRelatdnews("General")}>General</button>
              <br />
              <button onClick={() => setRelatdnews("Health")}>Health</button>
              <br />
              <button onClick={() => setRelatdnews("Science")}>Science</button>
              <br />
              <button onClick={() => setRelatdnews("Sports")}>Sports</button>
              <br />
              <button onClick={() => setRelatdnews("Technology")}>
                Technology
              </button>
              <br />
            </MenuList>
          </Menu>
        </Box>
        <Box w="70%">
          <h1> Headlines</h1>
        </Box>
      </div>
      <div className="center">
        <News props={relatednews}></News>
      </div>
    </div>
  );
}

export default Nav;
