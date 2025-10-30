"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Send, Sparkles } from "lucide-react";

const sampleMessages = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hi! I'm Zeni, your AI financial copilot. How can I help you today?",
  },
];

export default function ZeniAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(sampleMessages);

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: message,
    };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: "assistant",
        content:
          "I understand your question. Let me help you with that. This is a demo response showing how Zeni can assist with your financial needs.",
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    setMessage("");
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-linear-to-br from-primary to-accent shadow-2xl hover:scale-110 transition-transform z-50"
          size="icon"
        >
          <Sparkles className="w-7 h-7 text-white" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] glass-card rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-primary/20 z-50">
          {/* Header */}
          <div className="bg-linear-to-r from-primary to-accent p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-white">Zeni</h3>
                <p className="text-xs text-white/90">
                  Your AI Financial Copilot
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-background">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    msg.role === "user"
                      ? "bg-linear-to-r from-primary to-accent text-white"
                      : "glass-card border border-border text-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="glass-card rounded-2xl p-4 border border-border">
                <p className="text-sm text-foreground font-semibold mb-3">
                  I can help you with:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Check your credit score and get improvement tips
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Find verified suppliers in the marketplace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Monitor fraud alerts and security status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Track transactions and account activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Get loan recommendations and eligibility</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask Zeni anything..."
                className="flex-1 bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                size="icon"
                onClick={handleSend}
                className="bg-linear-to-r from-primary to-accent text-white hover:opacity-90"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
