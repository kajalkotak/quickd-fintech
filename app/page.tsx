"use client";

import { useState } from "react";

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
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    loanType: "",
    amount: "",
    message: "",
  });

  const handleWhatsApp = () => {
    const text = `
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Loan Type: ${formData.loanType}
Amount: ${formData.amount}
Requirement: ${formData.message}
    `;

    const whatsappUrl = `https://wa.me/919904143222?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      // window.location.href = "/payment";
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#14051F] overflow-hidden">
      {/* Top Gradient */}
      <div className="h-40 bg-gradient-to-r from-[#5B0E74] via-[#8E24AA] to-[#F59E0B] rounded-b-[60px]" />

      {/* Main Container */}
      <div className="max-w-2xl mx-auto px-5 -mt-24 pb-20 relative z-10">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-white rounded-[35px] px-8 py-6 shadow-2xl border border-[#7E22CE]">
            <img
              src="/KRUTIKA DODIYA.png"
              alt="Quickd Fintech Logo"
              className="w-44 md:w-52 object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] tracking-wide">
            QUICKD FINTECH
          </h1>

          <p className="text-[#5B0E74] font-semibold mt-3 text-base md:text-lg">
            SMART TECH.... FAST LENDING....
          </p>

          <p className="text-[#E9D5FF] leading-8 mt-6 max-w-lg mx-auto text-sm md:text-base">
            Professional consultancy for business loans, MSME funding, mortgage
            loans, subsidy guidance & financial solutions.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-6 mt-12">
          {/* Call */}
          <a
            href="tel:9904143222"
            className="group relative overflow-hidden rounded-[26px] md:rounded-[30px] p-[2px] shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#FB7185]" />

            <div className="relative bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[24px] md:rounded-[28px] py-4 md:py-5 px-4 md:px-6 flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#FB7185] flex items-center justify-center text-2xl md:text-3xl shadow-lg text-white">
                  📞
                </div>

                <div>
                  <p className="text-xs md:text-sm text-gray-500">
                    Direct Support
                  </p>

                  <h3 className="text-base md:text-2xl font-bold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
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

            <div className="relative bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[24px] md:rounded-[28px] py-4 md:py-5 px-4 md:px-6 flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-yellow-500 flex items-center justify-center text-2xl md:text-3xl shadow-lg text-white">
                  📸
                </div>

                <div>
                  <p className="text-xs md:text-sm text-gray-500">
                    Daily Updates
                  </p>

                  <h3 className="text-base md:text-2xl font-bold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
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
            href="#consultation"
            className="group relative overflow-hidden rounded-[26px] md:rounded-[30px] p-[2px] shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5B0E74] to-[#8E24AA]" />

            <div className="relative bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[24px] md:rounded-[28px] py-4 md:py-5 px-4 md:px-6 flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#5B0E74] to-[#8E24AA] flex items-center justify-center text-2xl md:text-3xl shadow-lg text-white">
                  📋
                </div>

                <div className="text-left">
                  <p className="text-xs md:text-sm text-gray-500 font-medium">
                    Get Expert Consultation
                  </p>

                  <h3 className="text-base md:text-2xl font-bold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
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

        {/* How It Works */}
        <section className="mt-28">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
              How Does It Work?
            </h2>

            <p className="text-[#5B0E74] font-semibold mt-4 text-lg">
              Simple 3 Step Process
            </p>

            <div className="w-32 h-1.5 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-6 rounded-full" />
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-stretch justify-center gap-8">
            {/* Step 1 */}
            <div className="relative flex-1">
              <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
                <div className="bg-[#FF5A1F] h-36 flex items-center justify-center">
                  <h1 className="text-7xl font-black text-white">01</h1>
                </div>

                <div className="p-10 text-center flex flex-col flex-1">
                  <h3 className="text-3xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                    Paid Consultation
                  </h3>

                  <p className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1">
                    Book your consultation according to your loan requirement
                    and connect with our financial advisor.
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center text-6xl font-black text-[#8E24AA]">
              →
            </div>

            {/* Step 2 */}
            <div className="relative flex-1">
              <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
                <div className="bg-[#4F6BED] h-36 flex items-center justify-center">
                  <h1 className="text-7xl font-black text-white">02</h1>
                </div>

                <div className="p-10 text-center flex flex-col flex-1">
                  <h3 className="text-3xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                    Expert Guidance
                  </h3>

                  <p className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1">
                    Our expert team contacts you and shares a custom document
                    checklist for your profile.
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center text-6xl font-black text-[#8E24AA]">
              →
            </div>

            {/* Step 3 */}
            <div className="relative flex-1">
              <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
                <div className="bg-[#5DBB9A] h-36 flex items-center justify-center">
                  <h1 className="text-7xl font-black text-white">03</h1>
                </div>

                <div className="p-10 text-center flex flex-col flex-1">
                  <h3 className="text-3xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                    Loan Process
                  </h3>

                  <p className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1">
                    Submit documents, choose your preferred bank and we handle
                    the complete loan process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-20 md:mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
              Loan Solutions
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="flex flex-col gap-5 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[28px] p-5 md:p-6 shadow-lg hover:scale-[1.02] transition duration-300 border border-[#7E22CE] text-center"
              >
                <h3 className="text-lg md:text-2xl font-bold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Form */}
        <section id="consultation" className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
              Share Your Requirements
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <form className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[35px] p-5 md:p-8 mt-14 shadow-xl flex flex-col gap-5 border border-[#7E22CE]">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-[#1B0827] border border-[#7E22CE] text-white placeholder:text-[#C084FC] rounded-2xl p-4 md:p-5 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-[#1B0827] border border-[#7E22CE] text-white placeholder:text-[#C084FC] rounded-2xl p-4 md:p-5 outline-none"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              required
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              className="bg-[#1B0827] border border-[#7E22CE] text-white placeholder:text-[#C084FC] rounded-2xl p-4 md:p-5 outline-none"
            />

            <select
              required
              value={formData.loanType}
              onChange={(e) =>
                setFormData({ ...formData, loanType: e.target.value })
              }
              className="bg-[#1B0827] border border-[#7E22CE] text-white placeholder:text-[#C084FC] rounded-2xl p-4 md:p-5 outline-none"
            >
              <option value="">Select Loan Type</option>

              {services.map((service, index) => (
                <option key={index}>{service}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Amount Required (In Lacs)"
              required
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              className="bg-[#1B0827] border border-[#7E22CE] text-white placeholder:text-[#C084FC] rounded-2xl p-4 md:p-5 outline-none"
            />

            <textarea
              rows={5}
              placeholder="Tell us your requirements"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-[#1B0827] border border-[#7E22CE] text-white placeholder:text-[#C084FC] rounded-2xl p-4 md:p-5 outline-none"
            />

            <button
              type="button"
              //   onClick={() => {
              //     if (
              //       !formData.name ||
              //       !formData.email ||
              //       !formData.mobile ||
              //       !formData.loanType ||
              //       !formData.amount ||
              //       !formData.message
              //     ) {
              //       alert("Please fill all fields");
              //       return;
              //     }

              //     setShowPayment(true);

              //     setTimeout(() => {
              //       document.getElementById("payment-section")?.scrollIntoView({
              //         behavior: "smooth",
              //       });
              //     }, 200);
              //   }}
              //   className="bg-gradient-to-r from-[#5B0E74] to-[#F59E0B] text-white rounded-full py-5 text-xl font-bold hover:scale-[1.02] transition duration-300 shadow-lg"
              // >
              //   Book Consultation

              onClick={() => {
                if (
                  !formData.name ||
                  !formData.email ||
                  !formData.mobile ||
                  !formData.loanType ||
                  !formData.amount ||
                  !formData.message
                ) {
                  alert("Please fill all fields");
                  return;
                }

                const message = `Hello Quickd Fintech,

Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Loan Type: ${formData.loanType}
Amount: ${formData.amount}
Requirement: ${formData.message}`;

                const whatsappUrl = `https://wa.me/919227143222?text=${encodeURIComponent(
                  message,
                )}`;

                window.open(whatsappUrl, "_blank");
              }}
              className="bg-gradient-to-r from-[#5B0E74] to-[#F59E0B] text-white rounded-full py-5 text-xl font-bold hover:scale-[1.02] transition duration-300 shadow-lg"
            >
              Free Book Consultation
            </button>
          </form>

          {showPayment && (
            <div
              id="payment-section"
              className="mt-10 bg-[#F3E8FF] rounded-3xl p-5 border border-[#D8B4FE]"
            >
              <h2 className="text-2xl font-bold text-[#2B0B3A] text-center">
                Scan & Pay
              </h2>

              <p className="text-gray-600 text-center mt-3">
                Complete consultation payment to continue
              </p>

              {/* QR */}
              <div className="bg-white rounded-3xl p-5 mt-6 shadow-lg">
                <img
                  src="/scaner_99.jpeg"
                  alt="Payment QR"
                  className="w-full max-w-[260px] mx-auto"
                />
              </div>

              {/* Amount */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">Consultation Fees</p>

                <h3 className="text-4xl font-extrabold text-[#5B0E74] mt-2">
                  ₹99
                </h3>
              </div>

              {/* Transaction ID */}
              <input
                type="text"
                placeholder="Enter Transaction ID"
                id="transactionId"
                className="w-full mt-6 border border-[#E9D5FF] rounded-2xl p-4 outline-none"
              />

              {/* Final Button */}
              <button
                onClick={() => {
                  const transactionId = (
                    document.getElementById("transactionId") as HTMLInputElement
                  ).value;

                  if (!transactionId) {
                    alert("Please enter transaction ID");
                    return;
                  }

                  const message = `Hello Quickd Fintech,

Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Loan Type: ${formData.loanType}
Amount: ${formData.amount}
Requirement: ${formData.message}

Transaction ID: ${transactionId}`;

                  const whatsappUrl = `https://wa.me/919228143222?text=${encodeURIComponent(
                    message,
                  )}`;

                  window.open(whatsappUrl, "_blank");
                }}
                className="w-full mt-5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-full shadow-lg hover:scale-[1.02] transition duration-300"
              >
                I've Completed Payment
              </button>
            </div>
          )}
        </section>

        {/* Why Choose Us */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
              Why Choose Us
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {/* Card 1 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">💼</div>

              <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
                15+ Years Experience
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                Get the best loan guidance from our experienced financial
                consultancy team.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">⚡</div>

              <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
                Fast Processing
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                Quick loan approvals with smooth documentation and hassle-free
                process.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">⭐</div>

              <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
                10000+ Happy Customers
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                Trusted by thousands of customers for loan consultancy and
                financial support.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">🤝</div>

              <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
                Transparency & Trust
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                We believe in ethical consultancy with complete transparency and
                client satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
              Satisfied Clients Reviews
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {/* Review 1 */}
            <div className="bg-white border border-[#E9D5FF] rounded-[30px] p-8 shadow-xl">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>

              <p className="text-[#1E1B4B] text-lg leading-9 mt-5 font-medium">
                Excellent support for my Business Loan process. Team was very
                professional and transparent.
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#1E1B4B]">
                  Rahul Mehta
                </h3>

                <p className="text-gray-500 mt-1">Business Loan</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-[#E9D5FF] rounded-[30px] p-8 shadow-xl">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>

              <p className="text-[#1E1B4B] text-lg leading-9 mt-5 font-medium">
                Smooth documentation and quick approval for my Home Loan.
                Amazing service.
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#1E1B4B]">
                  Priya Sharma
                </h3>

                <p className="text-gray-500 mt-1">Home Loan</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white border border-[#E9D5FF] rounded-[30px] p-8 shadow-xl">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>

              <p className="text-[#1E1B4B] text-lg leading-9 mt-5 font-medium">
                Very fast processing and excellent guidance for my Car Loan.
                Highly recommended.
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#1E1B4B]">
                  Amit Verma
                </h3>

                <p className="text-gray-500 mt-1">Car Loan</p>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white border border-[#E9D5FF] rounded-[30px] p-8 shadow-xl">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>

              <p className="text-[#1E1B4B] text-lg leading-9 mt-5 font-medium">
                Best financial consultancy service. Team explained everything
                clearly and helped throughout the process.
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#1E1B4B]">
                  Neha Patel
                </h3>

                <p className="text-gray-500 mt-1">Project Finance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 bg-gradient-to-br from-[#5B0E74] via-[#7E1F86] to-[#2B0B3A] rounded-[35px] p-6 md:p-10 shadow-2xl text-center text-white overflow-hidden relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F59E0B]/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Footer Logo */}
            <div className="bg-white rounded-[28px] p-4 md:p-5 inline-block shadow-xl">
              <img
                src="/KRUTIKA DODIYA.png"
                alt="Quickd Fintech Logo"
                className="w-36 md:w-44 object-contain"
              />
            </div>

            {/* Brand */}
            <h2 className="text-3xl md:text-4xl font-extrabold mt-6">
              QUICKD FINTECH
            </h2>

            <p className="text-yellow-300 font-semibold mt-3 tracking-wide text-sm md:text-base">
              SMART TECH.... FAST LENDING....
            </p>

            {/* Description */}
            <p className="text-gray-200 leading-8 mt-6 max-w-xl mx-auto text-sm md:text-base">
              Professional consultancy for business loans, MSME funding, subsidy
              guidance, mortgage loans & financial solutions.
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-3">
              <p className="text-base md:text-lg font-medium">
                📞 9904143222 / 9228143222
              </p>

              <p className="text-base md:text-lg font-medium break-all">
                📧 quickdfintech@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="mt-10 text-gray-300 leading-8 text-sm md:text-base">
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Corporate Office
                </h3>

                <p>1st Floor, One Stop Carz,</p>

                <p>Opp. Welcare Hospital,</p>

                <p>Atladara, Vadodara – 390012</p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Registered Office
                </h3>

                <p>2nd Floor, Kevalam Corner,</p>

                <p>Nr. G.T. Seth School,</p>

                <p>KKV Hall, Rajkot – 360005</p>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/20 mt-10 pt-6">
              <p className="text-gray-300 text-sm md:text-base">
                © 2026 QUICKD FINTECH. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
