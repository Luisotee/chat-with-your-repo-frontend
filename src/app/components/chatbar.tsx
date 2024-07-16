import React, {
  useState,
  useEffect,
  useRef,
  FormEvent,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { FiSend } from "react-icons/fi";

const MAX_CHARS: number = 1000;

export function Chatbar() {
  const [message, setMessage] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [message]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Message submitted:", message);
    setMessage("");
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    /* if (input.length <= MAX_CHARS) {     // Uncomment this block to limit the input length
      setMessage(input);
    } */
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  };

  return (
    <div className=" border-gray-700 p-4 w-full">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex flex-col">
        <div className="flex items-center">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            className="flex-grow bg-gray-700 text-white rounded-lg px-4 py-2 mr-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={1}
            style={{ minHeight: "44px", maxHeight: "200px" }}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors duration-200"
            disabled={!message.trim()}
          >
            <FiSend />
          </button>
        </div>
        {/* <div className="text-right text-sm text-gray-400 mt-1">
          {message.length}/{MAX_CHARS}
        </div> */}
        <footer className="text-center text-sm text-gray-400 mt-1">
          © {new Date().getFullYear()} Luisotee. All rights reserved.
        </footer>
      </form>
    </div>
  );
}
