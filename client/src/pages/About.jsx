export default function About() {
    return (
      <><section className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Pitanbara</h2>
          <p className="text-gray-700 text-lg">
            Pitanbara is a cybersecurity and legal consultancy firm dedicated to protecting digital assets while ensuring complete regulatory compliance. Our mission is to bridge the critical gap between technical security and legal governance through expert solutions tailored to the modern digital era.
          </p>
        </div>
      </section><section className="py-12 bg-teal-50">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4 text-center">
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To be a globally trusted partner in ensuring digital resilience and legal confidence.
              </p>
            </div>
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-700">
                Empower businesses by integrating cybersecurity best practices with robust legal compliance frameworks.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Certifications & Accreditations</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="p-4 border rounded shadow">
                <div className="text-3xl mb-2">🔐</div>
                <p className="text-sm font-semibold">ISO 27001 Certified</p>
              </div>
              <div className="p-4 border rounded shadow">
                <div className="text-3xl mb-2">🎓</div>
                <p className="text-sm font-semibold">CISA Professional</p>
              </div>
              <div className="p-4 border rounded shadow">
                <div className="text-3xl mb-2">📜</div>
                <p className="text-sm font-semibold">CIPP/E Certified</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-teal-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">Global Presence</h2>
            <p className="text-gray-700 mb-4">Serving clients across:</p>
            <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-800">
              <li>🇮🇳 India</li>
              <li>🇺🇸 USA</li>
              <li>🇬🇧 UK</li>
              <li>🇸🇬 Singapore</li>
              <li>🇦🇺 Australia</li>
              <li>🇩🇪 Germany</li>
            </ul>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
            <div className="space-y-8 border-l-4 border-teal-500 pl-6">
              <div>
                <h4 className="text-xl font-semibold">2015</h4>
                <p className="text-gray-600 text-sm">Company Founded</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">2017</h4>
                <p className="text-gray-600 text-sm">First 10 Clients Secured</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">2019</h4>
                <p className="text-gray-600 text-sm">ISO 27001 Certified</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">2021</h4>
                <p className="text-gray-600 text-sm">Expanded to International Market</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">2024</h4>
                <p className="text-gray-600 text-sm">Launched Cyber-Legal Training Program</p>
              </div>
            </div>
          </div>
        </section>
        </>
    )
  }
  