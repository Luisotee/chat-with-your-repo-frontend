import React, { useState } from "react";

interface NewChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (model: string, repoUrl: string) => void;
}

const models = ["GPT-3.5 Turbo", "GPT-4o", "Claude", "LLAMA"]; // Add more models as needed

export function NewChatModal({ isOpen, onClose, onSubmit }: NewChatModalProps) {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedModel, repoUrl);
    onClose();
    setSelectedModel(models[0]);
    setRepoUrl("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-white">Create New Chat</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              LLM Model
            </label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2"
            >
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              GitHub Repo URL
            </label>
            <input
              type="text"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2"
              placeholder="https://github.com/username/repo"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 text-gray-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
