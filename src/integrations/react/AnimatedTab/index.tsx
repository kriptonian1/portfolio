/** @jsxImportSource react */

import { motion } from "framer-motion";
import { qwikify$ } from "@builder.io/qwik-react";
import React from "react";

interface ReactAnimatedTabProps {
  name: string;
  currentTab: string;
}

const ReactAnimatedTab = ({
  name,
  currentTab,
}: ReactAnimatedTabProps): React.JSX.Element => {
  return (
    <>
      {name === currentTab && (
        <motion.div
          layoutId="bubble"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="tabPillBG absolute z-10 h-full w-full rounded-full  shadow-md shadow-[#0c0c0cd1]/50"
        />
      )}
    </>
  );
};
/**
 * This is a React component that animates a tab using framer-motion.
 */
export const AnimatedTab = qwikify$(ReactAnimatedTab);
