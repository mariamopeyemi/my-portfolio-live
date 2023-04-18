// import * as React from 'react';
import React, {useEffect} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typography from '@mui/material/Typography';
    
    const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        •
      </Box>
    );
    
    // const card = (
    //   <React.Fragment>
    //     <CardContent>
    //       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //       <Typography variant="h5" component="div">
    //         be{bull}nev{bull}o{bull}lent
    //       </Typography>
    //       <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //         adjective
    //       </Typography>
    //       <Typography variant="body2">
    //         well meaning and kindly.
    //         <br />
    //         {'"a benevolent smile"'}
    //       </Typography>
    //     </CardContent>
        
    //   </React.Fragment>
    // );
    // @499 scattered display
    export default function SkillCard({card, title}) {

      useEffect(() => {
        Aos.init({
          duration: 2000
          });
      }, [])
      return (
        <Box 	data-aos='flip-right' sx={{ minWidth: {md: 150 }, margin: 0.5}}>
          <Card variant="outlined">
          {/* <Card variant="outlined" sx={{ backgroundColor:'purple'}}> */}
            <CardContent sx={{ display: 'flex', margin: 'auto', justifyContent: 'center', height: 80 }}>
                {card}
            </CardContent>
            <Typography sx={{ fontSize:'12px' , display: 'flex', margin: 'auto', justifyContent: 'center', }} color="text.secondary">
               {title}
            </Typography>
          </Card>
        </Box>
      );
    }
    