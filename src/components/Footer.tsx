import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="/logo-icon.png"
              alt="LemanLabs"
              width={32}
              height={32}
              className="w-8 h-8"
              style={{ filter: "grayscale(1) contrast(5)" }}
            />
            <span className="text-gray-900 font-semibold text-xl">LemanLabs</span>
          </a>
          <p className="text-gray-500 max-w-sm">
            Lightning-fast AI inference at unbeatable prices. Build powerful AI applications with our simple, reliable API.
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 LemanLabs. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with care in Lausanne
          </p>
        </div>
      </div>
    </footer>
  );
}
