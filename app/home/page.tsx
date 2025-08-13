export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="shadow bg-white">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <nav className="flex space-x-6 text-gray-700">
            <a href="/" className="hover:text-green-600">Home</a>
            <a href="/about" className="hover:text-green-600">About</a>
            <a href="/features" className="hover:text-green-600">Features</a>
            <a href="/gallery" className="hover:text-green-600">Gallery</a>
            <a href="/contact" className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">Contact</a>
          </nav>
          <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800">
            Sign In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">
          We are happy to assist <span className="inline-block">😊</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-gray-900 text-white p-6 rounded-xl border-4 border-orange-300">
            <h2 className="text-lg font-bold flex items-center mb-2">📌 Address</h2>
            <p>
              Baramati
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-gray-900 text-white p-6 rounded-xl border-4 border-orange-300">
            <h2 className="text-lg font-bold flex items-center mb-2">💌 Email</h2>
            <p>akashphadtare@gmail.com</p>
          </div>

          {/* Call Card */}
          <div className="bg-gray-900 text-white p-6 rounded-xl border-4 border-orange-300">
            <h2 className="text-lg font-bold flex items-center mb-2">☎️ Call us</h2>
            <p>+91 7757998804 &amp; +91 7757998804</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2023 Copyrights by <span className="font-bold text-white">Ambika Infotech</span> All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Terms And Condition</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
