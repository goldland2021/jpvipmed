import { useEffect } from "react";
import { siteConfig } from "../config";

const WIDGET_EMBED_VERSION = "2026-07-14-hitbox";

export default function WorkflowAiPilot() {
  useEffect(() => {
    if (!siteConfig.workflowAiWidgetSrc) return undefined;
    if (new URLSearchParams(window.location.search).get("workflowai") !== "pilot") {
      return undefined;
    }
    if (document.querySelector('script[data-workflowai-assistant="true"]')) return undefined;

    const script = document.createElement("script");
    const scriptUrl = new URL(siteConfig.workflowAiWidgetSrc, window.location.href);
    scriptUrl.searchParams.set("embedVersion", WIDGET_EMBED_VERSION);
    script.src = scriptUrl.toString();
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
