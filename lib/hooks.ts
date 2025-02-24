import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView && (Date.now() - timeOfLastClick) > 1000) setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return { ref }
}