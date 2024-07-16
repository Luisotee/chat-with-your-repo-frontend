"use client";

import { Chatbar } from "./components/chatbar";
import { Sidebar } from "./components/sidebar";

export default function MainPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-800">
        <main className="flex-1 overflow-auto">{/* Main content area */}</main>
        <div className="w-full md:max-w-[calc(100%-16rem)] md:ml-auto">
          <Chatbar />
        </div>
      </div>
    </div>
  );
}
