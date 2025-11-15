export default function Skills() {
const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git","C","C++","Node.js","MongoDB","GitHub","GitHubCopilot","UI","UX","Figma","Generative AI","AI","DSA in C++","Web3","entrepreneurship"];


return (
<div className="py-24 px-6 text-center">
<h2 className="text-4xl font-bold mb-12">Skills</h2>


<div className="flex flex-wrap justify-center gap-6">
{skills.map((s, i) => (
<span
key={i}
className="px-5 py-2 glass rounded-full text-lg font-semibold hover:scale-110 transition"
>
{s}
</span>
))}
</div>
</div>
);
}
