import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../config";

const pilotCopy = {
  en: "AI pilot: do not enter payment details or sensitive personal information. Routes and prices require human confirmation.",
  "zh-hk": "AI 測試版：請勿輸入付款資料或敏感個人資訊；路線及價格仍需人工確認。",
  ar: "نسخة تجريبية للذكاء الاصطناعي: لا تدخل بيانات الدفع أو معلومات شخصية حساسة. المسارات والأسعار تتطلب تأكيدًا بشريًا.",
};

export default function WorkflowAiPilot({ language }) {
  const location = useLocation();
  const enabled = new URLSearchParams(location.search).get("workflowai") === "pilot";

  useEffect(() => {
    if (!enabled || !siteConfig.workflowAiWidgetSrc) return undefined;
    if (document.querySelector('script[data-workflowai-pilot="true"]')) return undefined;

    const script = document.createElement("script");
    script.src = siteConfig.workflowAiWidgetSrc;
    script.async = true;
    script.dataset.workflowaiPilot = "true";
    document.body.appendChild(script);

    return () => {
      script.remove();
      document.getElementById("wai-widget-container")?.remove();
      document.querySelector('iframe[title="Chat Widget"]')?.remove();
      delete window.__waiWidgetLoaded;
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <aside className="fixed inset-x-0 bottom-0 z-[999998] border-t border-amber-300 bg-amber-50/95 px-4 py-2 text-center text-xs font-medium text-amber-950 shadow-lg backdrop-blur sm:bottom-auto sm:top-0">
      {pilotCopy[language] || pilotCopy.en}
    </aside>
  );
}
