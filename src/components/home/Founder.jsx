import React from "react";
import { motion } from "framer-motion";
import me from "../../asserts/sk.png";
function Founder() {
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
    <sectioon ClassName="founder">
      <motion.div {...op}>
        <img src={me} alt="founder" height={200} width={200} />
        <h3>Suraj Prasad</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          reiciendis et aliquid voluptates magni saepe facere magnam nam cum ea!
        </p>
      </motion.div>
    </sectioon>
  );
}

export default Founder;
