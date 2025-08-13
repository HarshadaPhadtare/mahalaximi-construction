"use client";

import { ThemeProvider, useTheme } from "./component/themeContext";

function InnerHome() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <header className={`${theme === "dark" ? "bg-black" : "bg-gray-100"} shadow`}>
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <nav className={`flex space-x-6 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
            <a href="/" className="hover:text-green-600">Home</a>
            <a href="/about" className="hover:text-green-600">About</a>
            <a href="/features" className="hover:text-green-600">Features</a>
            <a href="/gallery" className="hover:text-green-600">Gallery</a>
            <a
              href="/contact"
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
           
            <button
              className={`px-4 py-1 rounded hover:opacity-80 transition ${
                theme === "dark" ? "bg-black" : "bg-gray-200"
              }`}
            >
              Sign In
            </button>
             <button
              onClick={toggleTheme}
              className={`px-4 py-1 rounded transition ${
                theme === "dark" ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Theme
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">
          We are happy to assist <span className="inline-block">😊</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "📌", title: "Address", text: "Baramati" },
            { icon: "💌", title: "Email", text: "akashphadtare@gmail.com" },
            { icon: "☎️", title: "Call us", text: "+91 7757998804 & +91 7757998804" },
          ].map(({ icon, title, text }, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border-4 ${
                theme === "dark"
                  ? "bg-gray-900 text-white border-orange-300"
                  : "bg-white text-black border-orange-500"
              }`}
            >
              <h2 className="text-lg font-bold flex items-center mb-2">
                {icon} {title}
              </h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </main>

      <footer
        className={`py-4 ${
          theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © 2025 Copyrights by{" "}
            <span className={`${theme === "dark" ? "text-white" : "text-black"} font-bold`}>
              Mahalaximi Construction
            </span>{" "}
            All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className={`hover:${theme === "dark" ? "text-white" : "text-black"}`}>
              Terms And Condition
            </a>
            <a href="#" className={`hover:${theme === "dark" ? "text-white" : "text-black"}`}>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <InnerHome />
    </ThemeProvider>
  );
}
