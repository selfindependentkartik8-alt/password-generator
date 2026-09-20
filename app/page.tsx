"use client";

import { useState } from "react";

export default function Home() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      setPassword("");
      return;
    }

    const values = new Uint32Array(length);
    crypto.getRandomValues(values);

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars[values[i] % chars.length];
    }

    setPassword(result);
    setCopied(false);
  };

  const copyPassword = async () => {
    if (!password) return;

    await navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          GOLD PRIMARY → BLACK SECONDARY BACKGROUND
          ===================================================== */}
      <div className="fixed inset-0 -z-10 pointer-events-none">

        {/* Main gold-to-black background */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#8f6800]
            via-[#604500]
            via-[45%]
            to-black
          "
        />

        {/* Large gold glow at the top */}
        <div
          className="
            absolute
            -top-56
            left-1/2
            h-[800px]
            w-[950px]
            -translate-x-1/2
            rounded-full
            bg-[#d4a900]/30
            blur-[160px]
          "
        />

        {/* Left gold glow */}
        <div
          className="
            absolute
            top-[300px]
            -left-56
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#b8860b]/20
            blur-[160px]
          "
        />

        {/* Right gold glow */}
        <div
          className="
            absolute
            top-[420px]
            -right-56
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#d4a900]/15
            blur-[160px]
          "
        />

        {/* Smooth gold → black transition */}
        <div
          className="
            absolute
            top-[620px]
            inset-x-0
            h-[1000px]
            bg-gradient-to-b
            from-transparent
            via-black/65
            to-black
          "
        />
      </div>

      {/* =====================================================
          NAVBAR
          ===================================================== */}
      <nav className="mx-auto w-[94%] max-w-7xl pt-5">
        <div
          className="
            flex items-center justify-between
            rounded-[26px]
            border border-white/15
            bg-black/55
            px-5 py-4
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="KrishAIWorks"
              className="h-11 w-11 rounded-full object-cover"
            />

            <div>
              <h2 className="text-lg font-bold">
                KrishAIWorks
              </h2>

              <p className="text-xs text-white/50">
                AI Solutions That Work
              </p>
            </div>
          </div>

          <a
            href="#generator"
            className="
              rounded-xl
              border border-amber-300/40
              bg-amber-400/15
              px-5 py-2.5
              text-sm font-semibold
              text-amber-200
              transition
              hover:bg-amber-400/25
            "
          >
            Try Now
          </a>
        </div>
      </nav>

      {/* =====================================================
          HERO
          ===================================================== */}
      <section
        className="
          mx-auto
          w-[94%]
          max-w-5xl
          px-2
          pb-24
          pt-24
          text-center
          sm:pt-32
        "
      >
        <div
          className="
            inline-flex
            rounded-full
            border border-amber-200/30
            bg-amber-300/15
            px-5 py-2.5
            text-sm font-medium
            text-amber-100
            backdrop-blur
          "
        >
          🔐 Secure Password Generator
        </div>

        <p className="mt-7 text-sm text-white/60">
          Built by{" "}
          <span className="font-semibold text-amber-200">
            KrishAIWorks
          </span>
        </p>

        <h1
          className="
            mt-7
            text-5xl
            font-black
            leading-[1.05]
            tracking-tight
            sm:text-6xl
            md:text-7xl
          "
        >
          Create Strong.
          <br />

          <span
            className="
              bg-gradient-to-r
              from-amber-200
              via-yellow-300
              to-orange-300
              bg-clip-text
              text-transparent
            "
          >
            Stay Secure.
          </span>
        </h1>

        <p
          className="
            mx-auto
            mt-7
            max-w-2xl
            text-base
            leading-8
            text-white/65
            sm:text-lg
          "
        >
          Generate powerful random passwords with complete
          control over length, letters, numbers and symbols.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Pill text="🔐 Strong Security" />
          <Pill text="⚡ Instant Generate" />
          <Pill text="📱 Mobile Friendly" />
        </div>
      </section>

      {/* =====================================================
          PASSWORD GENERATOR
          ===================================================== */}
      <section
        id="generator"
        className="
          mx-auto
          w-[94%]
          max-w-5xl
          pb-28
        "
      >
        <div
          className="
            rounded-[32px]
            border border-white/15
            bg-black/85
            p-6
            shadow-2xl
            backdrop-blur-xl
            sm:p-9
          "
        >
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-amber-400
            "
          >
            Password Generator
          </p>

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Build your secure password.
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/40">
            Customize every part of your password before generating it.
          </p>

          {/* RESULT */}
          <div className="mt-8">
            <p
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-amber-400
              "
            >
              Generated Password
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div
                className="
                  flex
                  min-h-[60px]
                  flex-1
                  items-center
                  break-all
                  rounded-2xl
                  border border-amber-400/15
                  bg-black
                  px-5 py-4
                  font-mono
                  text-sm
                  text-amber-100
                  sm:text-base
                "
              >
                {password || "Your password will appear here..."}
              </div>

              <button
                onClick={copyPassword}
                disabled={!password}
                className="
                  rounded-2xl
                  border border-amber-300/25
                  bg-amber-400/10
                  px-7 py-4
                  font-semibold
                  text-amber-200
                  transition
                  hover:bg-amber-400/20
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* LENGTH */}
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-amber-400
                "
              >
                Password Length
              </p>

              <span
                className="
                  rounded-xl
                  border border-amber-400/20
                  bg-amber-400/10
                  px-4 py-2
                  font-bold
                  text-amber-200
                "
              >
                {length}
              </span>
            </div>

            <input
              type="range"
              min="6"
              max="64"
              value={length}
              onChange={(e) =>
                setLength(Number(e.target.value))
              }
              className="
                w-full
                cursor-pointer
                accent-amber-400
              "
            />

            <div
              className="
                mt-2
                flex
                justify-between
                text-xs
                text-white/25
              "
            >
              <span>6</span>
              <span>64</span>
            </div>
          </div>

          {/* OPTIONS */}
          <div className="mt-8">
            <p
              className="
                mb-4
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-amber-400
              "
            >
              Character Options
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <Option
                title="Uppercase Letters"
                enabled={uppercase}
                onClick={() =>
                  setUppercase(!uppercase)
                }
              />

              <Option
                title="Lowercase Letters"
                enabled={lowercase}
                onClick={() =>
                  setLowercase(!lowercase)
                }
              />

              <Option
                title="Numbers"
                enabled={numbers}
                onClick={() =>
                  setNumbers(!numbers)
                }
              />

              <Option
                title="Symbols"
                enabled={symbols}
                onClick={() =>
                  setSymbols(!symbols)
                }
              />
            </div>
          </div>

          {/* GENERATE */}
          <button
            onClick={generatePassword}
            className="
              mt-8
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-amber-400
              via-yellow-300
              to-orange-400
              py-4
              font-black
              text-black
              shadow-xl
              shadow-amber-500/20
              transition
              hover:scale-[1.01]
              active:scale-[0.99]
            "
          >
            🔐 Generate Secure Password
          </button>
        </div>
      </section>

      {/* =====================================================
          WHY USE IT
          ===================================================== */}
      <section
        className="
          mx-auto
          w-[94%]
          max-w-6xl
          pb-28
        "
      >
        <div className="mb-10 text-center">
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-amber-400
            "
          >
            Why Use It
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Security made{" "}
            <span className="text-amber-400">
              simple.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-white/40
            "
          >
            Everything you need to create stronger passwords
            without unnecessary complexity.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Feature
            icon="🛡️"
            title="Secure"
            text="Generate random passwords designed to be difficult to guess."
          />

          <Feature
            icon="⚙️"
            title="Customizable"
            text="Choose your length and exactly which characters you want."
          />

          <Feature
            icon="⚡"
            title="Instant"
            text="Create a fresh password instantly with one click."
          />
        </div>
      </section>

      {/* =====================================================
          HOW TO USE
          ===================================================== */}
      <section
        className="
          mx-auto
          w-[94%]
          max-w-6xl
          pb-28
        "
      >
        <div
          className="
            rounded-[32px]
            border border-white/10
            bg-black/90
            p-7
            sm:p-10
          "
        >
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-amber-400
            "
          >
            How To Use
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Generate your password in{" "}
            <span className="text-amber-400">
              three steps.
            </span>
          </h2>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            <Step
              number="01"
              title="Choose Length"
              text="Set the password length using the slider."
            />

            <Step
              number="02"
              title="Customize"
              text="Select uppercase, lowercase, numbers and symbols."
            />

            <Step
              number="03"
              title="Generate & Copy"
              text="Generate your password and copy it instantly."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
          ===================================================== */}
      <section
        className="
          mx-auto
          w-[94%]
          max-w-4xl
          pb-28
        "
      >
        <div className="mb-10 text-center">
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-amber-400
            "
          >
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Frequently Asked{" "}
            <span className="text-amber-400">
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          <FAQ
            question="Are generated passwords stored?"
            answer="No. Passwords are generated directly in your browser and are not stored by the tool."
          />

          <FAQ
            question="Can I customize my password?"
            answer="Yes. You can control the length and choose uppercase letters, lowercase letters, numbers and symbols."
          />

          <FAQ
            question="Is the password generator free?"
            answer="Yes. You can generate secure passwords completely free."
          />

          <FAQ
            question="Can I use the generated password on any website?"
            answer="Yes. You can copy the generated password and use it wherever a password is required."
          />
        </div>
      </section>

  {/* =====================================================
          FOOTER
          ===================================================== */}
      <footer className="relative z-10 border-t border-white/10 bg-black px-4 py-12">
        <div className="mx-auto w-[94%] max-w-7xl">

          {/* Related Tools */}
          <div className="mb-10">
            <div className="mb-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/70">
                Explore More
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                More Useful Tools
              </h3>

              <p className="mx-auto mt-2 max-w-xl text-sm text-white/40">
                Explore more free tools from KrishAIWorks to simplify your
                everyday digital tasks.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* QR Code Generator */}
              <a
                href="https://qrcodegeneratorscanner.krishaiworks.com/"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/[0.05]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-xl">
                  ▦
                </div>

                <h4 className="font-semibold text-white transition-colors group-hover:text-amber-300">
                  QR Code Generator
                </h4>

                <p className="mt-2 text-xs leading-5 text-white/40">
                  Create and scan QR codes quickly and easily.
                </p>
              </a>

              {/* ZIP File Creator */}
              <a
                href="https://zipfilecreator.krishaiworks.com/"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/[0.05]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-xl">
                  🗜️
                </div>

                <h4 className="font-semibold text-white transition-colors group-hover:text-amber-300">
                  ZIP File Creator
                </h4>

                <p className="mt-2 text-xs leading-5 text-white/40">
                  Create ZIP archives from your files in seconds.
                </p>
              </a>

              {/* Base64 Encoder & Decoder */}
              <a
                href="https://base64encoderdecoder.krishaiworks.com/"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/[0.05]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-xl">
                  &lt;/&gt;
                </div>

                <h4 className="font-semibold text-white transition-colors group-hover:text-amber-300">
                  Base64 Encoder &amp; Decoder
                </h4>

                <p className="mt-2 text-xs leading-5 text-white/40">
                  Encode and decode Base64 text instantly.
                </p>
              </a>

              {/* JSON Formatter */}
              <a
                href="https://jsonformattervalidator.krishaiworks.com/"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/[0.05]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-xl">
                  {"{}"}
                </div>

                <h4 className="font-semibold text-white transition-colors group-hover:text-amber-300">
                  JSON Formatter &amp; Validator
                </h4>

                <p className="mt-2 text-xs leading-5 text-white/40">
                  Format, validate, and clean JSON data effortlessly.
                </p>
              </a>

            </div>
          </div>

         {/* Footer Bottom */}
<div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">

  <div className="flex items-center gap-3">

    <img
      src="/logo.png"
      alt="KrishAIWorks"
      className="
        h-12
        w-12
        rounded-full
        border border-amber-400/20
        object-cover
      "
    />

    <div>
      <p className="font-bold text-white">
        KrishAIWorks
      </p>

      <p className="text-xs text-white/35">
        AI Solutions That Work
      </p>
    </div>

  </div>

  <div className="flex flex-col items-center gap-2 sm:items-end">

    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-white/30">

      <a
        href="https://krishaiworks.com/privacy-policy"
        className="whitespace-nowrap transition hover:text-amber-300"
      >
        Privacy Policy
      </a>

      <a
        href="https://krishaiworks.com/terms-and-conditions"
        className="whitespace-nowrap transition hover:text-amber-300"
      >
        Terms & Conditions
      </a>

    </div>

    <p className="text-xs text-white/30">
      © {new Date().getFullYear()} KrishAIWorks. All rights reserved.
    </p>

  </div>

</div>

</div>
</footer>

    </main>
  );
}

/* =========================================================
   SMALL UI COMPONENTS
   ========================================================= */

function Pill({ text }: { text: string }) {
  return (
    <span
      className="
        rounded-full
        border border-amber-300/20
        bg-amber-300/10
        px-4 py-2.5
        text-sm
        text-amber-100
      "
    >
      {text}
    </span>
  );
}

function Option({
  title,
  enabled,
  onClick,
}: {
  title: string;
  enabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
        enabled
          ? "border-amber-400/30 bg-amber-400/10 text-amber-100"
          : "border-white/10 bg-white/[0.02] text-white/40"
      }`}
    >
      <span className="text-sm font-medium">
        {title}
      </span>

      <span className="text-lg">
        {enabled ? "✓" : "○"}
      </span>
    </button>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        rounded-[28px]
        border border-white/10
        bg-black/90
        p-7
        transition
        hover:border-amber-400/20
      "
    >
      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-amber-300">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/40">
        {text}
      </p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-white/[0.02]
        p-6
      "
    >
      <p className="text-xs font-black tracking-[0.25em] text-amber-400">
        {number}
      </p>

      <h3 className="mt-4 font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-white/40">
        {text}
      </p>
    </div>
  );
}

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details
      className="
        group
        rounded-2xl
        border border-white/10
        bg-black/80
        p-5
      "
    >
      <summary
        className="
          flex
          cursor-pointer
          list-none
          items-center
          justify-between
          gap-4
          font-semibold
        "
      >
        <span>{question}</span>

        <span
          className="
            text-xl
            text-amber-400
            transition
            group-open:rotate-45
          "
        >
          +
        </span>
      </summary>

      <p className="mt-4 text-sm leading-7 text-white/40">
        {answer}
      </p>
    </details>
  );
}