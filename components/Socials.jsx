import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import socials from '../styles/Home.module.css';
// import Divider from '@mui/material/Divider';
import React, {useEffect} from "react";
import Link from '@mui/material/Link';
import 'aos/dist/aos.css';
import Aos from 'aos';



const Socials = () => {
  useEffect(() => {
		Aos.init({
			duration: 2000
		  });
	}, [])
  return (
    <div className={socials.socials_container}>
      
        <Link 	data-aos='flip-right' sx={{ marginX:'10px'}} href='https://github.com/mariamopeyemi' className={socials.socials_img} target="_blank" rel="noreferrer"><GitHubIcon /></Link>
      
      
        <Link 	data-aos='flip-right' sx={{ marginX:'10px'}} href="mailto:opeyemi.dev@gmail.com" className={socials.socials_img} target="_blank" rel="noreferrer"><AlternateEmailIcon /></Link>
        {/* <Link sx={{ marginX:'10px'}} href='https://instagram.com/mariam_afox' className={socials.socials_img} target="_blank" rel="noreferrer"><InstagramIcon /></Link> */}
      
      
        <Link 	data-aos='flip-right' sx={{ marginX:'10px'}} href='https://twitter.com/mariam_afox' className={socials.socials_img} target="_blank" rel="noreferrer"><TwitterIcon  /></Link>
      
        {/* <Link sx={{ marginX:'10px'}}  href='/' className={socials.socials_img} target="_blank" rel="noreferrer"><img src={call} alt='socials' width='25px' height='25px' /></Link> */}
      
      
        <Link 	data-aos='flip-right' sx={{ marginX:'10px'}} href='https://www.linkedin.com/in/opeyemi-m-afolabi-b590a5155/' className={socials.socials_img} target="_blank" rel="noreferrer"><LinkedInIcon /> </Link>
        
  {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
      <hr className={socials.socials_hr} />
    </div>
  )
}

export default Socials