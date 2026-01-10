import { createContext, useContext, useState } from "react";
import { askAI } from "@/services/ai.service";

const AIContext = createContext();

export const AIProvider = ({ children }) => {

    const [entry, setEntry] = useState('');
    const [messages, setMessages] = useState([]);
    const [viewModal, setViewModal] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    const addMessage = (user, value) => {
        setMessages(prev => [...prev, { user, value }]);
    };

    const handleSendMessage = async () => {
        if (!entry.trim()) return;

        const userMessage = entry;

        addMessage('me', userMessage);
        setEntry('');
        setIsTyping(true);

        try {
            const aiResponse = await askAI(userMessage);
            addMessage('ai', aiResponse);
        } catch (error) {
            addMessage('ai', 'Ocurrió un error. Intenta nuevamente.');
        } finally {
            setIsTyping(false);
        }
    };

    const contextValue = {
        entry,
        setEntry,
        messages,
        viewModal,
        setViewModal,
        isTyping,
        handleSendMessage
    };

    return (
        <AIContext.Provider value={contextValue}>
            {children}
        </AIContext.Provider>
    );
};

export const useAI = () => useContext(AIContext);