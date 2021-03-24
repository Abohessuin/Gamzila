import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import {loadDetails} from '../actions/detailsAction'
import {useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import {smallImage} from '../util'
const Game= ({name,released,image,id})=>{

  const dispatch = useDispatch();
  const loadDetailHandler= () =>{
  document.body.style.overflow="hidden";
   dispatch(loadDetails(id));
  }
  
      return(
        <StyledGame onClick={loadDetailHandler} layoutId={id}>
           <Link to={`/game/${id}`}>
           <h1>{name}</h1>
           <h2>{released}</h2>
           <motion.img src={smallImage(image,640)} alt={name}/>
          </Link>
        </StyledGame>
    )
}



const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

export default Game;