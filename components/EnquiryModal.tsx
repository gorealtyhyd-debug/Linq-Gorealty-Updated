"use client";

import Image from "next/image";
import { FormEvent, useEffect, useId, useState } from "react";
import { enquiryForm } from "@/content/site";
import { useEnquiry } from "@/components/EnquiryProvider";

type FormState = {
  name: string;
  email: string;
  phone: string;
  unitType: string;
  budgetRange: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  unitType: "",
  budgetRange: "",
  message: "",
};

export function EnquiryModal() {
  const { open, closeEnquiry } = useEnquiry();
  const [form, setForm] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEnquiry();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeEnquiry]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    // Phase 1: modular form UI only — Privyr integration later
    await new Promise((r) => setTimeout(r, 400));
    setStatus({ success: true, message: enquiryForm.success });
    setForm(empty);
    setSubmitting(false);
  }

  return (
    <div
      className={`enquiry-backdrop${open ? " open" : ""}`}
      id="enquiry-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEnquiry();
      }}
    >
      <div className="enquiry-modal">
        <button
          type="button"
          className="enquiry-close"
          id="enquiry-close"
          aria-label="Close form"
          onClick={closeEnquiry}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 4L20 20M20 4L4 20"
              stroke="#0D1628"
              strokeWidth="2"
            />
          </svg>
        </button>
        <div className="enquiry-logo" onClick={closeEnquiry}>
          <Image
            src="/images/linq-logo.png"
            alt="LINQ"
            width={110}
            height={36}
            className="logo-img"
            style={{ height: 36, width: "auto" }}
          />
        </div>
        <h2 id={titleId} className="sr-only">
          Enquire Now
        </h2>
        {status ? (
          <div
            className={`privyr-status-badge ${status.success ? "success" : "error"}`}
          >
            <div>
              <strong>{status.message}</strong>
            </div>
          </div>
        ) : null}
        <form
          className="enquiry-form"
          id="enquiry-form"
          onSubmit={onSubmit}
          noValidate={false}
        >
          <div className="enquiry-field">
            <label className="sr-only" htmlFor="enq-name">
              Name
            </label>
            <input
              id="enq-name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              autoComplete="name"
            />
          </div>
          <div className="enquiry-field">
            <label className="sr-only" htmlFor="enq-email">
              Email ID
            </label>
            <input
              id="enq-email"
              type="email"
              placeholder="Email ID"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              autoComplete="email"
            />
          </div>
          <div className="enquiry-field">
            <label className="sr-only" htmlFor="enq-phone">
              Contact No.
            </label>
            <input
              id="enq-phone"
              type="tel"
              placeholder="Contact No."
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              autoComplete="tel"
            />
          </div>
          <div className="enquiry-field">
            <label className="sr-only" htmlFor="enq-unit">
              Select Unit Type
            </label>
            <select
              id="enq-unit"
              value={form.unitType}
              onChange={(e) => setForm({ ...form, unitType: e.target.value })}
              required
            >
              <option value="" disabled>
                Select Unit Type
              </option>
              {enquiryForm.unitTypes.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
          <div className="enquiry-field">
            <label className="sr-only" htmlFor="enq-budget">
              Select Budget Range
            </label>
            <select
              id="enq-budget"
              value={form.budgetRange}
              onChange={(e) =>
                setForm({ ...form, budgetRange: e.target.value })
              }
              required
            >
              <option value="" disabled>
                Select Budget Range
              </option>
              {enquiryForm.budgetRanges.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
          <div className="enquiry-field">
            <label className="sr-only" htmlFor="enq-message">
              Message
            </label>
            <textarea
              id="enq-message"
              rows={3}
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <label className="enquiry-consent">
            <input type="checkbox" defaultChecked />
            <span>{enquiryForm.consent}</span>
          </label>
          <button
            type="submit"
            className="enquiry-submit"
            disabled={submitting}
          >
            {submitting ? enquiryForm.submitting : enquiryForm.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
