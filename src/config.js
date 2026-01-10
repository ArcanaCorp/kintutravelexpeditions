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

export { content, currentLanguage };