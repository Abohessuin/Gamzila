import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../img/logo.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import {fetchSearch} from "../actions/gamesAction"
const Nav = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const submitSearchHandler = (e) => {
    e.preventDefault();
    console.log(searchInput);
    dispatch(fetchSearch(searchInput));
    setSearchInput(" ");
  };

  const clearSearchHandler =()=>{
      dispatch({ type: "CLEAR_SEARCHED" });
  }
  return (
    <StyledNav>
      <Logo onClick={clearSearchHandler}>
        <img src={logo} alt="img" />
        <h1>Gamzila</h1>
      </Logo>
      <form>
        <input value={searchInput} onChange={searchInputHandler} type="text" />
        <button onClick={submitSearchHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
  h1 {
    margin-top: 0.5rem;
  }
`;

export default Nav;
