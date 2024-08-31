import { motion } from "framer-motion";

import { styles } from "./Style";

const StarWrapper = (Component, idName) =>
  function HOC() {
     const staggerContainer = (staggerChildren, delayChildren) => {
        return {
          hidden: {},
          show: {
            transition: {
              staggerChildren: staggerChildren,
              delayChildren: delayChildren || 0,
            },
          },
        };
      };
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-16 px-6 max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;