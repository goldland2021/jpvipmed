import { useEffect } from "react";
import { siteConfig } from "../config";

const assistantCopy = {
  en: "AI assistant: do not enter payment details or sensitive personal information. Routes, vehicle availability, and prices require human confirmation.",
  "zh-hk": "AI 客服：請勿輸入付款資料或敏感個人資訊；路線、車輛供應及價格仍需人工確認。",
  ar: "مساعد الذكاء الاصطناعي: لا تدخل بيانات الدفع أو معلومات شخصية حساسة. تتطلب المسارات وتوفر المركبات والأسعار تأكيدًا بشريًا.",
};

export default function WorkflowAiPilot({ language }) {
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

  if (!siteConfig.workflowAiWidgetSrc) return null;

  return (
    <aside className="fixed inset-x-0 bottom-0 z-[999998] border-t border-amber-300 bg-amber-50/95 px-4 py-2 text-center text-xs font-medium text-amber-950 shadow-lg backdrop-blur sm:bottom-auto sm:top-0">
      {assistantCopy[language] || assistantCopy.en}
    </aside>
  );
}
