import React, { useState } from 'react';

const knowledgeBase = {
    "services": "We offer a range of services including web development, app development, and digital marketing.",
    "pricing": "Our pricing starts from $500 for basic services.",
    "contact": "You can contact us at contact@yourcompany.com.",
    "portfolio": "Check our portfolio at www.yourcompany.com/portfolio.",
    "team": "Our team consists of experienced professionals in the industry."
};

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = () => {
        const userMessage = userInput.trim();
        if (userMessage) {
            setMessages([...messages, { sender: 'user', text: userMessage }]);
            const botResponse = getBotResponse(userMessage);
            if (botResponse) {
                setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: botResponse }]);
            }
            setUserInput('');
        }
    };

    const getBotResponse = (message) => {
        // Simple keyword matching for responses
        const lowerCaseMessage = message.toLowerCase();
        for (let keyword in knowledgeBase) {
            if (lowerCaseMessage.includes(keyword)) {
                return knowledgeBase[keyword];
            }
        }
        return "I'm sorry, I don't understand that.";
    };

    return (
        <div>
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' ? handleSend() : null}
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            )}
            <button className="toggle-button" onClick={handleToggle}>
                {isOpen ? "Close" : "Chat"}
            </button>
        </div>
    );
};

export default AIAssistant;