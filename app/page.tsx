"use client";

const services = [
  "Business Loan",
  "Car Loan",
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
      <div className="h-32 md:h-40 bg-gradient-to-r from-[#5B0E74] via-[#8E24AA] to-[#F59E0B] rounded-b-[40px] md:rounded-b-[60px]" />

      {/* Main Container */}
      <div className="max-w-2xl mx-auto px-4 md:px-5 -mt-20 md:-mt-24 pb-20 relative z-10">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-white rounded-[28px] md:rounded-[35px] px-5 md:px-8 py-4 md:py-6 shadow-2xl border border-[#E9D5FF]">
            <img
              src="/KRUTIKA DODIYA.png"
              alt="Quickd Fintech Logo"
              className="w-32 md:w-52 object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1E1B4B] tracking-wide leading-tight">
            QUICKD FINTECH
          </h1>

          <p className="text-[#5B0E74] font-semibold mt-3 text-sm md:text-lg">
            SMART TECH.... FAST LENDING....
          </p>

          <p className="text-gray-600 leading-7 md:leading-8 mt-5 md:mt-6 max-w-lg mx-auto text-sm md:text-base px-2">
            Professional consultancy for business loans, MSME funding, mortgage
            loans, subsidy guidance & financial solutions.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-5 md:gap-6 mt-10 md:mt-12">
          {/* Call */}
          <a
            href="tel:9904143222"
            className="group relative overflow-hidden rounded-[26px] md:rounded-[30px] p-[2px] shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#FB7185]" />

            <div className="relative bg-white rounded-[24px] md:rounded-[28px] py-4 md:py-5 px-4 md:px-6 flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#FB7185] flex items-center justify-center text-2xl md:text-3xl shadow-lg text-white">
                  📞
                </div>

                <div>
                  <p className="text-xs md:text-sm text-gray-500">
                    Direct Support
                  </p>

                  <h3 className="text-base md:text-2xl font-bold text-[#1E1B4B]">
                    Call Now
                  </h3>
                </div>
              </div>

              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-100 flex items-center justify-center text-lg md:text-xl text-orange-500">
                →
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/quickdfintech?igsh=MWI5d2xqc3o4MXk0aw=="
            target="_blank"
            className="group relative overflow-hidden rounded-[26px] md:rounded-[30px] p-[2px] shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]" />

            <div className="relative bg-white rounded-[24px] md:rounded-[28px] py-4 md:py-5 px-4 md:px-6 flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-yellow-500 flex items-center justify-center text-2xl md:text-3xl shadow-lg text-white">
                  📸
                </div>

                <div>
                  <p className="text-xs md:text-sm text-gray-500">
                    Daily Updates
                  </p>

                  <h3 className="text-base md:text-2xl font-bold text-[#1E1B4B]">
                    Follow On Instagram
                  </h3>
                </div>
              </div>

              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-100 flex items-center justify-center text-lg md:text-xl text-pink-500">
                →
              </div>
            </div>
          </a>

          {/* Consultation */}
          <a
            href="  "
            className="group relative overflow-hidden rounded-[26px] md:rounded-[30px] p-[2px] shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5B0E74] to-[#8E24AA]" />

            <div className="relative bg-white rounded-[24px] md:rounded-[28px] py-4 md:py-5 px-4 md:px-6 flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#5B0E74] to-[#8E24AA] flex items-center justify-center text-2xl md:text-3xl shadow-lg text-white">
                  📋
                </div>

                <div>
                  <p className="text-xs md:text-sm text-gray-500">
                    Quick Inquiry
                  </p>

                  <h3 className="text-base md:text-2xl font-bold text-[#1E1B4B]">
                    Book Consultation
                  </h3>
                </div>
              </div>

              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center text-lg md:text-xl text-purple-600">
                →
              </div>
            </div>
          </a>
        </div>

        {/* Why Choose Us */}
        <section className="mt-20 md:mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E1B4B]">
              Why Choose Us
            </h2>

            <div className="w-24 md:w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8 mt-12 md:mt-14">
            {[
              {
                icon: "💼",
                title: "15+ Years Experience",
                desc: "Get the best loan guidance from our experienced financial consultancy team.",
              },
              {
                icon: "👨‍💼",
                title: "Professional Team Guidance",
                desc: "Our expert team supports you throughout the loan process and documentation.",
              },
              {
                icon: "⭐",
                title: "10000+ Happy Customers",
                desc: "Trusted by thousands of customers for loan consultancy and financial support.",
              },
              {
                icon: "📈",
                title: "Transparency & Ethical Practice",
                desc: "We believe in transparent financial consultancy with long-term client relationships.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#E9D5FF] rounded-3xl p-6 md:p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="text-5xl md:text-6xl">{item.icon}</div>

                <h3 className="text-lg md:text-2xl font-bold text-[#2B1B12] mt-5 md:mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-7 md:leading-8 mt-4 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mt-20 md:mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E1B4B]">
              Loan Solutions
            </h2>

            <div className="w-24 md:w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="flex flex-col gap-4 md:gap-5 mt-12 md:mt-14">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] md:rounded-[28px] p-5 md:p-6 shadow-lg hover:scale-[1.02] transition duration-300 border border-[#E9D5FF] text-center"
              >
                <h3 className="text-base md:text-2xl font-bold text-[#1E1B4B]">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation */}
        <section id="consultation" className="mt-20 md:mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E1B4B]">
              Share Your Requirements
            </h2>

            <div className="w-24 md:w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <form className="bg-white rounded-[28px] md:rounded-[35px] p-5 md:p-8 mt-12 md:mt-14 shadow-xl flex flex-col gap-4 md:gap-5 border border-[#E9D5FF]">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-200 rounded-2xl p-4 text-base outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-200 rounded-2xl p-4 text-base outline-none"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="border border-gray-200 rounded-2xl p-4 text-base outline-none"
            />

            <select className="border border-gray-200 rounded-2xl p-4 text-base outline-none">
              <option>Select Loan Type</option>

              {services.map((service, index) => (
                <option key={index}>{service}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Amount Required (In Lacs)"
              className="border border-gray-200 rounded-2xl p-4 text-base outline-none"
            />

            <textarea
              rows={5}
              placeholder="Tell us your requirements"
              className="border border-gray-200 rounded-2xl p-4 text-base outline-none"
            />

            <a
              href="/payment"
              className="bg-gradient-to-r from-[#5B0E74] to-[#F59E0B] text-white rounded-full py-5 text-xl font-bold hover:scale-[1.02] transition duration-300 shadow-lg text-center"
            >
              Book Consultation
            </a>
          </form>
        </section>

        {/* Customer Reviews */}
        <section className="mt-20 md:mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2B0B3A] drop-shadow-sm">
              Customer Reviews
            </h2>

            <div className="w-24 md:w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="flex flex-col gap-6 mt-12">
            {/* Review 1 */}
            <div className="bg-gradient-to-r from-[#5B0E74] to-[#8E24AA] p-[2px] rounded-[28px] shadow-2xl">
              <div className="bg-[#EEE5FF] rounded-[26px] p-5 md:p-7 border border-[#C084FC]">
                <p className="text-[#2B0B3A] text-base md:text-xl leading-8 font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                  Excellent support for my Business Loan process. Team was very
                  professional and transparent throughout the journey.
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#5B0E74] to-[#F59E0B] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    RM
                  </div>

                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-[#1E1B4B]">
                      Rahul Mehta
                    </h3>

                    <p className="text-yellow-500 text-sm md:text-base">
                      ⭐⭐⭐⭐⭐
                    </p>

                    <p className="text-gray-600 text-sm mt-1">
                      Business Loan • April 12, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gradient-to-r from-[#5B0E74] to-[#8E24AA] p-[2px] rounded-[28px] shadow-2xl">
              <div className="bg-[#EEE5FF] rounded-[26px] p-5 md:p-7 border border-[#C084FC]">
                <p className="text-[#2B0B3A] text-base md:text-xl leading-8 font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                  Got quick approval for my Home Loan. Smooth documentation and
                  excellent guidance from the team.
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#5B0E74] to-[#F59E0B] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    PS
                  </div>

                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-[#1E1B4B]">
                      Priya Sharma
                    </h3>

                    <p className="text-yellow-500 text-sm md:text-base">
                      ⭐⭐⭐⭐⭐
                    </p>

                    <p className="text-gray-600 text-sm mt-1">
                      Home Loan • January 08, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gradient-to-r from-[#5B0E74] to-[#8E24AA] p-[2px] rounded-[28px] shadow-2xl">
              <div className="bg-[#EEE5FF] rounded-[26px] p-5 md:p-7 border border-[#C084FC]">
                <p className="text-[#2B0B3A] text-base md:text-xl leading-8 font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                  Very good consultancy for Car Loan. Process was fast and
                  interest rate guidance was amazing.
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#5B0E74] to-[#F59E0B] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    AV
                  </div>

                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-[#1E1B4B]">
                      Amit Verma
                    </h3>

                    <p className="text-yellow-500 text-sm md:text-base">
                      ⭐⭐⭐⭐⭐
                    </p>

                    <p className="text-gray-600 text-sm mt-1">
                      Car Loan • August 16, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-gradient-to-r from-[#5B0E74] to-[#8E24AA] p-[2px] rounded-[28px] shadow-2xl">
              <div className="bg-[#EEE5FF] rounded-[26px] p-5 md:p-7 border border-[#C084FC]">
                <p className="text-[#2B0B3A] text-base md:text-xl leading-8 font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                  Excellent service for Project Finance. Team explained
                  everything clearly and helped us get fast approval.
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#5B0E74] to-[#F59E0B] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    GK
                  </div>

                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-[#1E1B4B]">
                      Gaurav Khanna
                    </h3>

                    <p className="text-yellow-500 text-sm md:text-base">
                      ⭐⭐⭐⭐⭐
                    </p>

                    <p className="text-gray-600 text-sm mt-1">
                      Project Finance • June 19, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 md:mt-24 bg-gradient-to-br from-[#5B0E74] via-[#7E1F86] to-[#2B0B3A] rounded-[28px] md:rounded-[35px] p-6 md:p-10 shadow-2xl text-center text-white overflow-hidden relative">
          <div className="absolute -top-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-[#F59E0B]/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Footer Logo */}
            <div className="bg-white rounded-[24px] md:rounded-[30px] px-5 md:px-6 py-4 md:py-5 shadow-xl inline-block">
              <img
                src="/KRUTIKA DODIYA.png"
                alt="Quickd Fintech Logo"
                className="w-28 md:w-40 object-contain"
              />
            </div>

            {/* Brand */}
            <h2 className="text-2xl md:text-4xl font-extrabold mt-6">
              QUICKD FINTECH
            </h2>

            <p className="text-yellow-300 font-semibold mt-3 tracking-wide text-sm md:text-base">
              SMART TECH.... FAST LENDING....
            </p>

            {/* Description */}
            <p className="text-gray-200 leading-7 md:leading-8 mt-5 md:mt-6 max-w-xl mx-auto text-sm md:text-base px-2">
              Professional consultancy for business loans, MSME funding, subsidy
              guidance, mortgage loans & financial solutions.
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:9904143222"
                className="flex items-center justify-center gap-3 bg-white/10 border border-white/10 rounded-2xl py-4 px-4 backdrop-blur-sm"
              >
                <span className="text-2xl">📞</span>

                <div>
                  <p className="text-xs text-gray-300">Call Us</p>

                  <p className="font-semibold text-sm md:text-base">
                    9904143222 / 9228143222
                  </p>
                </div>
              </a>

              <div className="flex items-center justify-center gap-3 bg-white/10 border border-white/10 rounded-2xl py-4 px-4 backdrop-blur-sm">
                <span className="text-2xl">📧</span>

                <div>
                  <p className="text-xs text-gray-300">Email Address</p>

                  <p className="font-semibold text-sm md:text-base break-all">
                    quickdfintech@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mt-10 grid gap-6">
              {/* Corporate */}
              <div className="bg-white/10 rounded-3xl p-5 md:p-6 border border-white/10 backdrop-blur-sm">
                <h3 className="text-lg md:text-2xl font-bold text-yellow-300 mb-4">
                  Corporate Office
                </h3>

                <p className="text-gray-200 leading-7 text-sm md:text-base">
                  1st Floor, One Stop Carz,
                  <br />
                  Opp. Welcare Hospital,
                  <br />
                  Atladara, Vadodara – 390012
                </p>
              </div>

              {/* Registered */}
              <div className="bg-white/10 rounded-3xl p-5 md:p-6 border border-white/10 backdrop-blur-sm">
                <h3 className="text-lg md:text-2xl font-bold text-yellow-300 mb-4">
                  Registered Office
                </h3>

                <p className="text-gray-200 leading-7 text-sm md:text-base">
                  2nd Floor, Kevalam Corner,
                  <br />
                  Nr. G.T. Seth School,
                  <br />
                  KKV Hall, Rajkot – 360005
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/20 mt-10 pt-6">
              <p className="text-gray-300 text-xs md:text-sm leading-6">
                © 2026 QUICKD FINTECH. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
