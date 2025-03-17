'use client';

import { useEffect, useState } from "react";
import styles from './Timeline.module.css';
import { FaAmazon, FaUniversity, FaRocket, FaGamepad, FaVrCardboard, FaJava } from 'react-icons/fa';
import { SiTypescript, SiGo, SiAmazonaws, SiPython, SiUnity, SiCsharp } from 'react-icons/si';

export default function Experience() {
    const [mounted, setMounted] = useState(false);

    const experiences = [
        {
            date: "2023 - Present",
            company: "Amazon",
            title: "Software Engineer",
            description: "Kale, CDO Privacy",
            icon: FaAmazon,
            techStack: [
                { icon: SiGo, name: "Go" },
                { icon: SiTypescript, name: "TypeScript" },
                { icon: FaJava, name: "Java" },
                { icon: SiAmazonaws, name: "AWS" }
            ],
            side: "left"
        },
        {
            date: "Summer 2022",
            company: "Amazon",
            title: "Software Engineer Intern",
            description: "Delivery Date Improvements",
            icon: FaAmazon,
            techStack: [
                { icon: FaJava, name: "Java" },
                { icon: SiAmazonaws, name: "AWS" }
            ],
            side: "right"
        },
        {
            date: "Fall 2019 - Summer 2022",
            company: "Autonomous Systems Group, UT Austin",
            title: "Research Assistant",
            description: "Autonomous Vehicle Planner",
            icon: FaUniversity,
            techStack: [
                { icon: SiPython, name: "Python" },
                { icon: FaJava, name: "Java" },
            ],
            side: "left"
        },
        {
            date: "Summer 2021",
            company: "NASA",
            title: "Autonomous Vehicle Intern",
            description: "Autonomous Vehicle Simulations",
            icon: FaRocket,
            techStack: [
                { icon: SiPython, name: "Python" }
            ],
            side: "right"
        },
        {
            date: "Summer 2020",
            company: "SAGA Lab, UT Austin",
            title: "Software Engineer Intern",
            description: "Game Developer",
            icon: FaGamepad,
            techStack: [
                { icon: SiUnity, name: "Unity" },
                { icon: SiCsharp, name: "C#" }
            ],
            side: "left"
        },
        {
            date: "Summer 2020",
            company: "Tietronix",
            title: "AR/VR Developer Intern",
            description: "VR EMS Trainings",
            icon: FaVrCardboard,
            techStack: [
                { icon: SiUnity, name: "Unity" },
                { icon: SiCsharp, name: "C#" }
            ],
            side: "right"
        },
        {
            date: "Summer 2019",
            company: "Tietronix",
            title: "Software Engineer Intern",
            description: "3D Model Viewer",
            icon: FaVrCardboard,
            techStack: [
                { icon: SiUnity, name: "Unity" },
                { icon: SiCsharp, name: "C#" }
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
                        className={`${styles['timeline-item']} ${styles[experience.side]}`}
                    >
                        <div className={styles.content}>
                            <div className={styles.date}>{experience.date}</div>
                            <div className={styles.companyHeader}>
                                {experience.icon && <experience.icon className={styles.companyIcon} />}
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
                    </div>
                ))}
            </div>
        </div>
    );
}
