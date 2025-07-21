export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">M Music</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#signup" className="hover:underline">Artist Signup</a>
          <a href="#dashboard" className="hover:underline">Dashboard</a>
          <a href="#register" className="hover:underline">Register</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Distribute Your Music Worldwide</h2>
        <p className="text-lg">Get your tracks on Spotify, Apple Music, YouTube, and more!</p>
        <a href="#signup" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">Start Distributing</a>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-semibold mb-4">About M Music</h3>
        <p className="text-gray-700">M Music is a global music distribution platform that helps independent artists distribute their music across all major streaming platforms. Our mission is to empower creators and get their music heard by the world.</p>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-8 bg-gray-50">
        <h3 className="text-3xl font-semibold mb-8 text-center">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">Global Distribution</h4>
            <p>Get your music on Spotify, Apple Music, Amazon, and 150+ platforms.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">Royalty Management</h4>
            <p>Track and withdraw your royalties with full transparency.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">YouTube Content ID</h4>
            <p>Monetize your music on YouTube with our Content ID service.</p>
          </div>
        </div>
      </section>

      {/* Artist Signup */}
      <section id="signup" className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-semibold mb-4 text-center">Artist Signup</h3>
        <p className="text-center mb-8">Join M Music and distribute your music globally.</p>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Artist Name" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-xl" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-xl"></textarea>
          <button type="submit" className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800">Submit</button>
        </form>
      </section>

      {/* Dashboard Login */}
      <section id="dashboard" className="py-16 px-8 bg-gray-50">
        <h3 className="text-3xl font-semibold mb-4 text-center">Artist Dashboard Login</h3>
        <p className="text-center mb-8">Access your music, royalty reports, and release status.</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl" />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800">Login</button>
        </form>
      </section>

      {/* Register */}
      <section id="register" className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-semibold mb-4 text-center">Register New Artist</h3>
        <p className="text-center mb-8">Create an account to manage your music and royalties.</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl" />
          <input type="password" placeholder="Confirm Password" className="w-full p-3 border rounded-xl" />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800">Create Account</button>
        </form>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
        <p>Email: support@mmusic.com | Instagram: @mmusic</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4">
        <p>&copy; 2025 M Music. All rights reserved.</p>
      </footer>
    </main>
  );
}
