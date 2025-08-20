"use client";

import { ThemeProvider, useTheme } from "./component/themeContext";

function InnerHome() {
  const { theme, toggleTheme } = useTheme();
const handleInstagramRedirect = () => {
    window.open('https://www.instagram.com/mahalaxmi_const._and_interiors?igsh=eXJsYWVlMTBpeHo4', '_blank');
  };
 return (
    <div className={`min-h-screen flex flex-col ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
    } transition-colors duration-300`}>
      
      {/* Header */}
      <header className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} shadow-md sticky top-0 z-10`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-3">
          <img src="/logo.png" alt="Logo" className="h-10 mb-2 sm:mb-0" />
          
          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base mb-2 sm:mb-0">
            <a href="/" className="hover:text-green-600 transition-colors">Home</a>
            <a href="/about" className="hover:text-green-600 transition-colors">About</a>
            <a href="/features" className="hover:text-green-600 transition-colors">Features</a>
            <a href="/gallery" className="hover:text-green-600 transition-colors">Gallery</a>
            <a href="/contact" className="bg-green-500 text-white px-3 sm:px-4 py-1 rounded hover:bg-green-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className={`px-3 sm:px-4 py-1 rounded hover:opacity-80 transition ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}>
              Sign In
            </button>
            <button
              onClick={toggleTheme}
              className={`px-3 sm:px-4 py-1 rounded transition flex items-center gap-2 ${
                theme === "dark" ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
              }`}
            >
              {theme === 'dark' ? '☀️' : '🌙'} Theme
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          We are happy to assist <span className="inline-block animate-bounce">😊</span>
        </h1>

        {/* Enhanced Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { 
              icon: "📍", 
              title: "Address", 
              details: ["Madhumeet Apartment,Saiganesh Nagar,Near Baramati Court,Baramati,Pune, Maharashtra",],
              color: "from-blue-500 to-purple-500"
            },
            { 
              icon: "📧", 
              title: "Email", 
              details: ["mahalaximi00096@gmail.com"],
              color: "from-green-500 to-teal-500"
            },
            { 
              icon: "📞", 
              title: "Call us", 
              details: ["Er. Akash Phadtare: +91 7757998804", "Er. Hrishi Phadtare: +91 8626096096"],
              color: "from-orange-500 to-red-500"
            },
          ].map(({ icon, title, details, color }, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                theme === "dark" 
                  ? "bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-700" 
                  : "bg-white border border-gray-200"
              }`}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`}></div>
              
              {/* Animated icon */}
              <div className="mb-6 flex justify-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                }`}>
                  <span className="text-2xl">{icon}</span>
                </div>
              </div>
              
              {/* Content */}
              <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
              
              <div className="space-y-2">
                {details.map((detail, idx) => (
                  <p key={idx} className="flex items-center text-sm sm:text-base">
                    <span className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${color}`}></span>
                    {detail}
                  </p>
                ))}
              </div>
              
              {/* Hover effect element */}
              <div className={`absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-r ${color} opacity-10 transition-all duration-300 group-hover:opacity-20`}></div>
            </div>
          ))}
        </div>
      {/* INSTAGRAM  */}
      
      <div style={{margin:10,marginTop:0}}></div>
 {/* <div className={`rounded-2xl overflow-hidden shadow-xl mb-16 ${
          theme === "dark" ? "bg-gray-800" : "bg-gradient-to-r from-amber-100 to-rose-100"
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📱</span>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  theme === "dark" ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-800"
                }`}>
                  Jetzt neu:
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Die Instagram-Community von Mahalaxmi Construction</h2>
              <p className="mb-6">
                Ob Inspiration, Projekteinblicke oder Tipps für Ihr Bauvorhaben: In unserer
                Instagram-Community finden Sie visuelle Inspiration, aktuelle Projekte und Einblicke
                hinter die Kulissen unseres Unternehmens.
              </p>
              <button 
                onClick={handleInstagramRedirect}
                className={`self-start flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  theme === "dark" 
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" 
                    : "bg-gradient-to-r from-rose-500 to-amber-500 text-white"
                }`}
              >
                Jetzt folgen
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div 
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105"
              onClick={handleInstagramRedirect}
            >
              <div className={`h-full min-h-[300px] flex items-center justify-center ${
                theme === "dark" 
                  ? "bg-gradient-to-br from-purple-900 via-pink-900 to-amber-900" 
                  : "bg-gradient-to-br from-rose-200 via-amber-200 to-purple-200"
              }`}>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">📸</div>
                  <h3 className="text-xl font-bold mb-2">Folgen Sie uns auf Instagram</h3>
                  <p className="opacity-80">@MahalaxmiConstruction</p>
                  <div className="mt-6 flex justify-center space-x-2">
                    <div className="w-16 h-16 rounded-lg bg-white bg-opacity-20"></div>
                    <div className="w-16 h-16 rounded-lg bg-white bg-opacity-20"></div>
                    <div className="w-16 h-16 rounded-lg bg-white bg-opacity-20"></div>
                  </div>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-16 h-16 rounded-lg bg-white bg-opacity-20"></div>
                    <div className="w-16 h-16 rounded-lg bg-white bg-opacity-20"></div>
                    <div className="w-16 h-16 rounded-lg bg-white bg-opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
 <div className={`rounded-2xl overflow-hidden shadow-xl mb-16 ${
          theme === "dark" ? "bg-gray-800" : "bg-gradient-to-r from-blue-50 to-indigo-50"
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Follow Our Construction Journey on Instagram</h2>
              <p className="mb-6">
                Get behind-the-scenes access to our projects, see our latest work, and discover inspiration 
                for your construction needs. Follow us for daily updates and exclusive content!
              </p>
              <button 
                onClick={handleInstagramRedirect}
                className={`self-start flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  theme === "dark" 
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                    : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                }`}
              >
                Follow on Instagram
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div 
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105"
              onClick={handleInstagramRedirect}
            >
              <div className={`h-full min-h-[300px] flex items-center justify-center ${
                theme === "dark" 
                  ? "bg-gradient-to-br from-blue-900 to-indigo-900" 
                  : "bg-gradient-to-br from-blue-100 to-indigo-100"
              }`}>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🏗️</div>
                  <h3 className="text-xl font-bold mb-2">@MahalaxmiConstruction</h3>
                  <p className="opacity-80 mb-6">Follow us for construction inspiration</p>
                  <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
                    <div className="aspect-square bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl">📐</div>
                    <div className="aspect-square bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl">🏠</div>
                    <div className="aspect-square bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl">🔨</div>
                    <div className="aspect-square bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl">👷</div>
                    <div className="aspect-square bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl">⭐</div>
                    <div className="aspect-square bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl">🚧</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            We're Here to Help
          </h2>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Our team of experts is available to answer any questions you might have. 
            We look forward to hearing from you!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-6 ${
        theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
      } transition-colors duration-300`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm px-4">
          <p className="text-center md:text-left mb-2 md:mb-0">
            © 2025 Copyrights by{" "}
            <span className={`font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
              Mahalaxmi Construction
            </span>{" "}
            All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-600 transition-colors">
              Terms And Condition
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
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
