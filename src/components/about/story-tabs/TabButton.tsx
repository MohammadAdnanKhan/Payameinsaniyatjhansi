"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Tab {
  id: string;
  label: string;
  icon: IconDefinition;
}

interface TabButtonProps {
  tab: Tab;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function TabButton({
  tab,
  activeTab,
  setActiveTab,
}: TabButtonProps) {
  const active = activeTab === tab.id;

  return (
    <button
      onClick={() => setActiveTab(tab.id)}
      className="relative px-6 py-3 flex items-center gap-3 font-medium text-sm"
    >
      <FontAwesomeIcon
        icon={tab.icon}
        className={active ? "text-primary" : "text-gray-500"}
      />

      <span className={active ? "text-primary" : "text-gray-600"}>
        {tab.label}
      </span>

      {active && (
        <motion.div
          layoutId="underline"
          className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary rounded-full"
        />
      )}
    </button>
  );
}
