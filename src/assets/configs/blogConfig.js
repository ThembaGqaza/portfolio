import React from 'react'
import { SiMedium } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import astro2ds from "../images/astro_to_data_blog_image.jpeg";
import codeMix from "../images/code_mixing_paper_image.jpg";
import thesisImage from "../images/thesis_image.png"


const blogConfig = [
    {
        id: "blog-0",
        title: "Optimisation of Galaxy Identification Methods on Large Interferometric Surveys",
        links: [
            {
                name: "thesis",
                url: "https://open.uct.ac.za/items/4e53fd08-5ca4-4cde-9199-50b249db914e",
                icon: <FaFilePdf />
            }
        ],
        image: thesisImage,
        description: "Master’s thesis on optimizing galaxy identification methods in large interferometric surveys.",
        target: "_blank"
    },
    {
        id: "blog-1",
        title: "Prevalence of Code Mixing in Semi-formal Patient Communication in Low Resource Languages of South Africa",
        links: [
            {
                name: "paper",
                url: "https://www.researchgate.net/publication/337241667_Prevalence_of_code_mixing_in_semi-formal_patient_communication_in_low_resource_languages_of_South_Africa",
                icon: <FaFilePdf />
            }
        ],
        image: codeMix,
        description: "Co-authored paper analyzing code mixing in patient communication within low-resource languages.",
        target: "_blank"
    },
    {
        id: "blog-2",
        title: "From Astrophysics to Data Science: My Journey",
        links: [
            {
                name: "article",
                url: "https://reachdigitalhealth.medium.com/from-astrophysics-to-data-science-20297991c15c",
                icon: <SiMedium />
            }
        ],
        image: astro2ds,
        description: "A personal blog detailing my journey from studying astrophysics to becoming a data scientist.",
        target: "_blank"
    }
]

export default blogConfig;
