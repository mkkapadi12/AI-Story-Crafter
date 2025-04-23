import React from "react";
import { motion } from "framer-motion";

const Loading = ({ loadingText }) => {
  const loadingVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <motion.div
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "#3498db",
        }}
        variants={loadingVariants}
        animate="animate"
      />
      <p style={{ marginTop: 20, fontSize: 18, color: "#555" }}>
        {loadingText}
      </p>
    </div>
  );
};

export default Loading;
