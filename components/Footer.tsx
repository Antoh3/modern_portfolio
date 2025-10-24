"use client"

import type React from "react"

import { motion } from "framer-motion"

// import { Input } from "@/components/ui/input"
// import { Twitter, Github, Linkedin, Youtube, ArrowRight, FileText } from "lucide-react"
import { FaLocationArrow } from 'react-icons/fa6'
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaFile, FaImagePortrait, FaFileArrowDown } from "react-icons/fa6"
import Link from "next/link"
import MagicButton from "./MagicButton"


export function Footer() {

  const handleDownload = (fileName: string) => {
    if (typeof window !== "undefined") {
      const fileUrl = `/${fileName}`;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };


  return (
    <footer className="border-t border-zinc-800 py-16 relative bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <FaImagePortrait className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My<span className="text-purple-500">Portfolio</span></h3>
              </Link>
              <p className="text-zinc-400 mb-6 max-w-md">
                Checkout my profiles
              </p>
              <div className="flex space-x-4">
                <SocialIcon icon={<FaTwitter size={18} />} />
                <SocialIcon icon={<FaGithub size={18} />} />
                <SocialIcon icon={<FaLinkedin size={18} />} />
                {/* <SocialIcon icon={<FaYoutube size={18} />} /> */}
              </div>
            </motion.div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">All about me</h4>
            <ul className="space-y-2">
              <FooterLink href="#features">
                <MagicButton
                  title="Download Resume"
                  icon={<FaFileArrowDown />}
                  position="right"
                  otherClasses="p-2"
                  handleClick={() => handleDownload("resume.pdf")}
                />
              </FooterLink>
              <FooterLink href="#how-it-works">
                {/* Download Cv <FaFileArrowDown /> */}
                <MagicButton
                  title="Download Cv"
                  icon={<FaFileArrowDown />}
                  position="right"
                  handleClick={() => handleDownload("cv.pdf")}
                />
              </FooterLink>
              {/* <FooterLink href="#pricing">Pricing</FooterLink> */}
              {/* <FooterLink href="/chat">Try the Chat</FooterLink> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact me</h4>
            <p className="text-zinc-400 mb-4">Lets get started </p>
            <div className="flex space-x-2">
              <input placeholder="Enter your email" className="bg-white border-zinc-800" />
              <button className="bg-white">
                <FaLocationArrow />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-zinc-500 text-sm hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="text-zinc-500 text-sm hover:text-white cursor-pointer">Terms of Service</span>
            <span className="text-zinc-500 text-sm hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors cursor-pointer">
      {icon}
    </div>
  )
}

function FooterLink({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <li>
      <a href={href} className="text-zinc-400 hover:text-white transition-colors">
        {children}
      </a>
    </li>
  )
}
