import data from "./db/db.json";

function detectLanguage() {
    if (typeof navigator === "undefined") {
        return "esp";
    }

    const lang = navigator.language || navigator.userLanguage;

    if (!lang) return "esp";

    if (lang.toLowerCase().startsWith("en")) {
        return "en";
    }

    return "esp";
}

const currentLanguage = detectLanguage();

const content = data[currentLanguage] || data.esp;

const API_KEY_GEMINI = process.env.REACT_APP_API_KEY_GEMINI || undefined

export { content, currentLanguage, API_KEY_GEMINI };