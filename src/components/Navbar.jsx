import { useState, useEffect } from "react";


export default function Navbar() {
const [open, setOpen] = useState(false);


return (
<nav className="fixed top-0 left-0 w-full glass px-6 py-4 flex justify-between items-center z-50">
<h1 className="text-2xl font-bold">Sucheta</h1>


<button className="md:hidden" onClick={() => setOpen(!open)}>
☰
</button>


<ul className={`md:flex gap-8 font-semibold ${open ? "block" : "hidden"}`}>
<li><a href="#home">Home</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#skills">Skills</a></li>
</ul>
</nav>
);
}



