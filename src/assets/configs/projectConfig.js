import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";

import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [

    {
        id: "project-3",
        title: "Kafkaml Anomalies",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: kafkaMl,
        description: "Project for real-time anomaly detection using kafka and python.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Portfolio Web",
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
                url: "https://github.com/thembagqaza/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: portfolio,
        description: "Source code that powers my portfolio webpage as data scientist.",
        target: "_blank"
    }
]

export default projectConfig