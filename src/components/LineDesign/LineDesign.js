import React, { useEffect } from "react";

function LineDesign() {
  useEffect(() => {
    const line = document.querySelector(".animated-line");
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"]; // Add more colors if needed
    setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      line.style.setProperty("--line-color", randomColor);
    }, 3000); // Change color every 3 seconds (same duration as animation)
  }, []);

  return (
    <div className="animated-line-container">
      <div className="animated-line"></div>
    </div>
  );
}

export default LineDesign;
