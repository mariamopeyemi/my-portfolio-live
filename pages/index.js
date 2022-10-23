import { Box, Button, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import Projects from './projects';
import About from './about';
import Contact from './contact';
import Socials from '../components/Socials';
import Intro from './about/Intro';


export default function Home() {
  return (
    <Box sx={{
      backGroundColor: 'background.paper',
      // paddingX: '4rem'
    }}>
      <Head>
        <title>Opeyemi portfolio - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Intro />
        < About />
        <Projects />
        <Contact />
        <Socials />
      </main>
      
      <footer className={styles.footer}>
      <Typography> &#169; {" "}{new Date().getFullYear()} Dev Opeyemi</Typography>
      </footer>
    </Box>
  )
}
