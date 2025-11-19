import { useEffect, useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

interface UseAboutResult {
  isMobile: boolean;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  showTitle: boolean;
  showContainers: boolean[];
}

export function useAbout(): UseAboutResult {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [showTitle, setShowTitle] = useState(false);
  const [showContainers, setShowContainers] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const ANIMATION = {
      TITLE_DELAY: 150,
      CONTAINER_DELAYS: [400, 650, 900, 1150],
      INTERSECTION_THRESHOLD: 0.3,
    };

    try {
      if (!isMobile) return;

      const element = sectionRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          try {
            if (entry.isIntersecting) {
              setTimeout(() => setShowTitle(true), ANIMATION.TITLE_DELAY);

              ANIMATION.CONTAINER_DELAYS.forEach((delay, index) => {
                setTimeout(() => {
                  setShowContainers((prev) => {
                    const updated = [...prev];
                    updated[index] = true;

                    return updated;
                  });
                }, delay);
              });

              observer.disconnect();
            }
          } catch (error) {
            console.error("IntersectionObserver callback error:", error);
          }
        },
        { threshold: ANIMATION.INTERSECTION_THRESHOLD },
      );

      observer.observe(element);

      return () => observer.disconnect();
    } catch (error) {
      console.error("useAbout error:", error);
    }
  }, [isMobile]);

  return {
    isMobile,
    sectionRef,
    showTitle,
    showContainers,
  };
}
