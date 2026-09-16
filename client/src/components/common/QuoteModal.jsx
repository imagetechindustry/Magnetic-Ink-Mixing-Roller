import React, { useState, useEffect } from "react";
import { useSubmitQuote } from "../../services/api";

// Inline Lucide-compatible SVG icons (zero external dependency footprint)
const XIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);

const UserIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const BuildingIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />
  </svg>
);

const MailIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PackageIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
  </svg>
);

const FileTextIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
  </svg>
);

const ShieldCheckIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />
  </svg>
);

const SendIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

const CheckCircle2Icon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

const UsersIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TruckIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" />
  </svg>
);

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });

  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const quoteMutation = useSubmitQuote();
  const resetMutation = quoteMutation.reset;

  useEffect(() => {
    const handleOpen = (e) => {
      setIsOpen(true);
      setSubmittedSuccess(false);
      resetMutation();
      if (e?.detail?.product) {
        setFormData((prev) => ({ ...prev, subject: e.detail.product }));
      }
    };
    window.addEventListener("open-quote-modal", handleOpen);

    // Automatic Popup Logic for Lead Generation
    let timer1, timer2, timer3;
    let hasTriggeredScroll = false;

    const handleScroll = () => {
      if (!hasTriggeredScroll && window.scrollY > 300) {
        if (localStorage.getItem("quoteSubmitted") !== "true") {
          setIsOpen(true);
          hasTriggeredScroll = true;
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    // Only trigger if they haven't submitted the quote form already
    if (localStorage.getItem("quoteSubmitted") !== "true") {
      window.addEventListener("scroll", handleScroll);

      // Show at 5 seconds
      timer1 = setTimeout(() => {
        if (localStorage.getItem("quoteSubmitted") !== "true") setIsOpen(true);
      }, 5 * 1000);

      // Show again at 2 minutes (120 seconds)
      timer2 = setTimeout(() => {
        if (localStorage.getItem("quoteSubmitted") !== "true") setIsOpen(true);
      }, 120 * 1000);

      // Show again at 5 minutes (300 seconds)
      timer3 = setTimeout(() => {
        if (localStorage.getItem("quoteSubmitted") !== "true") setIsOpen(true);
      }, 300 * 1000);
    }

    return () => {
      window.removeEventListener("open-quote-modal", handleOpen);
      window.removeEventListener("scroll", handleScroll);
      if (timer1) clearTimeout(timer1);
      if (timer2) clearTimeout(timer2);
      if (timer3) clearTimeout(timer3);
    };
  }, [resetMutation]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setIsOpen(false);
    quoteMutation.reset();
    setSubmittedSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot anti-spam check: if website is filled, silently discard bot
    if (formData.website) {
      setSubmittedSuccess(true);
      localStorage.setItem("quoteSubmitted", "true");
      setTimeout(() => setIsOpen(false), 2000);
      return;
    }

    const payload = {
      fullName: formData.name.trim(),
      companyName: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      productInterest: formData.subject || "Magnetic Ink Mixing Roller",
      industry: "Printing & Packaging",
      message: formData.message.trim(),
    };

    quoteMutation.mutate(payload, {
      onSuccess: () => {
        localStorage.setItem("quoteSubmitted", "true");
        setSubmittedSuccess(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          website: "",
        });
        setTimeout(() => {
          setIsOpen(false);
          setSubmittedSuccess(false);
        }, 3000);
      },
      onError: (err) => {
        console.error("Error submitting quote:", err);
      },
    });
  };

  const isSubmitting = quoteMutation.isPending;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
        onClick={handleClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-[1060px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden animate-[scaleUp_0.3s_ease-out] flex flex-col md:flex-row max-h-[92vh] md:max-h-[86vh] overflow-y-auto md:overflow-hidden">
        {/* Global Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-600 md:text-slate-400 hover:text-slate-900 bg-white/90 md:bg-slate-50 hover:bg-white md:hover:bg-slate-100 p-2.5 rounded-full transition-all z-[110] shadow-sm md:shadow-none backdrop-blur-sm cursor-pointer"
        >
          <XIcon size={20} />
        </button>

        {/* Left Side: Image Branding Panel */}
        <div className="flex w-full md:w-[54%] relative flex-col justify-between overflow-hidden bg-slate-50 shrink-0 min-h-[360px] md:min-h-0 pt-2 md:pt-0">
          {/* Background Image Container */}
          <div className="absolute top-0 right-0 w-full h-full md:h-[calc(100%-72px)] z-0">
            <div
              className="w-full h-full bg-cover md:bg-cover bg-center md:bg-right bg-no-repeat"
              style={{ backgroundImage: "url(/form.jpeg)" }}
            ></div>
            {/* Soft White Gradient Overlay for high text contrast */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-[68%]"></div>
            <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-transparent"></div>
          </div>

          {/* Top Content Area */}
          <div className="relative z-20 px-6 md:px-8 pt-4 md:pt-8 flex-1 flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="ImageTech Industries Logo"
                className="h-10 w-auto object-contain"
              />
              <div className="text-[9px] text-slate-600 font-bold leading-tight border-l-2 border-slate-300 pl-3 uppercase tracking-wider">
                Precision Solutions
                <br />
                For Printing Industry
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-[22px] sm:text-[26px] leading-[1.2] md:text-3xl lg:text-4xl font-black mb-2 md:mb-3 tracking-tight md:leading-[1.1] text-slate-900 drop-shadow-sm w-[92%] md:w-auto md:max-w-[55%] z-20 relative">
              <span className="inline md:hidden">
                Quality Rollers for a{" "}
                <span className="text-orange-500">Sharper</span>
                <br />
              </span>
              <span className="hidden md:inline">
                Quality Rollers
                <br />
                for a <span className="text-orange-500">Sharper<br /></span>
              </span>
              <span className="text-orange-500">Print Tomorrow</span>
            </h2>

            {/* Line separator */}
            <div className="w-12 h-1 bg-orange-500 mb-4 rounded-full z-20 relative"></div>

            {/* Description */}
            <p className="text-[11px] lg:text-xs text-slate-700 leading-relaxed font-bold max-w-[85%] md:max-w-[52%] mb-6 md:mb-8 z-20 relative">
              From magnetic ink mixing rollers with rope to rope-free designs,
              we support your printing and packaging processes with durable,
              high-performance solutions.
            </p>

            {/* Horizontal Features */}
            <div className="flex gap-5 sm:gap-6 justify-start pb-6 md:pb-0 relative z-20">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center mb-1.5 bg-white shadow-sm text-orange-500">
                  <CheckCircle2Icon size={20} />
                </div>
                <span className="text-[9px] font-bold text-slate-700 leading-tight">
                  Premium
                  <br />
                  Quality
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center mb-1.5 bg-white shadow-sm text-orange-500">
                  <UsersIcon size={20} />
                </div>
                <span className="text-[9px] font-bold text-slate-700 leading-tight">
                  Technical
                  <br />
                  Support
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center mb-1.5 bg-white shadow-sm text-orange-500">
                  <TruckIcon size={20} />
                </div>
                <span className="text-[9px] font-bold text-slate-700 leading-tight">
                  Pan-India &
                  <br />
                  Global Export
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Stats Banner - Visible on desktop */}
          <div className="hidden md:flex relative z-20 bg-[#1e293b] w-full h-[72px] px-3 items-center justify-between border-t-[3px] border-orange-500">
            <div className="flex-1 flex flex-col items-center gap-1 text-center">
              <PackageIcon size={16} className="text-orange-400" />
              <div className="text-[8px] leading-tight font-bold text-white uppercase tracking-widest">
                High Magnetic
                <br />
                Power
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1 text-center">
              <BuildingIcon size={16} className="text-orange-400" />
              <div className="text-[8px] leading-tight font-bold text-white uppercase tracking-widest">
                Solvent
                <br />
                Resistant
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1 text-center">
              <ShieldCheckIcon size={16} className="text-orange-400" />
              <div className="text-[8px] leading-tight font-bold text-white uppercase tracking-widest">
                Trusted
                <br />
                by Printers
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1 text-center">
              <UsersIcon size={16} className="text-orange-400" />
              <div className="text-[8px] leading-tight font-bold text-white uppercase tracking-widest">
                Customer
                <br />
                Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="w-full md:w-[46%] bg-white p-6 md:p-8 relative flex flex-col shrink-0 md:shrink md:overflow-y-auto">
          <div className="mb-6 pr-8">
            <div className="flex items-center gap-2 text-orange-600 font-black text-[10px] tracking-widest uppercase mb-1.5">
              <div className="w-6 h-0.5 bg-orange-600"></div>
              Request a Quote
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-slate-900 tracking-tight leading-tight">
              Get Your <span className="text-orange-500">Custom</span> Quote
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-sm mt-1.5">
              Fill out the details below and our technical sales team will contact you shortly.
            </p>
          </div>

          {/* Success Banner */}
          {submittedSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3 text-green-800 animate-[fadeIn_0.3s_ease-out]">
              <CheckCircle2Icon size={24} className="text-green-600 shrink-0" />
              <div>
                <p className="font-bold text-sm">Quote Request Received!</p>
                <p className="text-xs text-green-700 mt-0.5">
                  Thank you! Our engineering team will review your specifications and contact you soon.
                </p>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {quoteMutation.isError && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold animate-[fadeIn_0.3s_ease-out]">
              {quoteMutation.error?.message ||
                "Failed to send your request. Please check your network and try again."}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 flex-1 flex flex-col">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                  <UserIcon size={14} className="text-slate-400" /> Full Name{" "}
                  <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <UserIcon size={16} />
                  </div>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-[13px] sm:text-[14px] font-semibold text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder-slate-400"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                  <BuildingIcon size={14} className="text-slate-400" /> Company Name{" "}
                  <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <BuildingIcon size={16} />
                  </div>
                  <input
                    required
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-[13px] sm:text-[14px] font-semibold text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder-slate-400"
                    placeholder="Enter company name"
                  />
                </div>
              </div>
            </div>

            {/* Honeypot Field */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                  <MailIcon size={14} className="text-slate-400" /> Email Address{" "}
                  <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MailIcon size={16} />
                  </div>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-[13px] sm:text-[14px] font-semibold text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder-slate-400"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                  <PhoneIcon size={14} className="text-slate-400" /> Phone Number{" "}
                  <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <PhoneIcon size={16} />
                  </div>
                  <input
                    required
                    type="tel"
                    name="phone"
                    pattern="[0-9\+\-\s\(\)]{7,20}"
                    title="Please enter a valid phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-[13px] sm:text-[14px] font-semibold text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder-slate-400"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Row 3 - Plain Text Input */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                <PackageIcon size={14} className="text-slate-400" /> Product / Requirement{" "}
                <span className="text-orange-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <PackageIcon size={16} />
                </div>
                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-[13px] sm:text-[14px] font-semibold text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder-slate-400"
                  placeholder="e.g. Magnetic Ink Mixing Roller with Rope (or custom specs)"
                />
              </div>
            </div>

            {/* Row 4 - Textarea */}
            <div className="space-y-1.5 flex-1">
              <label className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                <FileTextIcon size={14} className="text-slate-400" /> Additional Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[13px] sm:text-[14px] font-semibold text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none placeholder-slate-400 min-h-[85px]"
                placeholder="Please share roller diameter, length, press model, quantity, or specific requirements..."
              ></textarea>
            </div>

            {/* Footer / Submit */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-1">
              <div className="flex items-start gap-2 text-slate-500">
                <ShieldCheckIcon size={18} className="shrink-0 mt-0.5 text-slate-400" />
                <p className="text-[10px] leading-snug">
                  Your information is secure with us
                  <br />
                  and will never be shared with third parties.
                </p>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className={`w-full sm:w-auto flex items-center justify-center gap-2 text-white px-7 py-3 rounded-full font-bold text-[14px] tracking-wide transition-all shadow-md cursor-pointer ${
                  isSubmitting
                    ? "bg-orange-400 cursor-not-allowed shadow-none"
                    : "bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0"
                }`}
              >
                {isSubmitting ? "SUBMITTING..." : "Request Quote"}
                <SendIcon size={16} className={isSubmitting ? "animate-pulse" : "ml-1"} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
