'use client';

import { useEffect, useState } from "react";
import styles from './Timeline.module.css';
import { FaAmazon, FaUniversity, FaRocket, FaGamepad, FaVrCardboard, FaJava } from 'react-icons/fa';
import { SiTypescript, SiGo, SiAmazonaws, SiPython, SiUnity, SiCsharp, SiReact } from 'react-icons/si';

export default function Experience() {
    const [mounted, setMounted] = useState(false);

    const experiences = [
        {
            date: "June 2023 - Present",
            company: "Amazon",
            title: "Software Engineer",
            description: "Privacy and Compliance",
            icon: <FaAmazon />,
            techStack: [
                { icon: FaJava, name: "Java" },
                { icon: SiTypescript, name: "Typescript" },
                { icon: SiAmazonaws, name: "AWS" },
                { icon: SiGo, name: "Go" },
                { icon: SiReact, name: "React" },
            ],
            details: [
                "Built and maintained backend services for privacy compliance with distributed systems",
                "Reduced unvalidated personal data findings by 70% through automated detection and service owner validation",
                "Managed AWS infrastructure and supported internal stakeholders including engineers, product managers, and legal teams"
            ]
        },
        {
            date: "June 2022 - August 2022",
            company: "Amazon",
            title: "Software Engineer Intern",
            description: "Delivery Date Improvements",
            icon: <FaAmazon />,
            techStack: [
                { icon: FaJava, name: "Java" },
                { icon: SiAmazonaws, name: "AWS" }
            ],
            details: [
                "Developed a service for evaluating the accuracy of predicted third-party delivery dates"
            ],
            side: "right"
        },
        {
            date: "August 2019 - December 2021",
            company: "Autonomous Systems Group, UT Austin",
            title: "Research Assistant",
            description: "Urban Flight Research",
            icon: <FaUniversity />,
            techStack: [
                { icon: SiPython, name: "Python" },
                { icon: FaJava, name: "Java" }
            ],
            details: [
                "Researched solutions to automated flight in urban environments",
                "Developed scripts for modeling linear temporal logic",
                "Produced data which was published in a paper at NASA Formal Methods 2021"
            ],
            side: "left"
        },
        {
            date: "June 2021 - August 2021",
            company: "NASA",
            title: "Research Intern",
            description: "Urban Air Mobility",
            icon: <FaRocket />,
            techStack: [
                { icon: SiPython, name: "Python" }
            ],
            details: [
                "Researched solutions to automated flight in urban environments",
                "Used a graph algorithm for connecting the transportation hubs",
                "Simulated drone flight using the BOIDs algorithm"
            ],
            side: "right"
        },
        {
            date: "June 2020 - August 2020",
            company: "SAGA Lab, UT Austin",
            title: "Software Engineer Intern",
            description: "AI Education Game Development",
            icon: <FaGamepad />,
            techStack: [
                { icon: SiUnity, name: "Unity" },
                { icon: SiCsharp, name: "C#" }
            ],
            details: [
                "Developed a puzzle game for teaching AI concepts",
                "Coordinated with artists, 3-D modelers and sound designers",
                "Published the game on Steam: Buddi Bot: Your Machine Learning AI Helper With Advanced Neural Networking!"
            ],
            side: "left"
        },
        {
            date: "June 2020 - August 2020",
            company: "Tietronix",
            title: "Software Engineer Intern",
            description: "VR Training Systems",
            icon: <FaVrCardboard />,
            techStack: [
                { icon: SiUnity, name: "Unity" },
                { icon: SiCsharp, name: "C#" }
            ],
            details: [
                "Developed virtual reality games for first responder training"
            ],
            side: "right"
        },
        {
            date: "June 2019 - August 2019",
            company: "Tietronix",
            title: "Software Engineer Intern",
            description: "3D Visualization",
            icon: <FaVrCardboard />,
            techStack: [
                { icon: SiUnity, name: "Unity" },
                { icon: SiCsharp, name: "C#" }
            ],
            details: [
                "Developed a 3-D model viewer for a large engine manufacturing company"
            ],
            side: "left"
        }
    ];

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            const items = document.querySelectorAll(`.${styles['timeline-item']}`);
            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    item.style.opacity = 1;
                    item.style.transform = "translateY(0)";
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        setTimeout(handleScroll, 100);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <div className={styles.timelineContainer}>
            <div className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>Experience</h1>
                <p className={styles.sectionSubtitle}>
                    A journey through my professional experiences in software engineering, research, and development.
                </p>
            </div>
            <div className={styles.timeline}>
                <div className={styles['timeline-line']}></div>
                {experiences.map((experience, index) => (
                    <div 
                        key={index} 
                        className={`${styles['timeline-item']} ${styles[experience.side || (index % 2 === 0 ? 'left' : 'right')]}`}
                    >
                        <div className={styles.content}>
                            <div className={styles.date}>{experience.date}</div>
                            <div className={styles.companyHeader}>
                                <div className={styles.companyIcon}>{experience.icon}</div>
                                <h3 className={styles.company}>{experience.company}</h3>
                            </div>
                            <h4 className={styles.title}>{experience.title}</h4>
                            <p className={styles.description}>{experience.description}</p>
                            <div className={styles.techStack}>
                                {experience.techStack.map((tech, techIndex) => (
                                    <div key={techIndex} className={styles.techItem}>
                                        {tech.icon && <tech.icon className={styles.techIcon} />}
                                        <span className={styles.techName}>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.detailsPanel}>
                            <div className={styles.detailsTitle}>Key Achievements</div>
                            <ul className={styles.detailsList}>
                                {(experience.details || [
                                    "Led key technical initiatives and projects",
                                    "Collaborated with cross-functional teams",
                                    "Developed and maintained critical systems",
                                    "Contributed to team success and growth"
                                ]).map((detail, index) => (
                                    <li key={index} className={styles.detailsItem}>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
