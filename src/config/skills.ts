export interface Skill {
    name: string;
    category: string;
}

export const skills: Skill[] = [
    { name: "TypeScript", category: "Languages" },
    { name: "Node.js", category: "Backend" },
    { name: "React / Next.js", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "n8n", category: "Automation" },
    { name: "APIs REST", category: "Integration" },
    { name: "Docker", category: "DevOps" },
];
