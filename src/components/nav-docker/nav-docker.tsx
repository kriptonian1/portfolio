import { useState } from "react";
import { AnimatedTab } from "./animated-tab";

interface Tabs {
  name: string;
  href: string;
}

export const NavDocker = () => {
  const tabs: Tabs[] = [
    { name: "About", href: "/" },
    { name: "Animations", href: "https://ui.kriptonian.xyz/" },
    { name: "Resume", href: "/CV_Sawan_Bhattacharya.pdf" },
    {
      name: "Contact",
      href: "mailto:sawan.bhattacharya442@gmail.com?subject=Reaching%20Out%20From%20Your%20Website",
    },
  ];

  const [currentHoverTab, setCurrentHoverTab] = useState<string>(tabs[0].name);

  return (
    <nav className="shadow-nav border-cream/20 text-cream fixed bottom-10 z-20 rounded-full border bg-[#0c0c0cd1] p-2 text-sm backdrop-blur">
      <div className="relative flex">
        {tabs.map((tab) => (
          <a
            className="relative transition"
            key={tab.name}
            onMouseEnter={() => setCurrentHoverTab(tab.name)}
            onMouseLeave={() => setCurrentHoverTab(tabs[0].name)}
            {...(tab.name !== "About" && tab.name !== "Contact"
              ? { rel: "noopener noreferrer", target: "_blank" }
              : {})}
            href={tab.href}
          >
            <AnimatedTab name={tab.name} currentTab={currentHoverTab} />
            <div className="relative z-20 px-4 py-2">{tab.name}</div>
          </a>
        ))}
      </div>
    </nav>
  );
};
