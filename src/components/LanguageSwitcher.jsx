import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { languageLabels, supportedLanguages } from "../config";

export default function LanguageSwitcher({ currentLanguage }) {
  const navigate = useNavigate();

  return (
    <label className="inline-flex items-center gap-2 text-sm text-white/80">
      <Globe className="h-4 w-4 text-gold" aria-hidden="true" />
      <span className="sr-only">Language</span>
      <select
        value={currentLanguage}
        onChange={(event) => navigate(`/${event.target.value}`)}
        className="rounded-md border border-white/20 bg-midnight px-2 py-2 text-sm text-white outline-none transition focus:border-gold"
      >
        {supportedLanguages.map((language) => (
          <option key={language} value={language}>
            {languageLabels[language]}
          </option>
        ))}
      </select>
    </label>
  );
}
