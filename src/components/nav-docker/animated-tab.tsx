import { motion } from "motion/react";

interface AnimatedTabProps {
  name: string;
  currentTab: string;
}

export const AnimatedTab = ({
  name,
  currentTab,
}: AnimatedTabProps): React.JSX.Element => {
  return (
    <>
      {name === currentTab && (
        <motion.div
          layoutId="bubble"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="tabPillBG absolute z-10 h-full w-full rounded-full shadow-md shadow-[#0c0c0cd1]/50"
        />
      )}
    </>
  );
};
