import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X, ShieldAlert, FileText, CheckCircle2, ChevronRight } from "lucide-react";

export const CancellationNoticeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Auto open on page load/refresh
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {/* Top Fixed Announcement Bar */}
      <div 
        onClick={() => setIsOpen(true)}
        className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-950 via-amber-950 to-red-950 border-b border-amber-500/30 text-amber-200 px-4 py-2 text-xs sm:text-sm font-body cursor-pointer hover:bg-red-900/90 transition-all flex items-center justify-between shadow-lg backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center gap-2 sm:gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[10px] sm:text-xs uppercase font-bold tracking-wider border border-red-500/30 animate-pulse">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            Official Update
          </span>
          <span className="font-semibold text-amber-100 truncate">
            World Summit MUN 2026 has been cancelled — Click to view official Secretariat statement
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-primary text-xs font-bold underline hover:text-amber-200 ml-1">
            Read Statement <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Floating Badge (Bottom Right) to trigger popup if modal is closed */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-amber-950/90 hover:bg-amber-900 text-amber-200 border border-amber-500/40 px-4 py-3 rounded-full shadow-[0_0_25px_rgba(217,119,6,0.3)] backdrop-blur-xl flex items-center gap-2.5 group transition-all duration-300 font-body text-xs font-bold"
        >
          <ShieldAlert className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
          <span>Official Update Statement</span>
        </motion.button>
      )}

      {/* Main Cancellation Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
            {/* Backdrop with Heavy Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-gradient-to-b from-stone-900 via-stone-950 to-black border border-amber-500/30 rounded-2xl shadow-[0_0_60px_rgba(217,119,6,0.25)] overflow-hidden z-10"
            >
              {/* Header Decorative Accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-amber-200 p-2 rounded-full hover:bg-white/10 transition-colors z-20"
                aria-label="Close Notice"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Content Container */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 custom-scrollbar text-stone-200">
                {/* Badge & Title */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 text-xs uppercase font-bold tracking-widest">
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                    Official Secretariat Announcement
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-amber-100 tracking-tight leading-snug">
                    Official Update — World Summit MUN 2026
                  </h2>
                  <div className="h-0.5 w-20 bg-amber-500/40 rounded-full" />
                </div>

                {/* Main Statement Text */}
                <div className="space-y-4 font-body text-sm sm:text-base leading-relaxed text-stone-300">
                  <p className="text-stone-200">
                    We regret to inform you that World Summit MUN 2026, scheduled for 19–20 September, has been cancelled due to unforeseen circumstances concerning our institutional and venue arrangements. Differences between the venue and our institutional partner regarding the terms and formalities remained unresolved despite extensive efforts by the Secretariat to facilitate a resolution. At the venue’s request, its name was also removed from our website, social media, and official communications while the matter was being addressed. The venue subsequently withdrew, and with only one week remaining, we were unable to responsibly secure and operationalise a suitable alternative of the required scale and standard. The Secretariat has acted in accordance with the terms agreed upon with the venue.
                  </p>

                  {/* 100% Refund Callout Box */}
                  <div className="my-4 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-amber-950/60 to-red-950/40 border border-amber-500/40 shadow-inner space-y-2">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>100% Registration Fee Refund Guarantee</span>
                    </div>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                      All registered delegates will receive a 100% refund of their registration fee. Any amount required beyond the funds recoverable through the existing arrangements will be personally covered by me from my own funds, ensuring that no registered delegate bears a financial loss due to the cancellation. Further details regarding the refund process and timelines will be communicated directly to the concerned individuals.
                    </p>
                  </div>

                  <p className="text-stone-200">
                    We sincerely apologise to all delegates who had planned to participate and understand the inconvenience caused by this decision. We deeply appreciate your patience, understanding, and support.
                  </p>
                </div>

                {/* Official Sign-off Signature */}
                <div className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="font-display font-bold text-lg text-amber-200 tracking-wide">
                      Raunak Jha
                    </p>
                    <p className="font-body text-xs uppercase tracking-wider text-amber-400/90 font-semibold">
                      Secretary General, World Summit Debates
                    </p>
                    <p className="font-body text-xs text-stone-400">
                      World Summit MUN 2026
                    </p>
                  </div>

                  {/* Dismiss / Acknowledge Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-body font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform active:scale-95 text-center shrink-0"
                  >
                    Close & Acknowledge
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CancellationNoticeModal;
