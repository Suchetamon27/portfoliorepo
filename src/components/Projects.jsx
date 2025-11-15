import { motion } from "framer-motion";


export default function Projects() {
const list = [
{ title: "Portfolio Website", desc: "Built using React + Tailwind" },
{ title: "Hotel Booking Website", desc: "Modern UI components" },
{ title: "WBJEE Rank & College Predictor Website",desc: "Accurate rank predictor analysis for student assistance"},
];


return (
<div className="py-24 px-6 text-center">
<h2 className="text-4xl font-bold mb-12">Projects</h2>


<div className="grid md:grid-cols-3 gap-10">
{list.map((p, i) => (
<motion.div
key={i}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="glass p-6 rounded-xl hover:scale-105 transition"
>
<h3 className="text-2xl font-bold mb-2">{p.title}</h3>
<p>{p.desc}</p>
</motion.div>
))}
</div>
</div>
);
}


