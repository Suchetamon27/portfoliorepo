import React from "react";

export default function ThemePicker() {
  function toggleTheme() {
    document.body.classList.toggle("dark");
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed left-4 bottom-4 bg-primary text-white px-4 py-2 rounded-lg"
    >
      Toggle Theme
    </button>
  );
}
