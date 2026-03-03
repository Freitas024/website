import { type ReactNode } from "react";
import { MessageCircle, Linkedin, Github, Mail } from "lucide-react";

export interface Contact {
    name: string;
    value: string;
    link: string;
    icon: ReactNode;
    colorClass: string;
}

export const contacts: Contact[] = [
    {
        name: "WhatsApp",
        value: "+55 (84) 99482-1342",
        link: "https://wa.me/5584994821342",
        icon: <MessageCircle size={20} />,
        colorClass: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20 group-hover:bg-emerald-400/20 group-hover:border-emerald-400/30",
    },
    {
        name: "LinkedIn",
        value: "/vinicius024",
        link: "https://www.linkedin.com/in/vinicius024/",
        icon: <Linkedin size={20} />,
        colorClass: "text-blue-400 bg-blue-400/10 border-blue-400/20 group-hover:bg-blue-400/20 group-hover:border-blue-400/30",
    },
    {
        name: "GitHub",
        value: "/Freitas024",
        link: "https://github.com/Freitas024",
        icon: <Github size={20} />,
        colorClass: "text-slate-300 bg-slate-300/10 border-slate-300/20 group-hover:bg-slate-300/20 group-hover:border-slate-300/30",
    },
    {
        name: "Email",
        value: "viniciusfreitassilva1999@gmail.com",
        link: "mailto:viniciusfreitassilva1999@gmail.com",
        icon: <Mail size={20} />,
        colorClass: "text-[#a78bfa] bg-[#7c3aed]/10 border-[#7c3aed]/20 group-hover:bg-[#7c3aed]/20 group-hover:border-[#7c3aed]/30",
    },
];
