"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const cardData = [
  {
    title: "Privee",
    description: "Developed a privacy-focused chat app using HTML, CSS, JavaScript, Node.js with Express, and Socket.io, ensuring no data storage for enhanced user confidentiality.",
    imageUrl: "/chat.png",
    link: "https://privee-sloi.onrender.com/",
  },
  {
    title: "Change Detection due to Human Activities",
    description: "Contributed to a deep learning-based change detection project, comparing images taken at different times to identify differences using black-and-white spectrum analysis.",
    imageUrl: "/ml.png",
    link: "https://github.com/roltrox7/change_detection_using_rs_images",
  },
  {
    title: "Rock Paper Scissor",
    description: "Developed a Rock-Paper-Scissors game using HTML, CSS, and JavaScript, featuring interactive gameplay against the computer and showcasing basic game logic implementation.",
    imageUrl: "/rps.png",
    link: "https://me21jarus.github.io/Rock-Paper-Scissor-Game/",
  },
  {
    title: "Volume Gesture",
    description: "Created a Volume Gesture system using machine learning, allowing users to adjust system volume through hand gestures involving the thumb and index fingers.",
    imageUrl: "/volume.png",
    link: "https://github.com/me21jarus/Volume-Gesture",
  },
  {
    title: "Netflix Clone",
    description: "Built a Netflix clone using HTML and CSS, replicating the layout and style of the popular streaming service to showcase proficiency in front-end design and responsive layout.",
    imageUrl: "/netflix.png",
    link: "https://me21jarus.github.io/Clone/",
  },
  {
    title: "Tic Tac Toe",
    description: "Developed a Tic Tac Toe game using HTML, CSS, and JavaScript, featuring interactive gameplay against the computer and demonstrating basic game logic and AI implementation.",
    imageUrl: "/ttt.png",
    link: "https://me21jarus.github.io/Tic-Tac-Toe-Game/",
  },
  
];

export function MultiCardDemo() {
  return (
    <div className="grid grid-cols-3 justify-evenly ">
      {cardData.map((card, index) => (
        <div className="w-80" key={index}>
          <CardContainer>
            <CardBody className="bg-violet-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem className="text-xl font-bold text-black dark:text-white">
                {card.title}
              </CardItem>
              <CardItem className="text-white-400 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {card.description}
              </CardItem>
              <CardItem className="w-full mt-4">
                <Image
                  src={card.imageUrl}
                  height="300"
                  width="300"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center">
                <CardItem
                  as={Link}
                  href={card.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View →
                
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      ))}
    </div>
  );
}
