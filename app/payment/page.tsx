// payment/page.tsx

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#f8f5fb] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-[35px] shadow-2xl overflow-hidden border border-[#E9D5FF]">
        {/* Top Gradient */}
        <div className="bg-gradient-to-r from-[#5B0E74] via-[#8E24AA] to-[#F59E0B] p-8 text-center">
          <h1 className="text-3xl font-extrabold text-white">QUICKD FINTECH</h1>

          <p className="text-white/90 mt-2">Secure Consultation Payment</p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 text-center">
          <div className="bg-[#F3E8FF] rounded-3xl p-5 border border-[#D8B4FE]">
            <h2 className="text-2xl font-bold text-[#2B0B3A]">Scan & Pay</h2>

            <p className="text-gray-600 mt-3 leading-7">
              Scan the QR code below to complete your consultation payment
              securely.
            </p>

            {/* QR Image */}
            <div className="bg-white rounded-3xl p-5 mt-6 shadow-lg">
              <img
                src="/qr-code.png"
                alt="Payment QR"
                className="w-full max-w-[260px] mx-auto"
              />
            </div>

            {/* Amount */}
            <div className="mt-6">
              <p className="text-gray-500 text-sm">Consultation Fees</p>

              <h3 className="text-4xl font-extrabold text-[#5B0E74] mt-2">
                ₹199
              </h3>
            </div>

            {/* UPI */}
            <div className="mt-6 bg-white rounded-2xl p-4 border border-[#E9D5FF]">
              <p className="text-gray-500 text-sm">UPI ID</p>

              <p className="text-[#2B0B3A] font-bold text-lg mt-1 break-all">
                quickdfintech@upi
              </p>
            </div>

            {/* Note */}
            <p className="text-sm text-gray-500 mt-6 leading-6">
              After payment our team will contact you shortly for consultation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
