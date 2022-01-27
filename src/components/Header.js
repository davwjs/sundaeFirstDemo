import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import { motion } from "framer-motion";
import styled, { css } from "styled-components/macro";
// import { animateScroll as scroll, Link as LinkS } from "react-scroll";

// const NavLink = css`
//   color: #ffffff;
//   display: flex;
//   align-items: center;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   text-decoration: none;
// `;

// const NavMenuLinks = styled(LinkS)`
//   ${NavLink}
// `;

const Button = styled.button`
  background: ${({ primary }) => (primary ? "#000d1a" : "CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  // color: ${({ primary }) => (primary ? "#ffffff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-3px);
  }
`;

const Header = ({ toggle }) => {
  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    OWNER_ADDRESS: "",

    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [blockchain.account]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner">
        <div className="logo">Sundae.School</div>
        {/* <nav className="nav">
          <li>
            <NavMenuLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              ABOUT
            </NavMenuLinks>
          </li>
          <li>
            <a href="#attributes">ATTRIBUTES</a>
          </li>
          <li>
            <NavMenuLinks
              to="roadmap"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              ROADMAP
            </NavMenuLinks>{" "}
          </li>
          <li>
            <NavMenuLinks
              to="team"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              TEAM
            </NavMenuLinks>{" "}
          </li>
          <li>
            <NavMenuLinks
              to="mint"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              MINT
            </NavMenuLinks>{" "}
          </li>
        </nav> */}
        <div className="connect">
          <Button
            className="uppercase text-white"
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
              getData();
            }}
          >
            CONNECT
          </Button>
        </div>
        {/* <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Header;
