import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';

import Link from '@mui/material/Link';
const Intro = () => {
  return (
    <Box sx={{
      backGroundColor: 'background.paper',
      // paddingTop:'4rem',
      display:'flex',
      // justifyContent:'center',
      // alignContent: 'center',
      alignItems: 'center',
      minHeight:'100vh'
    }}>
      <Head>
        <title>Intro Opeyemi - portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Container sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, 
    // justifyContent:'center', alignContent: 'center',
      }}>
     <Box sx={{flex:'1'}}>Opeyemi Picture</Box>
     <Box sx={{flex:'1', display:'flex', flexDirection: 'column', alignItems: 'center'}}>
     <Typography>
        Hello World 👋, I am Afolabi Opeyemi,
      </Typography>
      <Typography>
        a Front-end Developer from Lagos, Nigeria.
      </Typography>
      <Typography sx={{display: 'flex', alignItems:'center', textAlign: {xs: 'none', md: 'center'} }}>
        goal and growth minded who constantly seeks out innovative scalable solutions
        to everyday problems.
      </Typography>
      <Box sx={{marginY:'1rem',display:'flex', gap:'2rem',  }}>
        <Link target="_blank" rel="noreferrer noopener" href='/doc/opeyemi.pdf'
            sx={{
              textDecoration: 'none',
              color: 'white',
             }}>
          <Button 
            variant='contained'
            color='secondary'
            >
            Resume
          </Button>
        </Link>
          <Button 
           variant='contained'
           color='secondary'
           href="mailto:opeyemi.dev@gmail.com"
           >Contact</Button>
      </Box>
     </Box>
    </Container>
    </Box>
  )
}

export default Intro;