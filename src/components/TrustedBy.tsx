export default function TrustedBy() {
  const logos = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
    "Company F",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
          Trusted by
        </p>

        {/* Logo carousel */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-scroll">
            {/* First set */}
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <div className="h-8 flex items-center">
                  <span className="text-gray-400 font-medium text-lg">{logo}</span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless scroll */}
            {logos.map((logo, i) => (
              <div
                key={`dup-${i}`}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <div className="h-8 flex items-center">
                  <span className="text-gray-400 font-medium text-lg">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="badge">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-gray-700">GDPR</span>
          </div>
          <div className="badge">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-gray-700">SOC 2 Compliant</span>
          </div>
          <div className="badge">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-gray-700">ISO 27001</span>
          </div>
        </div>
      </div>
    </section>
  );
}
