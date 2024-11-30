"use client"
import React from 'react';
import "../styles/projects.css";
import Heading from"./heading";
import Card from "./card"

const data=[
  {
    id:0,
    title:"Static Interactive Resume..",
    desc:"A project based on HTML and CSS for your customize resume according to your need.",
    img:"/project1.PNG",
    tags:["HTML","CSS","Javascript"]
  },
  {
    id:1,
    title:"Food Ordering Website..",
    desc:"A project based on  Next.js, a perfect solution of your midnight cravings..",
    img:"/project2.png",
    tags:["HTML","CSS","Javascript"]
  },
  {
    id:2,
    title:"Dynamic Resume Builder..",
    desc:"A project based on HTML and CSS for your customize resume according to your need.",
    img:"/project3.jpg",
    tags:["HTML","CSS","Javascript"]
  },
  {
    id:3,
    title:"Simple Calculator..",
    desc:"A project based on Typescript for solving your all basic mathematics problems.",
    img:"/project4.png",
    tags:["Tpescript","Javascript"]
  },
  {
    id:4,
    title:"Animated Portfolio..",
    desc:"A project based on Next.JS for your customize resume according to your need.",
    img:"/project5.PNG",
    tags:["HTML","CSS","Next.Js"]
  },
  {
    id:5,
    title:"Registration Form..",
    desc:"A project based on  pure HTML for your customize form according to your need.",
    img:"/project6.jpg",
    tags:["HTML"]
  },
]
const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el)=>(
          <Card
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags}
          />
        ))}
      </div>

    </div>
  )
}

export default Projects;