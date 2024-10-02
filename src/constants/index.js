import morworkImg from '../media/morwork.jpg'
import restaurantImg from '../media/restaurant.jpg'
import carImg from '../media/car.jpg'
import tictactoeImg from '../media/tictactoe.jpg'

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
    {id: 2, name: 'Github', icon: 'mdi:github', link: 'https://github.com/amineedarkaoui'},
    {id: 3, name: 'Email', icon: 'ic:baseline-email', link: 'mailto:contact@amineedarkaoui.com'},
    {id: 4, name: 'X', icon: 'prime:twitter', link: 'https://x.com/amine__ed'},
]

export const projects = {
    title: "PROJECTS",
    elements: [
        {
            id: 0, 
            title: "Morwork",
            description: "Morwork is a professional social media application where users can post, interact with each other and apply for jobs. The app provides a platform where like-minded individuals share work, experties and experiences.",
            image: morworkImg,
            technologies: ["React JS", "Spring boot"],
            code: "https://github.com/amineedarkaoui/Morwork-app",
            link: "",
        },
        {
            id: 1, 
            title: "Restaurant ordering app",
            description: "A restaurant ordering web application, where cashiers can place orders and manage menu items. The app provides a wide variety of metrics and graphs to help track and visualize different aspects of the business such as sales, trends and performance of each item of the menu.",
            image: restaurantImg,
            technologies: ["React JS", "Spring boot", "Tailwind CSS"],
            code: "https://github.com/amineedarkaoui/ordering-app",
            link: "",
        },
        {
            id: 2, 
            title: "Regrent",
            description: "Regrent is a car rental website associated with an admin's dashboard to manage the available cars and keep track of customers reservations.",
            image: carImg,
            technologies: ["Django", "HTML", "CSS"],
            code: "https://github.com/amineedarkaoui/car-rental-app",
            link: "",
        },
        {
            id: 3, 
            title: "Tictactoe",
            description: "Simply a tictactoe game with 2 players and a score system.",
            image: tictactoeImg,
            technologies: ["PyQt", "Python"],
            code: "https://github.com/amineedarkaoui/tictactoe",
            link: "",
        },
    ]
}

export const experiences = {
    title: "EXPERIENCES",
    elements: [
        {
            id: 0, 
            title: "Web Development Intern",
            company: "Linkstom group",
            description: "At Linkstom group, I've had the opportunity to build the backend and frontend of a restaurant ordering application, which helps managers track sales using the data visualization tools provided by the dashboard of the app.",
            technologies: ["React JS", "Spring boot", "Tailwind CSS"],
            link: "https://linkstom.com/en",
            startDate: "APR",
            endDate: "JUN",
            year: "2024"
        },
        {
            id: 1, 
            title: "Web Development Intern",
            company: "Ministry of agriculture",
            description: "During my internship at the Ministry of agriculture, I was tasked with developing a web application designed to manage collaborative projects, and help track each project's tasks and collaborators.",
            technologies: ["Django", "HTML", "CSS"],
            link: "https://www.agriculture.gov.ma/",
            startDate: "JULY",
            endDate: "SEP",
            year: "2023"
        },
    ]
}