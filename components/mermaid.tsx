import { useEffect, useRef, useState } from "react";
import mermaid from "@/lib/mermaid";

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [id] = useState(
    () => `mermaid-${Math.random().toString(36).substring(2, 9)}`,
  );

  useEffect(() => {
    if (containerRef.current) {
      mermaid.render(id, chart).then(({ svg }) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      });
    }
  }, [chart, id]);

  return <div ref={containerRef} />;
}
