import type { QRL } from "@builder.io/qwik";
import { $, component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { AnimatedTab } from "~/integrations/react/AnimatedTab";

interface Tabs {
  name: string;
  href: string;
}

type TabStore = {
  value: string;
  update: QRL<(this: TabStore, newTabName: string) => void>;
};

export const NavDocker = component$(() => {
  const tabs: Tabs[] = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Animations",
      href: "https://ui.kriptonian.xyz/",
    },
    {
      name: "Resume",
      href: "https://media.licdn.com/dms/document/media/D4D2DAQE8e1AT4P_JnA/profile-treasury-document-pdf-analyzed/0/1713907008052?e=1716422400&v=beta&t=eL4qwE2OsD1NaeT4C1BF6-Smzg9mFJH05JrR5V3ke2A",
    },
    {
      name: "Contact",
      href: "mailto:sawan.bhattacharya442@gmail.com?subject=Reaching%20Out%20From%20Your%20Website",
    },
  ];

  const currentHoverTab = useStore<TabStore>({
    value: tabs[0].name,
    update: $(function (this: TabStore, newTabName: string) {
      this.value = newTabName;
    }),
  });

  return (
    <nav class="shadow-nav fixed bottom-10 z-20 rounded-full border border-cream/20 bg-[#0c0c0cd1] p-2 text-sm text-cream backdrop-blur ">
      <div class="relative flex ">
        {tabs.map((tab) => {
          return (
            <Link
              class="relative transition"
              key={tab.name}
              onMouseEnter$={() => currentHoverTab.update(tab.name)}
              onMouseLeave$={() => currentHoverTab.update(tabs[0].name)}
              {...(tab.name !== "About" && tab.name !== "Contact"
                ? {
                    rel: "noopener noreferrer",
                    target: "_blank",
                  }
                : {})}
              // rel="noopener noreferrer"
              // target="_blank"
              href={tab.href}
            >
              <AnimatedTab
                client:idle
                name={tab.name}
                currentTab={currentHoverTab.value}
              />
              <div class="relative z-20 px-4 py-2">{tab.name}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
});
