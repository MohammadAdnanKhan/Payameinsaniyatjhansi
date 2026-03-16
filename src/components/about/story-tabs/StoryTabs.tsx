"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import TabButton from "./TabButton"

import StoryTab from "./StoryTab"
import MissionTab from "./MissionTab"
import VisionTab from "./VisionTab"
import TimelineTab from "./TimelineTab"

import { faBookOpen, faBullseye, faEye, faClock } from "@fortawesome/free-solid-svg-icons"

export default function StoryTabs() {

  const [activeTab, setActiveTab] = useState("story")

  const tabs = [
    { id: "story", label: "Story", icon: faBookOpen },
    { id: "mission", label: "Mission", icon: faBullseye },
    { id: "vision", label: "Vision", icon: faEye },
    { id: "timeline", label: "Timeline", icon: faClock },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6">

      <h2
        className="text-3xl md:text-5xl font-semibold tracking-tight text-center"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <span className="text-primary">Our</span>{" "}
        <span className="text-secondary">Journey</span>
      </h2>

      <div className="flex justify-center mt-12 gap-6 flex-wrap relative">

        {tabs.map((tab) => (

          <TabButton
            key={tab.id}
            tab={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

        ))}

      </div>

      <div className="mt-14">

        <div className="relative bg-[var(--boldtheme)] backdrop-blur-xl border border-secondary/50 shadow-xl rounded-xl p-10">

          <AnimatePresence mode="wait">

            {activeTab === "story" && (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <StoryTab />
              </motion.div>
            )}

            {activeTab === "mission" && (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <MissionTab />
              </motion.div>
            )}

            {activeTab === "vision" && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <VisionTab />
              </motion.div>
            )}

            {activeTab === "timeline" && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <TimelineTab />
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>

    </section>
  )
}