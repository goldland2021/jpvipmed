import { useEffect } from "react";
import { siteConfig } from "../config";

export default function WorkflowAiPilot() {
  useEffect(() => {
    if (!siteConfig.workflowAiWidgetSrc) return undefined;
    if (document.querySelector('script[data-workflowai-assistant="true"]')) return undefined;

    const script = document.createElement("script");
    script.src = siteConfig.workflowAiWidgetSrc;
    script.async = true;
    script.dataset.workflowaiAssistant = "true";
    document.body.appendChild(script);

    return () => {
      script.remove();
      document.getElementById("wai-widget-container")?.remove();
      document.querySelector('iframe[title="Chat Widget"]')?.remove();
      delete window.__waiWidgetLoaded;
    };
  }, []);

  return null;
}
