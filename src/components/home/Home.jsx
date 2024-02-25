import React from "react";
import { motion } from "framer-motion";

function Home() {
  const op = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="home">
      <div>
        <motion.h1 {...op}>B.Tech </motion.h1>
        <motion.p {...op} transition={{delay:0.2,}}>Give Yourself a Way</motion.p>
      </div>

      <motion.a href="#menu"
         initial={{
          y:"-100%",
          opacity:0,
         }} whileInView={{
          y:"0%",
          opacity:1,
         }}

      >Explore Menu</motion.a>
    </section>
  );
}

export default Home;
