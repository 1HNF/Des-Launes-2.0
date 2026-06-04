"use client";

import { useMemo, useState } from "react";

type FormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  profile: string;
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactForm() {
  const [payload, setPayload] = useState<FormPayload>({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    profile: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return (
      payload.firstName.trim().length >= 1 &&
      payload.lastName.trim().length >= 1 &&
      isEmail(payload.email) &&
      !submitting
    );
  }, [payload, submitting]);

  function set(key: keyof FormPayload) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => setPayload((p) => ({ ...p, [key]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d20cf682-4477-4ba9-b7f4-63ddb3b0b58e",
          name: `${payload.firstName} ${payload.lastName}`,
          email: payload.email,
          organisation: payload.organisation || "Not provided",
          profile: payload.profile || "Not specified",
          message: payload.message || "No message provided"
        })
      });

      const data = await res.json();

      if (res.ok && data?.success === true) {
        setSuccess(true);
      } else {
        setError(data?.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div
        className="flex flex-col items-center gap-4 py-12 text-center"
        style={{ border: "1px solid rgba(201,169,110,0.2)" }}
      >
        <div
          className="flex h-12 w-12 items-center justify-center"
          style={{ border: "1px solid var(--color-gold-500)" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-gold-500)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          className="text-[1.5rem]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            color: "var(--color-cream-50)"
          }}
        >
          Request Received
        </h3>
        <p
          className="max-w-xs text-[0.85rem] leading-relaxed"
          style={{ color: "rgba(245,240,232,0.5)" }}
        >
          Thank you. We will review your enquiry and respond within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            className="text-[0.62rem] tracking-[0.15em] uppercase"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            First Name
          </label>
          <input
            className="input-dark"
            value={payload.firstName}
            onChange={set("firstName")}
            placeholder="Jean"
            required
            autoComplete="given-name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="text-[0.62rem] tracking-[0.15em] uppercase"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            Last Name
          </label>
          <input
            className="input-dark"
            value={payload.lastName}
            onChange={set("lastName")}
            placeholder="Dupont"
            required
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="text-[0.62rem] tracking-[0.15em] uppercase"
          style={{ color: "rgba(245,240,232,0.4)" }}
        >
          Email Address
        </label>
        <input
          type="email"
          className="input-dark"
          value={payload.email}
          onChange={set("email")}
          placeholder="jean@company.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="text-[0.62rem] tracking-[0.15em] uppercase"
          style={{ color: "rgba(245,240,232,0.4)" }}
        >
          Organisation / Fund (optional)
        </label>
        <input
          className="input-dark"
          value={payload.organisation}
          onChange={set("organisation")}
          placeholder="Company or fund name"
          autoComplete="organization"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="text-[0.62rem] tracking-[0.15em] uppercase"
          style={{ color: "rgba(245,240,232,0.4)" }}
        >
          Investor Profile
        </label>
        <select
          className="input-dark"
          value={payload.profile}
          onChange={set("profile")}
        >
          <option value="">Select your profile</option>
          <option>Private investor</option>
          <option>Family office</option>
          <option>Property developer</option>
          <option>Real estate fund</option>
          <option>Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="text-[0.62rem] tracking-[0.15em] uppercase"
          style={{ color: "rgba(245,240,232,0.4)" }}
        >
          Message (optional)
        </label>
        <textarea
          className="input-dark resize-y"
          style={{ minHeight: "100px" }}
          value={payload.message}
          onChange={set("message")}
          placeholder="Tell us briefly about your investment focus or any specific questions…"
        />
      </div>

      <p
        className="text-[0.7rem] leading-relaxed"
        style={{ color: "rgba(245,240,232,0.28)" }}
      >
        Your enquiry will be treated with strict confidentiality. We respond to
        qualified enquiries within 2 business days.
      </p>

      <button
        type="submit"
        disabled={!canSubmit}
        className="btn-gold justify-center"
        style={{
          opacity: canSubmit ? 1 : 0.4,
          cursor: canSubmit ? "pointer" : "not-allowed"
        }}
      >
        {submitting ? "Sending…" : "Send Request"}
        {!submitting && (
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        )}
      </button>

      {error && (
        <div
          className="p-4 text-[0.8rem]"
          style={{
            border: "1px solid rgba(220,80,80,0.3)",
            color: "#e88a8a",
            background: "rgba(220,80,80,0.05)"
          }}
          role="alert"
        >
          {error}
        </div>
      )}
    </form>
  );
}
