"use client";

const services = [
  "Business Loan",
  "Cash Credit / Overdraft",
  "Machinery Loan",
  "Home Loan",
  "Loan Against Property",
  "Project Finance",
  "Personal Loan",
  "Construction Loan",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5fb] overflow-hidden">
      {/* Top Gradient */}
      <div className="h-40 bg-gradient-to-r from-[#5B0E74] via-[#8E24AA] to-[#F59E0B] rounded-b-[60px]" />

      {/* Main Container */}
      <div className="max-w-2xl mx-auto px-5 -mt-24 pb-20 relative z-10">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#5B0E74] via-[#8E24AA] to-[#F59E0B] p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <h1 className="text-5xl font-black bg-gradient-to-r from-[#5B0E74] to-[#F59E0B] bg-clip-text text-transparent">
                QF
              </h1>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-8">
          <h1 className="text-5xl font-extrabold text-[#1E1B4B] tracking-wide">
            QUICKD FINTECH
          </h1>

          <p className="text-[#5B0E74] font-semibold mt-3 text-lg">
            SMART TECH.... FAST LENDING....
          </p>

          <p className="text-gray-600 leading-8 mt-6 max-w-lg mx-auto">
            Professional consultancy for business loans, MSME funding, mortgage
            loans, subsidy guidance & financial solutions.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-6 mt-12">
          {/* Call */}
          <a
            href="tel:9228143222"
            className="group relative overflow-hidden rounded-[30px] p-[2px] shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#FB7185]" />

            <div className="relative bg-white rounded-[28px] py-5 px-6 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#FB7185] flex items-center justify-center text-3xl shadow-lg text-white">
                  📞
                </div>

                <div>
                  <p className="text-sm text-gray-500">Direct Support</p>

                  <h3 className="text-2xl font-bold text-[#1E1B4B]">
                    Call Now
                  </h3>
                </div>
              </div>

              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-xl text-orange-500">
                →
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919228143222"
            target="_blank"
            className="group relative overflow-hidden rounded-[30px] p-[2px] shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600" />

            <div className="relative bg-white rounded-[28px] py-5 px-6 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-3xl shadow-lg text-white">
                  💬
                </div>

                <div>
                  <p className="text-sm text-gray-500">Instant Loan Help</p>

                  <h3 className="text-2xl font-bold text-[#1E1B4B]">
                    WhatsApp Consultation
                  </h3>
                </div>
              </div>

              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl text-green-600">
                →
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            className="group relative overflow-hidden rounded-[30px] p-[2px] shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]" />

            <div className="relative bg-white rounded-[28px] py-5 px-6 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-yellow-500 flex items-center justify-center text-3xl shadow-lg text-white">
                  📸
                </div>

                <div>
                  <p className="text-sm text-gray-500">Daily Updates</p>

                  <h3 className="text-2xl font-bold text-[#1E1B4B]">
                    Follow On Instagram
                  </h3>
                </div>
              </div>

              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-xl text-pink-500">
                →
              </div>
            </div>
          </a>

          {/* Consultation */}
          <a
            href="#consultation"
            className="group relative overflow-hidden rounded-[30px] p-[2px] shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5B0E74] to-[#8E24AA]" />

            <div className="relative bg-white rounded-[28px] py-5 px-6 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5B0E74] to-[#8E24AA] flex items-center justify-center text-3xl shadow-lg text-white">
                  📋
                </div>

                <div>
                  <p className="text-sm text-gray-500">Quick Inquiry</p>

                  <h3 className="text-2xl font-bold text-[#1E1B4B]">
                    Book Consultation
                  </h3>
                </div>
              </div>

              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl text-purple-600">
                →
              </div>
            </div>
          </a>
        </div>

        {/* Why Choose Us */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-[#1E1B4B]">
              Why Choose Us
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {/* Card 1 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">💼</div>

              <h3 className="text-2xl font-bold text-[#2B1B12] mt-6">
                15+ Years Experience
              </h3>

              <p className="text-gray-700 leading-8 mt-4">
                Get the best loan guidance from our experienced financial
                consultancy team.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">👨‍💼</div>

              <h3 className="text-2xl font-bold text-[#2B1B12] mt-6">
                Professional Team Guidance
              </h3>

              <p className="text-gray-700 leading-8 mt-4">
                Our expert team supports you throughout the loan process and
                documentation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">⭐</div>

              <h3 className="text-2xl font-bold text-[#2B1B12] mt-6">
                10000+ Happy Customers
              </h3>

              <p className="text-gray-700 leading-8 mt-4">
                Trusted by thousands of customers for loan consultancy and
                financial support.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">📈</div>

              <h3 className="text-2xl font-bold text-[#2B1B12] mt-6">
                Transparency & Ethical Practice
              </h3>

              <p className="text-gray-700 leading-8 mt-4">
                We believe in transparent financial consultancy with long-term
                client relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-[#1E1B4B]">
              Loan Solutions
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="flex flex-col gap-5 mt-14">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] p-6 shadow-lg hover:scale-[1.02] transition duration-300 border border-[#E9D5FF] text-center"
              >
                <h3 className="text-2xl font-bold text-[#1E1B4B]">{service}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation */}
        <section id="consultation" className="mt-24">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-[#1E1B4B]">
              Share Your Requirements
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <form className="bg-white rounded-[35px] p-8 mt-14 shadow-xl flex flex-col gap-5 border border-[#E9D5FF]">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-200 rounded-2xl p-5 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-200 rounded-2xl p-5 outline-none"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="border border-gray-200 rounded-2xl p-5 outline-none"
            />

            <select className="border border-gray-200 rounded-2xl p-5 outline-none">
              <option>Select Loan Type</option>

              {services.map((service, index) => (
                <option key={index}>{service}</option>
              ))}
            </select>

            <textarea
              rows={5}
              placeholder="Tell us your requirements"
              className="border border-gray-200 rounded-2xl p-5 outline-none"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-[#5B0E74] to-[#F59E0B] text-white rounded-full py-5 text-xl font-bold hover:scale-[1.02] transition duration-300 shadow-lg"
            >
              Book Consultation
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-24 bg-gradient-to-br from-[#5B0E74] via-[#7E1F86] to-[#2B0B3A] rounded-[35px] p-10 shadow-2xl text-center text-white overflow-hidden relative">
          {/* Glow Effect */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F59E0B]/20 rounded-full blur-3xl" />

          {/* Logo */}
          <div className="relative z-10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#FB7185] p-1 mx-auto shadow-lg">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <h1 className="text-3xl font-black bg-gradient-to-r from-[#5B0E74] to-[#F59E0B] bg-clip-text text-transparent">
                  QF
                </h1>
              </div>
            </div>

            {/* Brand */}
            <h2 className="text-4xl font-extrabold mt-6">QUICKD FINTECH</h2>

            <p className="text-yellow-300 font-semibold mt-3 tracking-wide">
              SMART TECH.... FAST LENDING....
            </p>

            {/* Description */}
            <p className="text-gray-200 leading-8 mt-6 max-w-xl mx-auto">
              Professional consultancy for business loans, MSME funding, subsidy
              guidance, mortgage loans & financial solutions.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <p className="text-lg font-medium">📞 9904143222 / 9228143222</p>

              <p className="text-lg font-medium">🌐 www.explorebiz.in</p>

              <p className="text-lg font-medium">📧 info@quickdfintech.in</p>
            </div>

            {/* Address */}
            <div className="mt-8 text-gray-300 leading-8">
              <p>C/o. One Stop Carz</p>

              <p>Opp. Welcare Hospital</p>

              <p>Nr. BAPS Circle, Atladara</p>

              <p>Vadodara – 390012</p>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/20 mt-10 pt-6">
              <p className="text-gray-300">
                © 2026 QUICKD FINTECH. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer> 
      </div>
    </main>
  );
}
