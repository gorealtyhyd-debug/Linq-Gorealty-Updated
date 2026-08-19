"use client";

import { useEnquiry } from "@/components/EnquiryProvider";

export function EnquireFab() {
  const { openEnquiry } = useEnquiry();
  return (
    <button
      type="button"
      className="enquire-fab"
      id="enquire-fab"
      onClick={openEnquiry}
    >
      Enquire Now
    </button>
  );
}
