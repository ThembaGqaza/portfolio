import React from 'react'
import { BsClipboardData, BsAward } from "react-icons/bs"; // Research, MSc
import { GiHealthNormal } from "react-icons/gi"; // Junior Data Scientist (health-related work)
import { FaHandsHelping, FaLaptopCode } from "react-icons/fa"; // Data Scientist (collaboration, development)
import { BiBrain } from "react-icons/bi"; // Senior Data Scientist (leadership, advanced solutions)

const homeConfig = {

    greeting:
        <h1 className="heading" style={{ color: '#555555' }}>
            From Galaxies to Algorithms, charting new data frontiers
            <br />
            meet <strong className="main-name" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007acc' }}>Themba Gqaza</strong>
        </h1>,
    titles: [
        "A Master of Science in Astrophysics",
        "A Senior Data Scientist",
        "A Machine Learning Engineer",
        "A Natural Language Processing Specialist",
    ],
    about: {
        start: "I develop scalable data solutions to solve critical business challenges, leveraging my expertise in machine learning, " +
            "natural language processing, data analysis, and statistics. By aligning data insights with business goals," + 
            "I drive data-informed decision making, optimise operational efficiency, and deliver measurable business outcomes.",
        exit: "Beyond my technical expertise, I take pride in mentoring junior data scientists and I am driven by a passion for " + 
            "using data to create positive change, particularly in the social impact space.",
    },
    workTimeline: [
        {
            id: "work-5",
            title: "Senior Data Scientist",
            company: "Reach Digital Health",
            companyLink: "https://www.reachdigitalhealth.org/",
            location: "South Africa (Remote)", 
            description: (
                <>
                  <ul>
                    <li>Led the development of a hybrid content recommendation engine, delivering personalised interventions to enhance user engagement.</li>
                    <li>Established a cross-functional quality assurance framework, improving data accuracy and streamlining processes across departments.</li>
                    <li>Advised executives and national health officials on leveraging data-driven insights through dynamic dashboards for informed decision-making.</li>
                    <li>Mentored junior data scientists, ensuring adherence to best practices and delivering high-quality, scalable data solutions.</li>
                  </ul>
                </>
              ),                                    
            date: "Jun 2023 - Present",
            icon: <BiBrain />, // Represents advanced analytics, leadership, intelligence
            tags: ["Python", "AWS", "GCP", "Scikit-learn", "NLTK", "Transformers", "Tableau"]
        },
        {
            id: "work-4",
            title: "Data Scientist",
            company: "Reach Digital Health",
            companyLink: "https://www.reachdigitalhealth.org/",
            location: "South Africa (Remote)", 
            description: (
                <>
                  <ul>
                    <li>Developed machine learning models for healthcare chatbots, including a content search engine that significantly improved user engagement in public health initiatives.</li>
                    <li>Streamlined reporting processes by leveraging cloud storage, automating data aggregation, and scheduling data retrieval for dynamic, real-time dashboards.</li>
                    <li>Collaborated with cross-functional teams to implement data solutions for risk assessments, content personalisation, and health facility performance, enabling data-driven decision-making for health officials.</li>
                  </ul>
                </>
              ),                  
            date: "Feb 2022 - May 2023",
            icon: <FaHandsHelping />, // Symbolises collaboration and community-focused work
            tags: ["Python", "AWS", "Tableau", "Redash", "RapidPro", "Turn"]
        },
        {
            id: "work-3",
            title: "Software Developer",
            company: "Eighty20",
            companyLink: "https://www.eighty20.co.za/consulting/",
            location: "South Africa", 
            description: 
            <>
              <ul>
                <li>Contributed to developing a loyalty rewards application for a major South African bank, driving customer satisfaction. </li> 
                <li>Implemented RFM analysis to personalise offers, increasing interactions with affluent users and boosting programme success.</li>
              </ul>
            </>,
            date: "Feb 2021 - Jan 2022",
            icon: <FaLaptopCode />, // Represents coding and software development
            tags: ["Python", "Flask", "SQLAlchemy", "Airflow", "Power BI", ]
        },
        {
            id: "work-2",
            title: "Junior Data Scientist",
            company: "Reach Digital Health",
            companyLink: "https://www.reachdigitalhealth.org/",
            location: "South Africa", 
            description: (
                <>
                  <ul>
                    <li>Executed tailored quality of care surveys, managing sampling, stratification, data collection, analysis, and report preparation.</li>
                    <li>Developed Python scripts to automate survey execution, enabling scheduled runs and streamlining the survey process.</li>
                    <li>Enhanced reporting by transitioning from static to dynamic and interactive dashboarding tools such as Tableau.</li>
                  </ul>
                </>
              ),
            date: "Aug 2018 - Jan 2021",
            icon: <GiHealthNormal />, // Represents healthcare focus
            tags: ["Python", "R", "Postgres", "Rasa", "Tableau"]
        },
        {
            id: "work-1",
            title: "Researcher",
            company: "Osservatorio Astronomico Cagliari",
            companyLink: "https://www.oa-cagliari.inaf.it/index.php?set_language=1",
            location: "Italy", 
            description: (
                <>
                  <ul>
                    <li>Collaborated with a potential PhD advisor at Cagliari Observatory, Italy, to explore astrophysics research.</li>
                    <li>Reduced radio interferometric data to identify Fornax Cluster counterparts and developed a multi-wavelength database.</li>
                    <li>Consolidated cluster data from multiple surveys into a unified repository for streamlined access.</li>
                  </ul>
                </>
              ),
            date: "April - June 2018",
            icon: <BsClipboardData />, // Represents research and data work
            tags: ["Research", "Data-reduction", "Fornax-cluster", "Radio Astronomy", "Python"]
        },
        {
            id: "work-0",
            title: "MSc in Astrophysics",
            company: "University of Cape Town",
            companyLink: "https://science.uct.ac.za/department-astronomy/students/msc-graduates",
            location: "South Africa",
            description: (
              <>
                <ul>
                  <li>Conducted a thesis on optimising galaxy identification algorithms in large-scale interferometric surveys.</li>
                  <li>Developed statistical and computational models for analysing astronomical data, sharpening my data analysis and machine learning skills.</li>
                  <li>Published research findings as part of my dissertation, which laid the foundation for my data-driven approach in current work.</li>
                </ul>
              </>
            ),
            date: "Feb 2016 - Dec 2018",
            icon: <BsAward />, // Represents academic achievements and awards
            tags: ["Research", "Galaxy Identification", "Machine Learning", "Data Science", "Python"]
          }
    ]
}

export default homeConfig;
