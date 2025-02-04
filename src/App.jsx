import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="main">
      <motion.div
        className="animate-div"
        animate={{ x: 1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.h1 whileTap={{ color: "red" }}>Hello</motion.h1>
      </motion.div>
      <motion.div
        className="animate-div"
        animate={{ x: 1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.h1 whileTap={{ color: "red" }}>It&apos;s Me</motion.h1>
      </motion.div>
      <motion.div
        className="animate-div"
        animate={{ x: 1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.h1 whileTap={{ color: "red" }}>Eran</motion.h1>
      </motion.div>
    </div>
  );
};

export default App;
