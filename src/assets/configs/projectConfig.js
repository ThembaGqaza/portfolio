import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";

// Import your images here
import StatsScraperImage from "../images/stats-sa-scraper.png";
import IntentClassifierImage from "../images/Intent-Classification-blog-images.webp";
import portfolio from "../images/portfolio.png";

import React from 'react'

const projectConfig = [
    {
        id: "project-4",
        title: "Stats-SA Crawler",
        links: [
            {
                name: "repo",
                url: "https://github.com/ThembaGqaza/stats-sa-crawler",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/ThembaGqaza/stats-sa-crawler/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/ThembaGqaza/stats-sa-crawler/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: StatsScraperImage,
        description: "Python-based web scraper that extracts census data from the Statistics Soth Africa API across provinces, districts, and municipalities, saving the data in CSV format.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Intent Classifier",
        links: [
            {
                name: "repo",
                url: "https://github.com/ThembaGqaza/intent-classifier",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/ThembaGqaza/intent-classifier/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/ThembaGqaza/intent-classifier/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: IntentClassifierImage,
        description: "Project for intent classifier using word embeddings, cosine similarity, and Python.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Portfolio Website",
        links: [
            {
                name: "repo",
                url: "https://github.com/thembagqaza/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/thembaqaza/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/thembaqaza/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: portfolio,
        description: "Source code that powers my portfolio webpage as a data scientist.",
        target: "_blank"
    }
]

export default projectConfig;
