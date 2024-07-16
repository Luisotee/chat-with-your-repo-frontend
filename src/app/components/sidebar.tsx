import React, { useState } from "react";
import {
  FiPlus,
  FiMessageSquare,
  FiMenu,
  FiUser,
  FiMoreVertical,
  FiMoreHorizontal,
} from "react-icons/fi";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const conversations = [
    { id: 1, name: "Conversation 1" },
    { id: 2, name: "Conversation 2" },
  ];

  const handleMenuToggle = (id: number) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleRename = (id: number) => {
    console.log(`Rename conversation ${id}`);
    // Implement rename logic here
  };

  const handleDelete = (id: number) => {
    console.log(`Delete conversation ${id}`);
    // Implement delete logic here
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 bg-gray-700 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu />
      </button>
      <div
        className={`bg-gray-900 w-64 h-screen flex flex-col fixed top-0 left-0 z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <nav className="flex-1 p-4 overflow-y-auto">
          <button className="w-full border border-gray-700 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center mb-4 transition-colors duration-200">
            <FiPlus className="mr-2" /> New Chat
          </button>
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <div key={conversation.id} className="relative">
                <button className="w-full text-gray-300 hover:bg-gray-700 text-left px-2 py-2 rounded flex items-center justify-between transition-colors duration-200">
                  <span className="flex items-center">
                    <FiMessageSquare className="mr-2" /> {conversation.name}
                  </span>
                  <FiMoreHorizontal
                    className="text-gray-500 hover:text-white"
                    onClick={() => handleMenuToggle(conversation.id)}
                  />
                </button>
                {activeMenu === conversation.id && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-20">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => handleRename(conversation.id)}
                    >
                      Rename
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => handleDelete(conversation.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button className="w-full text-gray-300 hover:bg-gray-700 text-left px-2 py-2 rounded flex items-center transition-colors duration-200">
            <FiUser className="mr-2" /> User Profile
          </button>
        </div>
      </div>
    </>
  );
}
