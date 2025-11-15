import React, { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    document.addEventListener("mousemove", (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    });
  }, []);

  return (
    <div
      id="cursor-dot"
      className="w-4 h-4 bg-primary rounded-full fixed top-0 left-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
    ></div>
  );
}

