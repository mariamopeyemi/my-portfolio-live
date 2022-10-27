import React from 'react';
import Head from 'next/head';
import {IconContext} from "react-icons";
import { FaSass } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { HiOutlineCode } from 'react-icons/hi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { SiTrello } from 'react-icons/si';
import { SiClickup } from 'react-icons/si';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiStyledcomponents } from 'react-icons/si';
import SkillCard from '../../components/card/SkillCard';
import { Box, Button, Container, Grid, Typography } from '@mui/material';


const About = () => {
  return (
    <Box sx={{
      backGroundColor: 'background.paper',
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
      gap:'4rem',
      minHeight:'100vh'
    }}>
      <Head>
        <title>About Opeyemi - portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* <Container sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}}}> */}
  
        <Box sx={{ display:'flex', flexDirection: 'column', alignItems:'center'}}>
          <Typography>
            ABOUT ME
          </Typography>
          <Typography>
          - Hello again-
          </Typography>

          <Typography>
              I am Afolabi Opeyemi Mariam. A product manager and software developer passionate about 
              software products and focused on building innovative solution-centric applications.
              I am focused on frontend technology and currently building products using reactJs and 
              Vanilla JavaScript. I convert Figma files to react App and ensure they have cross-browser 
              compatibility, accessibility, and responsiveness.
          </Typography>
        </Box>
        <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
        {/* <Container sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}}}> */}
          {/* <SkillCard card ={ <FaBeer /> } title='BEER' /> */}
          {/* <SkillCard card ={ <HiOutlineCode /> } title='CODE' /> */}
          <IconContext.Provider value={{color: 'navy', size: 42}}>
          <SkillCard card ={ <AiFillCode  size={50} /> } title='VERSION CONTROL' />
          <SkillCard card ={ <AiOutlineHtml5 size={50} /> } title='HTML' />
          <SkillCard card ={ <FaCss3Alt size={50} /> } title='CSS' />
          <SkillCard card ={ <SiJavascript size={50} /> } title='JAVASCRIPT' />
          <SkillCard card ={ <FaReact size={50} /> } title='REACT' />
          <SkillCard card ={ <TbBrandNextjs size={50} /> } title='NEXT' />
          <SkillCard card ={ <FaVuejs size={50} /> } title='VUE' />
          <SkillCard card ={ <FaSass size={50} /> } title='SASS' />
          <SkillCard card ={ <SiTailwindcss size={50} /> } title='TAILWIND' />
          <SkillCard card ={ <SiStyledcomponents size={50} /> } title='EMOTION STYLE' />
          <SkillCard card ={ <SiTrello size={50} /> } title='TRELLO' />
          </IconContext.Provider>
        </Container>
    </Box>
  )
}

export default About