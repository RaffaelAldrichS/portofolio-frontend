import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raffael Aldrich Setiawan",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Mahasiswa D3 Teknik Informatika yang fokus pada pengembangan Back-End dan API dengan Laravel.",
  summary:
    "Berpengalaman dalam merancang dan mengembangkan RESTful API menggunakan Laravel serta terampil dalamteknologi Front-End.Memiliki kemampuan leadership dan kerja tim yang terbukti melalui pengalaman memimpin organisasi dankeberhasilan dalam proyek pengembangan sistem.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon_path: "/atomic.png" },
    { name: "Next.js", icon_path: "/atomic.png" },
    { name: "Node.js", icon_path: "/atomic.png" },
    { name: "Vue.js", icon_path: "/atomic.png" },
    { name: "Typescript", icon_path: "/atomic.png" },
    { name: "Laravel", icon_path: "/atomic.png" },
    { name: "Java", icon_path: "/atomic.png" },
    { name: "MySQL", icon_path: "/atomic.png" },
    { name: "Filmora", icon_path: "/atomic.png" },
    { name: "Capcut", icon_path: "/atomic.png" },
    { name: "Adobe Photoshop", icon_path: "/atomic.png" },
    { name: "Canva", icon_path: "/atomic.png" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "raffaelaldrichsetiawan@gmail.com",
    tel: "081227772844",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RaffaelAldrichS",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raffael-aldrich-setiawan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/r.aldrich_/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Prodi D3 Teknik Informatika UNS",
      href: "https://v3423085.mhs.d3tiuns.com/",
      badges: [],
      location: "Remote",
      title: "BackEnd Developer",
      logoUrl: "/atomic.png",
      start: "Februari 2025",
      end: "Juli 2025",
      description:
        "Merancang dan mengimplementasikan skema database (MySQL) untuk mengelola datamahasiswa,dosen, dan tugas akhir. Mengembangkan RESTful API menggunakan Laravel untuk menyediakan endpoint yangdibutuhkanoleh tim Front-End. Membangun business logic aplikasi, termasuk alur proses pengajuan proposal, bimbingan, danpengajuan tugas akhir. Mengimplementasikan sistem autentikasi dan otorisasi untuk membedakan hak aksespengguna(mahasiswa, dosen, admin).",
    },
  ],
  education: [
    {
      school: "Universitas Sebelas Maret",
      href: "https://uns.ac.id/",
      degree: "D3 TEKNIK INFORMATIKA",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "Saat Ini",
    },
    {
      school: "SMK Negeri 2 Surakarta",
      href: "https://www.instagram.com/smkn2surakarta/",
      degree: "Teknik Komputer dan Jaringan",
      logoUrl: "/buildspace.jpg",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
