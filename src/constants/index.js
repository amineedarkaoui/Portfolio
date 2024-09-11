import photo from '../media/website-mockup-psd.jpg'

export const headerElements = [
    {id: 0, name: "About", scrollElement: 'about'},
    {id: 1, name: "Projects", scrollElement: 'project'},
    {id: 2, name: "Experiences", scrollElement: 'experience'}
]

export const aboutSection = {
    name: "Amine Edarkaoui",
    title: "Software Engineering Student",
    text: "I utilize modern technologies to build robust software and pixel-perfect interfaces.",
}

export const icons = [
    {id: 0, name: 'Instagram', icon: 'mdi:instagram', link: 'https://www.instagram.com/edarkamine/'},
    {id: 1, name: 'LinkedIn', icon: 'mdi:linkedin', link: 'https://www.linkedin.com/in/amineedarkaoui/'},
    {id: 2, name: 'Github', icon: 'mdi:github', link: 'https://github.com/amminnee'},
    {id: 3, name: 'Email', icon: 'ic:baseline-email', link: 'mailto:contact@amineedarkaoui.com'},
    {id: 4, name: 'X', icon: 'prime:twitter', link: 'https://x.com/amine__ed'},
]

export const projects = {
    title: "PROJECTS",
    elements: [
        {
            id: 0, 
            title: "AI chat bot",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly belieas necessary, making this the first true ",
            image: photo,
            technologies: ["React JS", "Spring", "Mongo DB"],
            code: "https://github.com/amminnee/google-forms-api",
            link: "",
        },
        {
            id: 1, 
            title: "AI chat bot",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly belieas necessary, making this the first true ",
            image: photo,
            technologies: ["React JS", "Spring", "Mongo DB"],
            code: "https://github.com/amminnee/google-forms-api",
            link: "",
        },
    ]
}

export const experiences = {
    title: "EXPERIENCES",
    elements: [
        {
            id: 0, 
            title: "Web development Intern",
            company: "Linkstom Group",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly belieas necessary, making this the first true ",
            technologies: ["React JS", "Spring", "Mongo DB"],
            link: "https://linkstom.com/en",
            startDate: "APR",
            endDate: "JUN",
            year: "2024"
        },
        {
            id: 1, 
            title: "Web development Intern",
            company: "Ministry of agriculture",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly belieas necessary, making this the first true ",
            technologies: ["React JS", "Spring", "Mongo DB"],
            link: "https://www.agriculture.gov.ma/",
            startDate: "JULY",
            endDate: "SEP",
            year: "2023"
        },
        {
            id: 2, 
            title: "Web development Intern",
            company: "Ministry of agriculture",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly belieas necessary, making this the first true ",
            technologies: ["React JS", "Spring", "Mongo DB", "HTML", "CSS"],
            link: "https://www.agriculture.gov.ma/",
            startDate: "JULY",
            endDate: "SEP",
            year: "2023"
        },
    ]
}