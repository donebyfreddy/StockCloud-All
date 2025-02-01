import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCloud, FaBook, FaGithub, FaGlobe } from "react-icons/fa";
import { SiAzuredevops, SiOpenai } from "react-icons/si";

const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[100vh] p-10 bg-gray-900 text-white">
            {/* Left Section - Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-lg space-y-6"
            >
                <h1 className="text-4xl font-bold text-blue-400">About This Project</h1>
                <p className="text-lg text-gray-300">
                    This project has significantly expanded my Azure and programming knowledge,
                    exposing me to technologies like <span className="text-blue-400">React</span>,
                    <span className="text-green-400"> Node.js</span>,
                    <span className="text-purple-400"> Azure SWA</span>,
                    <span className="text-yellow-400"> App Services</span>, and
                    <span className="text-teal-400"> Azure OpenAI</span>.
                </p>

                {/* Tech Stack Icons */}
                <div className="flex space-x-4 text-3xl">
                    <FaReact className="text-blue-400" title="React" />
                    <FaNodeJs className="text-green-400" title="Node.js" />
                    <SiAzuredevops className="text-purple-400" title="Azure SWA" />
                    <FaCloud className="text-yellow-400" title="App Services" />
                    <SiOpenai className="text-teal-400" title="Azure OpenAI" />
                </div>

                {/* Documentation Links - Each One Below the Other */}
                <div className="space-y-3">
                    <a
                        href="https://www.dropbox.com/scl/fi/4vgjicvtcqgcmjjfuhofk/StockCloud_Documentation.pdf?rlkey=rel7vzpukwmnqb3ky3np35pzw&e=1&st=1ubv2it2&dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition"
                    >
                        <FaBook /> <span>Project Documentation</span>
                    </a>

                    <a
                        href="https://github.com/donebyfreddy/StockCloud-Frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition"
                    >
                        <FaGithub /> <span>Frontend (GitHub Repository)</span>
                    </a>

                    <a
                        href="https://github.com/donebyfreddy/StockCloud-Backend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition"
                    >
                        <FaGithub /> <span>Backend (GitHub Repository)</span>
                    </a>

                    <a
                        href="https://fomencuccini.tech/MyProjects/StockCloud.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition"
                    >
                        <FaGlobe /> <span>Showcase on My Website</span>
                    </a>
                </div>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-10 md:mt-0 md:-ml-10"
            >
                <img
                    src="/fmencuccini.webp"
                    alt="Your profile"
                    className="w-80 h-80 object-cover rounded-2xl shadow-lg"
                />
            </motion.div>
        </div>
    );
};

export default About;
