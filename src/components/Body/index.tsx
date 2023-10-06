import './index.css';
import React from 'react';
import headshot from '../../assets/Headshot.jpg';
import linkedin from '../../assets/linkedin_icon.png';
import github from '../../assets/github_logo.png';
import resume from '../../assets/resume_logo.png';
import resumepdf from '../../assets/resume.pdf';

const Body = () => {
    return (
        <div className="body">
            <div className="home">
                <div className="wrapper-home">
                    <div className="bio-container">
                        <div className='wrapper-bio'>
                            <p className='title'>Hi, I'm Andrew!</p>
                            <p className="bio">Hi, I'm Andrew! I'm a senior at the University of Wisconsin Madison pursuing a B.S. in Computer Science.
                                In my freetime, I love to cook as much as I can, especially for my family and friends. I also love the outdoor: boating, golfing,
                                hiking and fishing.</p>
                            <p className='bio'>
                                Reach out via email{" "}
                                <a href="mailto:alogan1259@gmail.com" style={{ color: "#3b50ed" }}>alogan1259@gmail.com</a>
                            </p>                        
                            </div>
                    </div>
                    <div className='wrapper-headshot'>
                        <div className="headshot-container">
                            <img className='headshot' src={headshot} alt='Andrew Logan' />
                        </div>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/allogan2/" target="_blank"><img src={linkedin} alt="LinkedIn" className='social-logo linkedin-logo' /></a>
                            <a href="https://github.com/alogan1259" target="_blank"><img src={github} alt="GitHub" className='social-logo github-logo' /></a>
                            <a href={resumepdf} target="_blank"><img src={resume} alt="Resume" className='social-logo resume-logo' /></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="experience">
                <div className='header'>Experience</div>
                <div className='wrapper-experience'>
                    <div className='experience-container-usbank'>
                        <div className='experience-container-usbank-contents'>
                            <p className='date'>Jun 2023 - Aug 2023</p>
                            <p className='position'>Software Engineer Intern</p>
                            <p className='company'>U.S. Bank</p>
                        </div>
                        <div className='experience-container-usbank-description'>
                            <p>
                                I developed a Java Spring Boot API for enterprise evidence data management and orchestrated the migration of data from Azure Blob Storage to ADLS Gen2. Additionally, I enhanced API performance and conducted load testing using Locust, all while collaborating within an Agile Scrum team. We used tools like Jira and Gitlab for CI/CD to streamline our development process.
                            </p>
                        </div>
                    </div>
                    <div className='experience-container-epic'>
                        <div className='experience-container-epic-contents'>
                            <p className='date'>Jun 2022 - May 2023</p>
                            <p className='position'>Information Technology Intern</p>
                            <p className='company'>Epic Systems</p>
                        </div>
                        <div className='experience-container-epic-description'>
                            <p>
                                In my role, I managed hardware for 500+ monthly new hires using internal databases and efficiently imaged 1,000+ devices in just two months, utilizing KVM technology. I also developed a Raspberry Pi-based Python script to streamline device inventory management. Furthermore, I contributed to front-end development using Vue.js, TypeScript, and C#.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className='projects'>
                <div className='header'>Projects</div>
                <div className='wrapper-projects'>
                    <div className='project'>
                        <h3>DegreeMate</h3>
                        <p>November 2022</p>
                        <p>
                            Collaborated on a full-stack web app at CheeseHacks 2022 hackathon, utilizing Vue, TypeScript, Flask, and BS4, for personalized degree path suggestions based on user's transcript.
                            Employed Vue and TypeScript for the dynamic front-end interface, while leveraging Flask and BS4 to compile and manage a database of UW courses and prerequisites.
                        </p>
                    </div>
                    <div className='project'>
                        <h3>Yahoo Finance Trending Tickers API</h3>
                        <p>December 2022 - Present</p>
                        <p>
                            Developed a REST API utilizing BS4, Flask, and SQLite to provide real-time access to Yahoo Finance's Trending Tickers data.
                            Engineered efficient data scraping, transformation, and storage processes, ensuring accurate financial insights in SQLite database.
                            In progress: A daily email digest feature using yagmail and smtplib for timely distribution of financial updates to subscribers.
                        </p>
                    </div>
                    <div className='project'>
                        <h3>MadMapper</h3>
                        <p>December 2022</p>
                        <p>
                            Engineered and deployed a Java CLI application utilizing Dijkstra's algorithm for efficient and customizable travel route selection, optimizing pathfinding.
                        </p>
                    </div>
                    <div className='project'>
                        <h3>BingoCode</h3>
                        <p>September 2021</p>
                        <p>
                            Developed a single-page bingo game application for "WebHacks 2022" Hackathon using React and Google Firebase.
                        </p>
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="footer">
                <div className="footer-text">© 2023 Made by Andrew Logan</div>
            </div>
            
        </div>
    );
}

export default Body;
