import React, { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  const sendMsg = () => {
    if (!input.trim()) return;

    setChat([...chat, { user: true, text: input }]);
    setInput("");

    setTimeout(() => {
      setChat((c) => [...c, { user: false, text: "AI reply coming soon..." }]);
    }, 500);
  };

  return (
    <section id="chatbot" className="py-24 px-8">
      <h2 className="text-4xl font-bold text-center mb-6">AI Chatbot</h2>

      <div className="max-w-xl mx-auto bg-white dark:bg-black/40 p-6 rounded-xl shadow-lg border">
        <div className="h-64 overflow-y-auto p-2 border rounded">
          {chat.map((m, i) => (
            <p
              key={i}
              className={`my-2 p-2 rounded-lg ${
                m.user ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {m.text}
            </p>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          <input
            className="flex-1 border p-2 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={sendMsg}
            className="bg-secondary text-white px-4 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}



