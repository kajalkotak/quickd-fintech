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

const translations = {
  en: {
    tagline: "SMART TECH.... FAST LENDING....",
    description:
      "Professional consultancy for business loans, MSME funding, mortgage loans, subsidy guidance & financial solutions.",

    callNow: "Call Now",
    directSupport: "Direct Support",

    followInstagram: "Follow On Instagram",
    dailyUpdates: "Daily Updates",

    consultation: "Book Free Consultation",
    expertConsultation: "Get Expert Consultation",

    howWorks: "How Does It Work?",
    process: "Simple 3 Step Process",

    loanSolutions: "Loan Solutions",
    requirements: "Share Your Requirements",

    whyChoose: "Why Choose Us",
    reviews: "Satisfied Clients Reviews",

    fullName: "Full Name",
    email: "Email Address",
    mobile: "Mobile Number",
    selectLoan: "Select Loan Type",
    amount: "Amount Required (In Lacs)",
    message: "Tell us your requirements",
  },

  gu: {
    tagline: "સ્માર્ટ ટેક.... ફાસ્ટ લેન્ડિંગ....",
    description:
      "બિઝનેસ લોન, MSME ફંડિંગ, મોર્ટગેજ લોન, સબસિડી માર્ગદર્શન અને ફાઇનાન્સિયલ સોલ્યુશન્સ માટે વ્યાવસાયિક સલાહ.",

    callNow: "હવે કોલ કરો",
    directSupport: "સીધી મદદ",

    followInstagram: "ઇન્સ્ટાગ્રામ પર ફોલો કરો",
    dailyUpdates: "દૈનિક અપડેટ્સ",

    consultation: "ફ્રી કન્સલ્ટેશન બુક કરો",
    expertConsultation: "નિષ્ણાત સલાહ મેળવો",

    howWorks: "આ કેવી રીતે કામ કરે છે?",
    process: "સરળ 3 સ્ટેપ પ્રક્રિયા",

    loanSolutions: "લોન સોલ્યુશન્સ",
    requirements: "તમારી જરૂરિયાત શેર કરો",

    whyChoose: "અમને શા માટે પસંદ કરો?",
    reviews: "સંતોષકારક ગ્રાહક પ્રતિભાવો",

    fullName: "પૂરું નામ",
    email: "ઈમેલ એડ્રેસ",
    mobile: "મોબાઇલ નંબર",
    selectLoan: "લોન પ્રકાર પસંદ કરો",
    amount: "જરૂરી રકમ (લાખમાં)",
    message: "તમારી જરૂરિયાત લખો",
  },
};

export default function Home() {
  const [showPayment, setShowPayment] = useState(false);
  const [language, setLanguage] = useState("en");
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
        <div className="flex justify-center gap-4 mt-6 mb-6">
          <button
            onClick={() => setLanguage("en")}
            className={`px-5 py-2 rounded-full font-bold ${
              language === "en"
                ? "bg-[#5B0E74] text-white"
                : "bg-white text-[#5B0E74]"
            }`}
          >
            English
          </button>

          <button
            onClick={() => setLanguage("gu")}
            className={`px-5 py-2 rounded-full font-bold ${
              language === "gu"
                ? "bg-[#5B0E74] text-white"
                : "bg-white text-[#5B0E74]"
            }`}
          >
            ગુજરાતી
          </button>
        </div>
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
            {language === "en" ? "QUICKD FINTECH" : "ક્વિકડ ફિનટેક"}
          </h1>

          <p className="text-[#5B0E74] font-semibold mt-3 text-base md:text-lg">
            {language === "en"
              ? "SMART TECH.... FAST LENDING...."
              : "સ્માર્ટ ટેક.... ફાસ્ટ લેન્ડિંગ...."}
          </p>

          <p className="text-[#E9D5FF] leading-8 mt-6 max-w-lg mx-auto text-sm md:text-base">
            {language === "en"
              ? "Professional consultancy for business loans, MSME funding, mortgage loans, subsidy guidance & financial solutions."
              : "બિઝનેસ લોન, MSME ફંડિંગ, મોર્ટગેજ લોન, સબસિડી માર્ગદર્શન અને ફાઇનાન્સિયલ સોલ્યુશન્સ માટે વ્યાવસાયિક સલાહ."}
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
                    {language === "en" ? "Direct Support" : "સીધી મદદ"}
                  </p>

                  <h3 className="text-base md:text-2xl font-bold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                    {language === "en" ? "Call Now" : "હવે કોલ કરો"}
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
                    {language === "en" ? "Daily Updates" : "દૈનિક અપડેટ્સ"}
                  </p>

                  <h3 className="text-base md:text-2xl font-bold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                    {language === "en"
                      ? "Follow On Instagram"
                      : "ઇન્સ્ટાગ્રામ પર ફોલો કરો"}
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
                    {language === "en"
                      ? "Get Expert Consultation"
                      : "નિષ્ણાત સલાહ મેળવો"}
                  </p>

                  <h3 className="text-base md:text-2xl font-bold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                    {language === "en"
                      ? "Book Consultation"
                      : "કન્સલ્ટેશન બુક કરો"}
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
              {language === "en"
                ? "How We Help You Get Loan Approval"
                : "લોન મંજૂરીમાં અમે કેવી રીતે મદદ કરીએ છીએ"}
            </h2>

            <p className="text-[#5B0E74] font-semibold mt-4 text-lg">
              {language === "en"
                ? "Professional 7-Step Loan Assistance Process"
                : "વ્યાવસાયિક 7-સ્ટેપ લોન સહાય પ્રક્રિયા"}
            </p>

            <div className="w-32 h-1.5 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-6 rounded-full" />
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* step 1 */}
            <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
              <div className="bg-[#FF5A1F] h-36 flex items-center justify-center">
                <h1 className="text-7xl font-black text-white">01</h1>
              </div>

              <div className="p-10 text-center flex flex-col flex-1">
                <h3 className="text-3xl font-extrabold text-white">
                  {language === "en" ? "Eligibility Check" : "પાત્રતા ચકાસણી"}
                </h3>

                <div className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1 text-left">
                  {language === "en" ? (
                    <>
                      <p>• Eligibility Check</p>
                      <p>• Document Verification</p>
                      <p>• Financial Institution Guidelines Check</p>
                    </>
                  ) : (
                    <>
                      <p>• પાત્રતા ચકાસણી</p>
                      <p>• દસ્તાવેજ ચકાસણી</p>
                      <p>• ફાઇનાન્સિયલ સંસ્થાની માર્ગદર્શિકા ચકાસણી</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* step 2 */}

            <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
              <div className="bg-[#4F6BED] h-36 flex items-center justify-center">
                <h1 className="text-7xl font-black text-white">02</h1>
              </div>

              <div className="p-10 text-center flex flex-col flex-1">
                <h3 className="text-3xl font-extrabold text-white">
                  {language === "en" ? "Expert Guidance" : "નિષ્ણાત માર્ગદર્શન"}
                </h3>

                <div className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1 text-left">
                  {language === "en" ? (
                    <>
                      <p>• 15+ Years Experience</p>
                      <p>• Financial Advisory Support</p>
                      <p>• Best Funding Solutions</p>
                    </>
                  ) : (
                    <>
                      <p>• 15+ વર્ષનો અનુભવ</p>
                      <p>• ફાઇનાન્સિયલ સલાહ</p>
                      <p>• શ્રેષ્ઠ ફંડિંગ સોલ્યુશન</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* step 3 */}

            <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
              <div className="bg-[#F59E0B] h-36 flex items-center justify-center">
                <h1 className="text-7xl font-black text-white">03</h1>
              </div>

              <div className="p-10 text-center flex flex-col flex-1">
                <h3 className="text-3xl font-extrabold text-white">
                  {language === "en"
                    ? "Government Subsidy & Benefits"
                    : "સરકારી સબસિડી અને લાભ"}
                </h3>

                <div className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1 text-left">
                  {language === "en" ? (
                    <>
                      <p>• Government Schemes</p>
                      <p>• Subsidy Eligibility</p>
                      <p>• Benefits Guidance</p>
                    </>
                  ) : (
                    <>
                      <p>• સરકારી યોજનાઓ</p>
                      <p>• સબસિડી પાત્રતા</p>
                      <p>• લાભ માર્ગદર્શન</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* step 4 */}

            <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
              <div className="bg-[#EC4899] h-36 flex items-center justify-center">
                <h1 className="text-7xl font-black text-white">04</h1>
              </div>

              <div className="p-10 text-center flex flex-col flex-1">
                <h3 className="text-3xl font-extrabold text-white">
                  {language === "en"
                    ? "Bank Charges Analysis"
                    : "બેંક ચાર્જિસ વિશ્લેષણ"}
                </h3>

                <div className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1 text-left">
                  {language === "en" ? (
                    <>
                      <p>• Bank Charges Analysis</p>
                      <p>• Avoid Unnecessary Charges</p>
                      <p>• Best Banking Options</p>
                    </>
                  ) : (
                    <>
                      <p>• બેંક ચાર્જિસ વિશ્લેષણ</p>
                      <p>• બિનજરૂરી ચાર્જિસ ટાળો</p>
                      <p>• શ્રેષ્ઠ બેંક વિકલ્પો</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* step 5 */}

            <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
              <div className="bg-[#10B981] h-36 flex items-center justify-center">
                <h1 className="text-7xl font-black text-white">05</h1>
              </div>

              <div className="p-10 text-center flex flex-col flex-1">
                <h3 className="text-3xl font-extrabold text-white">
                  {language === "en"
                    ? "Collateral Free Loan"
                    : "કોલેટરલ ફ્રી લોન"}
                </h3>

                <div className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1 text-left">
                  {language === "en" ? (
                    <>
                      <p>• CGTMSE Scheme</p>
                      <p>• Collateral Free Loan</p>
                      <p>• Funding Options</p>
                    </>
                  ) : (
                    <>
                      <p>• CGTMSE યોજના</p>
                      <p>• કોલેટરલ ફ્રી લોન</p>
                      <p>• ફંડિંગ વિકલ્પો</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* step 6 */}

            <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
              <div className="bg-[#6366F1] h-36 flex items-center justify-center">
                <h1 className="text-7xl font-black text-white">06</h1>
              </div>

              <div className="p-10 text-center flex flex-col flex-1">
                <h3 className="text-3xl font-extrabold text-white">
                  {language === "en" ? "Zero Advance Fees" : "શૂન્ય એડવાન્સ ફી"}
                </h3>

                <div className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1 text-left">
                  {language === "en" ? (
                    <>
                      <p>• Zero Advance Fees</p>
                      <p>• Transparent Process</p>
                      <p>• No Hidden Charges</p>
                    </>
                  ) : (
                    <>
                      <p>• શૂન્ય એડવાન્સ ફી</p>
                      <p>• પારદર્શક પ્રક્રિયા</p>
                      <p>• કોઈ છુપાયેલા ચાર્જિસ નહીં</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* step 7 */}

            <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
              <div className="bg-[#EF4444] h-36 flex items-center justify-center">
                <h1 className="text-7xl font-black text-white">07</h1>
              </div>

              <div className="p-10 text-center flex flex-col flex-1">
                <h3 className="text-3xl font-extrabold text-white">
                  {language === "en" ? "Lower Interest Rate" : "ઓછો વ્યાજ દર"}
                </h3>

                <div className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1 text-left">
                  {language === "en" ? (
                    <>
                      <p>• Lower Interest Rate</p>
                      <p>• Best ROI Options</p>
                      <p>• Bank Comparison Support</p>
                    </>
                  ) : (
                    <>
                      <p>• ઓછો વ્યાજ દર</p>
                      <p>• શ્રેષ્ઠ ROI વિકલ્પો</p>
                      <p>• બેંક તુલના સહાય</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* step 8 */}

            <div className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(91,14,116,0.15)] border border-[#7E22CE] hover:-translate-y-3 transition duration-300 h-full flex flex-col">
              <div className="bg-[#14B8A6] h-36 flex items-center justify-center">
                <h1 className="text-7xl font-black text-white">08</h1>
              </div>

              <div className="p-10 text-center flex flex-col flex-1">
                <h3 className="text-3xl font-extrabold text-white">
                  {language === "en"
                    ? "Loan Processing Support"
                    : "લોન પ્રોસેસિંગ સપોર્ટ"}
                </h3>

                <div className="text-[#E9D5FF] leading-8 mt-6 text-lg flex-1 text-left">
                  {language === "en" ? (
                    <>
                      <p>• Documentation Support</p>
                      <p>• Bank Follow-up</p>
                      <p>• Final Approval Assistance</p>
                    </>
                  ) : (
                    <>
                      <p>• દસ્તાવેજ પ્રક્રિયા</p>
                      <p>• બેંક ફોલોઅપ</p>
                      <p>• અંતિમ મંજૂરી સુધી સહાય</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-20 md:mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
              {language === "en" ? "Loan Solutions" : "લોન સોલ્યુશન્સ"}
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="flex flex-col gap-5 mt-12">
            {(language === "en"
              ? [
                  "Business Loan",
                  "Car Loan",
                  "Cash Credit / Overdraft",
                  "Machinery Loan",
                  "Home Loan",
                  "Loan Against Property",
                  "Project Finance",
                  "Personal Loan",
                  "Construction Loan",
                ]
              : [
                  "બિઝનેસ લોન",
                  "કાર લોન",
                  "કેશ ક્રેડિટ / ઓવરડ્રાફ્ટ",
                  "મશીનરી લોન",
                  "હોમ લોન",
                  "પ્રોપર્ટી સામે લોન",
                  "પ્રોજેક્ટ ફાઇનાન્સ",
                  "પર્સનલ લોન",
                  "કન્સ્ટ્રક્શન લોન",
                ]
            ).map((service, index) => (
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
              {language === "en"
                ? "Share Your Requirements"
                : "તમારી જરૂરિયાત શેર કરો"}
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <form className="bg-gradient-to-br from-[#2B0B3A] via-[#4B1363] to-[#5B0E74] rounded-[35px] p-5 md:p-8 mt-14 shadow-xl flex flex-col gap-5 border border-[#7E22CE]">
            <input
              type="text"
              placeholder={language === "en" ? "Full Name" : "પૂરું નામ"}
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-[#1B0827] border border-[#7E22CE] text-white placeholder:text-[#C084FC] rounded-2xl p-4 md:p-5 outline-none"
            />

            <input
              type="email"
              placeholder={language === "en" ? "Email Address" : "ઈમેલ એડ્રેસ"}
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-[#1B0827] border border-[#7E22CE] text-white placeholder:text-[#C084FC] rounded-2xl p-4 md:p-5 outline-none"
            />

            <input
              type="text"
              placeholder={language === "en" ? "Mobile Number" : "મોબાઇલ નંબર"}
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
              className="bg-[#1B0827] border border-[#7E22CE] text-white rounded-2xl p-4 md:p-5 outline-none"
            >
              <option value="">
                {language === "en" ? "Select Loan Type" : "લોન પ્રકાર પસંદ કરો"}
              </option>

              {(language === "en"
                ? [
                    "Business Loan",
                    "Car Loan",
                    "Cash Credit / Overdraft",
                    "Machinery Loan",
                    "Home Loan",
                    "Loan Against Property",
                    "Project Finance",
                    "Personal Loan",
                    "Construction Loan",
                  ]
                : [
                    "બિઝનેસ લોન",
                    "કાર લોન",
                    "કેશ ક્રેડિટ / ઓવરડ્રાફ્ટ",
                    "મશીનરી લોન",
                    "હોમ લોન",
                    "પ્રોપર્ટી સામે લોન",
                    "પ્રોજેક્ટ ફાઇનાન્સ",
                    "પર્સનલ લોન",
                    "કન્સ્ટ્રક્શન લોન",
                  ]
              ).map((service, index) => (
                <option key={index}>{service}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder={
                language === "en"
                  ? "Amount Required (In Lacs)"
                  : "જરૂરી રકમ (લાખમાં)"
              }
              required
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              className="bg-[#1B0827] border border-[#7E22CE] text-white placeholder:text-[#C084FC] rounded-2xl p-4 md:p-5 outline-none"
            />

            <textarea
              rows={5}
              placeholder={
                language === "en"
                  ? "Tell us your requirements"
                  : "તમારી જરૂરિયાત લખો"
              }
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-[#1B0827] border border-[#7E22CE] text-white placeholder:text-[#C084FC] rounded-2xl p-4 md:p-5 outline-none"
            />

            <button
              type="button"
              onClick={() => {
                if (
                  !formData.name ||
                  !formData.email ||
                  !formData.mobile ||
                  !formData.loanType ||
                  !formData.amount ||
                  !formData.message
                ) {
                  alert(
                    language === "en"
                      ? "Please fill all fields"
                      : "કૃપા કરીને બધી માહિતી भरो",
                  );
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
              {language === "en"
                ? "Book Free Consultation"
                : "ફ્રી કન્સલ્ટેશન બુક કરો"}
            </button>
          </form>

          {showPayment && (
            <div
              id="payment-section"
              className="mt-10 bg-[#F3E8FF] rounded-3xl p-5 border border-[#D8B4FE]"
            >
              <h2 className="text-2xl font-bold text-[#2B0B3A] text-center">
                {language === "en" ? "Scan & Pay" : "સ્કેન કરો અને પેમેન્ટ કરો"}
              </h2>

              <p className="text-gray-600 text-center mt-3">
                {language === "en"
                  ? "Complete consultation payment to continue"
                  : "આગળ વધવા માટે કન્સલ્ટેશન પેમેન્ટ પૂર્ણ કરો"}
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
                <p className="text-gray-500 text-sm">
                  {language === "en" ? "Consultation Fees" : "કન્સલ્ટેશન ફી"}
                </p>

                <h3 className="text-4xl font-extrabold text-[#5B0E74] mt-2">
                  ₹99
                </h3>
              </div>

              {/* Transaction ID */}
              <input
                type="text"
                placeholder={
                  language === "en"
                    ? "Enter Transaction ID"
                    : "ટ્રાન્ઝેક્શન આઈડી દાખલ કરો"
                }
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
                    alert(
                      language === "en"
                        ? "Please enter transaction ID"
                        : "કૃપા કરીને ટ્રાન્ઝેક્શન આઈડી દાખલ કરો",
                    );

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
                {language === "en"
                  ? "I've Completed Payment"
                  : "મેં પેમેન્ટ પૂર્ણ કર્યું"}
              </button>
            </div>
          )}
        </section>

        {/* Why Choose Us */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
              {language === "en" ? "Why Choose Us" : "અમને શા માટે પસંદ કરો?"}
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {/* Card 1 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">💼</div>

              <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
                {language === "en"
                  ? "15+ Years Experience"
                  : "15+ વર્ષનો અનુભવ"}
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                {language === "en"
                  ? "Get the best loan guidance from our experienced financial consultancy team."
                  : "અમારી અનુભવી ફાઇનાન્સિયલ કન્સલ્ટન્સી ટીમ પાસેથી શ્રેષ્ઠ લોન માર્ગદર્શન મેળવો."}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">⚡</div>

              <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
                {language === "en" ? "Fast Processing" : "ઝડપી પ્રક્રિયા"}
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                {language === "en"
                  ? "Quick loan approvals with smooth documentation and hassle-free process."
                  : "સરળ ડોક્યુમેન્ટેશન અને સરળ પ્રક્રિયા સાથે ઝડપી લોન મંજૂરી."}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">⭐</div>

              <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
                {language === "en"
                  ? "10000+ Happy Customers"
                  : "10000+ ખુશ ગ્રાહકો"}
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                {language === "en"
                  ? "Trusted by thousands of customers for loan consultancy and financial support."
                  : "હજારો ગ્રાહકો દ્વારા વિશ્વાસપાત્ર લોન કન્સલ્ટન્સી અને ફાઇનાન્સિયલ સપોર્ટ."}
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="text-6xl">🤝</div>

              <h3 className="text-2xl font-bold text-[#1E1B4B] mt-6">
                {language === "en"
                  ? "Transparency & Trust"
                  : "પારદર્શિતા અને વિશ્વાસ"}
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                {language === "en"
                  ? "We believe in ethical consultancy with complete transparency and client satisfaction."
                  : "અમે સંપૂર્ણ પારદર્શિતા અને ગ્રાહક સંતોષ સાથે નૈતિક કન્સલ્ટન્સીમાં વિશ્વાસ રાખીએ છીએ."}
              </p>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="mt-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
              {language === "en"
                ? "Satisfied Clients Reviews"
                : "સંતોષકારક ગ્રાહક પ્રતિભાવો"}
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8E24AA] mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {/* Review 1 */}
            <div className="bg-white border border-[#E9D5FF] rounded-[30px] p-8 shadow-xl">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>

              <p className="text-[#1E1B4B] text-lg leading-9 mt-5 font-medium">
                {language === "en"
                  ? "Excellent support for my Business Loan process. Team was very professional and transparent."
                  : "મારી બિઝનેસ લોન પ્રક્રિયા માટે ઉત્તમ સહાય મળી. ટીમ ખૂબ જ વ્યાવસાયિક અને પારદર્શક હતી."}
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#1E1B4B]">
                  Rahul Mehta
                </h3>

                <p className="text-gray-500 mt-1">
                  {language === "en" ? "Business Loan" : "બિઝનેસ લોન"}
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-[#E9D5FF] rounded-[30px] p-8 shadow-xl">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>

              <p className="text-[#1E1B4B] text-lg leading-9 mt-5 font-medium">
                {language === "en"
                  ? "Smooth documentation and quick approval for my Home Loan. Amazing service."
                  : "મારી હોમ લોન માટે સરળ ડોક્યુમેન્ટેશન અને ઝડપી મંજૂરી મળી. અદ્ભુત સેવા."}
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#1E1B4B]">
                  Priya Sharma
                </h3>

                <p className="text-gray-500 mt-1">
                  {language === "en" ? "Home Loan" : "હોમ લોન"}
                </p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white border border-[#E9D5FF] rounded-[30px] p-8 shadow-xl">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>

              <p className="text-[#1E1B4B] text-lg leading-9 mt-5 font-medium">
                {language === "en"
                  ? "Very fast processing and excellent guidance for my Car Loan. Highly recommended."
                  : "મારી કાર લોન માટે ખૂબ જ ઝડપી પ્રક્રિયા અને ઉત્તમ માર્ગદર્શન મળ્યું. ખૂબ ભલામણ કરું છું."}
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#1E1B4B]">
                  Amit Verma
                </h3>

                <p className="text-gray-500 mt-1">
                  {language === "en" ? "Car Loan" : "કાર લોન"}
                </p>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white border border-[#E9D5FF] rounded-[30px] p-8 shadow-xl">
              <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>

              <p className="text-[#1E1B4B] text-lg leading-9 mt-5 font-medium">
                {language === "en"
                  ? "Best financial consultancy service. Team explained everything clearly and helped throughout the process."
                  : "શ્રેષ્ઠ ફાઇનાન્સિયલ કન્સલ્ટન્સી સેવા. ટીમે બધું સ્પષ્ટ રીતે સમજાવ્યું અને સંપૂર્ણ પ્રક્રિયામાં મદદ કરી."}
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#1E1B4B]">
                  Neha Patel
                </h3>

                <p className="text-gray-500 mt-1">
                  {language === "en" ? "Project Finance" : "પ્રોજેક્ટ ફાઇનાન્સ"}
                </p>
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
              {language === "en" ? "QUICKD FINTECH" : "ક્વિકડ ફિનટેક"}
            </h2>

            <p className="text-yellow-300 font-semibold mt-3 tracking-wide text-sm md:text-base">
              {language === "en"
                ? "SMART TECH.... FAST LENDING...."
                : "સ્માર્ટ ટેક.... ફાસ્ટ લેન્ડિંગ...."}
            </p>

            {/* Description */}
            <p className="text-gray-200 leading-8 mt-6 max-w-xl mx-auto text-sm md:text-base">
              {language === "en"
                ? "Professional consultancy for business loans, MSME funding, subsidy guidance, mortgage loans & financial solutions."
                : "બિઝનેસ લોન, MSME ફંડિંગ, સબસિડી માર્ગદર્શન, મોર્ટગેજ લોન અને ફાઇનાન્સિયલ સોલ્યુશન્સ માટે વ્યાવસાયિક સલાહ."}
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
              {/* Corporate Office */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {language === "en" ? "Corporate Office" : "કોર્પોરેટ ઓફિસ"}
                </h3>

                <p>
                  {language === "en"
                    ? "1st Floor, One Stop Carz,"
                    : "1લો માળ, વન સ્ટોપ કાર્ઝ,"}
                </p>

                <p>
                  {language === "en"
                    ? "Opp. Welcare Hospital,"
                    : "વેલકેર હોસ્પિટલ સામે,"}
                </p>

                <p>
                  {language === "en"
                    ? "Atladara, Vadodara – 390012"
                    : "અટલાદરા, વડોદરા – 390012"}
                </p>
              </div>

              {/* Registered Office */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {language === "en" ? "Registered Office" : "રજિસ્ટર્ડ ઓફિસ"}
                </h3>

                <p>
                  {language === "en"
                    ? "2nd Floor, Kevalam Corner,"
                    : "2જો માળ, કેવલમ કોર્નર,"}
                </p>

                <p>
                  {language === "en"
                    ? "Nr. G.T. Seth School,"
                    : "જી.ટી. સેઠ સ્કૂલ પાસે,"}
                </p>

                <p>
                  {language === "en"
                    ? "KKV Hall, Rajkot – 360005"
                    : "KKV હોલ, રાજકોટ – 360005"}
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/20 mt-10 pt-6">
              <p className="text-gray-300 text-sm md:text-base">
                {language === "en"
                  ? "© 2026 QUICKD FINTECH. All Rights Reserved."
                  : "© 2026 ક્વિકડ ફિનટેક. સર્વ અધિકારો સુરક્ષિત."}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
