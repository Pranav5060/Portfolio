import React from 'react';
import Navbar from "./Navbar";
import SkillsData from "./skills";
import "./NavbarStyles.css";
import "./Style.css";
import profile from "./Picture1.jpg";
import {FaHeart} from 'react-icons/fa';
import Button from '@mui/material/Button';
function Home() {
  return (
    <div id='Home'>
      <div class="gradient-border bg-white shadow-custom-light dark:shadow-custom-dark lg:col-span-3 rounded-2xl dark:bg-black-300 dark:text-white">
    <center>
        <img className='pic' src={profile}/>
        <div className='about'>
        <h1>I'm Pranav Gupta</h1>
        </div>
        <br/>
        <h2>I <FaHeart style={{color: "#f00a0a",}}/> Building things</h2>
        <br/>
        <h1>Skills</h1>
        <br/>
        <div className='icons'>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width={"50px"}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width={"50px"} />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" width={"50px"} />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={"50px"}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" width={"50px"} />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" width={"50px"} />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width={"50px"} />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={"50px"}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg" width={"50px"}/>
        </div>
        </center>
        </div>
        <div id='education'>
          <center><h1>Educational Details</h1>
          <br></br>
          <h3>B.Tech Computer Science and Engineering</h3>
          <h3>Vellore Institute of Technology Bhopal ( 2020-2024 )</h3>
          <br></br>
          <Button variant="contained" href='https://drive.google.com/file/d/1JUQx0B0qo6xv8AdoU3HfSV6wNgNTQ2Z8/view?usp=drive_link'>Resume</Button>
          <Button variant='contained' style={{marginLeft:"10px"}} href='https://github.com/Pranav5060'>GitHub</Button>
          <SkillsData/>
          </center>
        </div>
    </div>
  )
}

export default Home;