import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import akkLogo from "../akk logo.png";
import { MaterialSymbol } from "./symbols/MaterialSymbol";
import { TimesheetSymbol } from "./symbols/TimesheetSymbol";

const EASE = [0.45, 0.05, 0.15, 1];

function useHeatTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const preferred = mediaQuery.matches ? "light" : "dark";
    setTheme(preferred);

    const handler = (event) => {
      setTheme(event.matches ? "light" : "dark");
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("heat-dark", "heat-light", "heat-day", "heat-night");
    const isLight = theme === "light";
    const hour = new Date().getHours();
    const isDay = hour >= 7 && hour < 19;
    root.classList.add(isLight ? "heat-light" : "heat-dark");
    root.classList.add(isDay ? "heat-day" : "heat-night");
  }, [theme]);

  return theme;
}

function useScrollPhases(containerRef) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const heroTitleY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);
  const heroBackgroundY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  const materialOpacity = useTransform(scrollYProgress, [0.25, 0.38, 0.55], [0, 1, 1]);
  const materialSymbolX = useTransform(scrollYProgress, [0.3, 0.5], [-40, 0]);
  const materialTextX = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);
  const materialBackgroundY = useTransform(scrollYProgress, [0.25, 0.75], [18, -12]);

  const midScale = useTransform(scrollYProgress, [0.55, 0.65], [1, 0.96]);

  const timesheetOpacity = useTransform(scrollYProgress, [0.6, 0.72, 0.9], [0, 1, 1]);
  const timesheetSymbolX = useTransform(scrollYProgress, [0.65, 0.85], [40, 0]);
  const timesheetTextX = useTransform(scrollYProgress, [0.65, 0.85], [-40, 0]);
  const timesheetBackgroundY = useTransform(scrollYProgress, [0.5, 1], [20, -10]);

  const footerOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  return {
    heroOpacity,
    heroTitleY,
    materialOpacity,
    materialSymbolX,
    materialTextX,
    midScale,
    timesheetOpacity,
    timesheetSymbolX,
    timesheetTextX,
    footerOpacity,
    heroBackgroundY,
    materialBackgroundY,
    timesheetBackgroundY,
    scrollYProgress
  };
}

function LoadingOverlay() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-[radial-gradient(circle_at_top,#1F0A05_0,#120603_55%,#050203_100%)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: EASE, delay: 0.18 }}
    >
      <div className="relative flex flex-col items-center gap-4">
        <motion.div
          className="relative h-20 w-20 rounded-full border border-amber-400/40"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-amber-300/60"
            style={{ willChange: "transform" }}
            animate={
              prefersReducedMotion
                ? undefined
                : { rotate: [0, 360] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear"
                  }
            }
          />
          <div className="absolute inset-2 flex items-center justify-center rounded-full bg-black/40">
            <img
              src={akkLogo}
              alt="AKK Engineering"
              className="h-10 w-10 object-contain"
              loading="eager"
            />
          </div>
        </motion.div>
        <motion.span
          className="text-xs font-body tracking-[0.25em] uppercase text-amber-200/70"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          Initialising systems
        </motion.span>
      </div>
    </motion.div>
  );
}

function ScrollIndicator({ scrollYProgress }) {
  const barScale = useTransform(scrollYProgress, [0, 1], [0.18, 1]);

  return (
    <div className="pointer-events-none fixed bottom-7 right-7 z-30 hidden flex-col items-end gap-2 md:flex">
      <motion.div
        className="h-24 w-px overflow-hidden rounded-full bg-amber-500/10"
        style={{ willChange: "transform" }}
      >
        <motion.div
          className="h-full w-full bg-gradient-to-b from-amber-400 via-orange-500 to-red-500"
          style={{ scaleY: barScale, originY: 0 }}
          transition={{ ease: EASE }}
        />
      </motion.div>
      <span className="text-[10px] font-body tracking-[0.25em] text-amber-100/60">
        SCROLL
      </span>
    </div>
  );
}

function SystemsRail({ materialRef, timesheetRef }) {
  const handleScrollTo = (target) => {
    if (!target?.current) return;
    target.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-0 z-20 flex justify-center px-4 pb-4 pt-3 md:pt-5">
      <div className="inline-flex items-center gap-4 rounded-full border border-amber-400/15 bg-black/40 px-4 py-2 backdrop-blur-sm md:px-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
          <span className="text-[10px] font-body uppercase tracking-[0.3em] text-amber-100/60">
            Systems
          </span>
        </div>
        <div className="h-4 w-px bg-gradient-to-b from-amber-500/40 to-red-500/30" />
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => handleScrollTo(materialRef)}
            className="group inline-flex items-center gap-1 rounded-full border border-red-500/40 bg-red-900/20 px-3 py-1 text-[10px] font-body uppercase tracking-[0.22em] text-amber-100/80 outline-none transition-colors duration-200 ease-in-out hover:bg-red-900/40 focus-visible:ring-2 focus-visible:ring-amber-300/85 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="h-1 w-3 bg-gradient-to-r from-red-500 via-orange-500 to-amber-300" />
            <span>Material tracker</span>
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo(timesheetRef)}
            className="group inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-900/25 px-3 py-1 text-[10px] font-body uppercase tracking-[0.22em] text-amber-100/80 outline-none transition-colors duration-200 ease-in-out hover:bg-amber-900/45 focus-visible:ring-2 focus-visible:ring-amber-300/85 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="h-1 w-3 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200" />
            <span>Timesheet manager</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function EdgeGlowFrame({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.8, 0.45]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10"
      style={{ opacity }}
    >
      <div className="absolute inset-4 rounded-[32px] border border-amber-500/12 shadow-[0_0_0_1px_rgba(15,23,42,0.55)]" />
      <div className="absolute inset-4 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(248,113,18,0.18),transparent_55%)] mix-blend-soft-light" />
    </motion.div>
  );
}

function Hero({ heroOpacity, heroTitleY, theme, backgroundY }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center px-6 pt-10 md:px-14"
      style={{ opacity: heroOpacity }}
      transition={{ ease: EASE }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -inset-40 bg-[radial-gradient(circle_at_top,#1F0A05_0,#120603_45%,#050203_100%)] opacity-90"
          style={prefersReducedMotion ? undefined : { y: backgroundY }}
          transition={{ ease: EASE }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(248,113,18,0.24),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(245,158,11,0.16),transparent_50%)] mix-blend-screen opacity-80"
          style={prefersReducedMotion ? undefined : { y: backgroundY }}
          transition={{ ease: EASE }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light">
          <div className="noise-layer" />
        </div>
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10 text-center md:gap-14">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <motion.img
            src={akkLogo}
            alt="AKK Engineering logo"
            className="h-16 w-auto md:h-20"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          />
          <span className="font-body text-xs tracking-[0.32em] text-amber-100/70">
            AKK ENGINEERING PTE. LTD.
          </span>
        </motion.div>

        <motion.div
          className="space-y-6"
          style={{ y: heroTitleY }}
          transition={{ ease: EASE }}
        >
          <h1 className="font-heading heading-text text-4xl tracking-[0.13em] md:text-6xl md:tracking-[0.18em]">
            Engineering-grade systems for AKK teams
          </h1>
          <p className="mx-auto max-w-xl font-body body-text-soft text-sm leading-relaxed md:text-base">
            Scroll to access AKK’s material tracking, workforce timesheets, and the
            internal platforms that support daily operations.
          </p>
        </motion.div>

        <motion.div
          className="mt-4 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
        >
          <div className="flex items-center gap-2 rounded-full border border-amber-500/20 bg-black/30 px-4 py-2 text-[10px] font-body uppercase tracking-[0.25em] text-amber-100/60">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(252,211,77,0.85)]" />
            <span>
              Internal systems hub
              {theme === "light" ? " — Light heat mode" : " — Dark heat mode"}
            </span>
          </div>
          <motion.div
            className="mt-3 flex flex-col items-center gap-1"
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, 4, 0] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
            }
          >
            <div className="h-8 w-px bg-gradient-to-b from-amber-400 via-amber-500/40 to-transparent" />
            <span className="text-[10px] font-body tracking-[0.3em] text-amber-100/55">
              SCROLL
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function MaterialSection({ opacity, symbolX, textX, backgroundY, sectionRef }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.section
      className="relative flex min-h-screen items-center px-6 py-20 md:px-14"
      style={{ opacity }}
      transition={{ ease: EASE }}
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-red-500/15 via-orange-500/10 to-transparent"
          style={prefersReducedMotion ? undefined : { y: backgroundY }}
          transition={{ ease: EASE }}
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-16 md:flex-row md:items-stretch">
        <motion.div
          className="flex flex-1 items-center justify-center"
          style={{ x: symbolX, willChange: "transform" }}
          transition={{ ease: EASE }}
        >
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-3xl border border-orange-400/10" />
            <MaterialSymbol />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col justify-center gap-6 rounded-3xl border border-orange-500/20 bg-black/40 p-8 backdrop-blur-sm md:p-10"
          style={{ x: textX, willChange: "transform" }}
          transition={{ ease: EASE }}
        >
          <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-red-500/40 bg-red-900/10 px-3 py-1 text-[11px] font-body uppercase tracking-[0.22em] text-red-200/80">
            <span className="h-1 w-6 bg-gradient-to-r from-red-500 via-orange-500 to-amber-400" />
            <span>Material tracker system</span>
          </div>
          <div className="space-y-3">
            <h2 className="font-heading heading-text text-2xl tracking-[0.14em] md:text-3xl">
              Material Tracker System
            </h2>
            <p className="max-w-xl font-body body-text-soft text-sm leading-relaxed md:text-[15px]">
              Track and reconcile materials in real time across warehouses, yards, and
              live engineering projects, with every movement tied back to AKK jobs.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-3 text-xs font-body body-text">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Inventory flow visualisation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span>Project-linked material movements</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
              <span>Real-time reconciliation</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <motion.a
              href="https://material-tracker.akk.sg"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit the AKK Material Tracker system (opens in a new tab)"
              className="group inline-flex items-center gap-2 border border-transparent bg-gradient-to-r from-red-700/40 via-orange-700/40 to-amber-700/40 px-5 py-3 text-sm font-body tracking-[0.18em] uppercase text-amber-100/90 outline-none focus-visible:ring-2 focus-visible:ring-amber-300/85 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200">
                  Visit Material Tracker here
                </span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
              </span>
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                →
              </motion.span>
            </motion.a>
            <span className="text-[10px] font-body uppercase tracking-[0.22em] text-amber-100/45">
              Live system • material-tracker.akk.sg
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function TimesheetSection({ opacity, symbolX, textX, backgroundY, sectionRef }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.section
      className="relative flex min-h-screen items-center px-6 py-20 md:px-14"
      style={{ opacity }}
      transition={{ ease: EASE }}
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-amber-400/15 via-amber-500/10 to-transparent"
          style={prefersReducedMotion ? undefined : { y: backgroundY }}
          transition={{ ease: EASE }}
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-16 md:flex-row md:items-stretch">
        <motion.div
          className="flex flex-1 flex-col justify-center gap-6 rounded-3xl border border-amber-500/25 bg-black/35 p-8 backdrop-blur-sm md:p-10"
          style={{ x: textX, willChange: "transform" }}
          transition={{ ease: EASE }}
        >
          <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-amber-400/40 bg-amber-900/20 px-3 py-1 text-[11px] font-body uppercase tracking-[0.22em] text-amber-100/85">
            <span className="h-1 w-6 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200" />
            <span>Timesheet manager</span>
          </div>
          <div className="space-y-3">
            <h2 className="font-heading heading-text text-2xl tracking-[0.14em] md:text-3xl">
              Timesheet Manager
            </h2>
            <p className="max-w-xl font-body body-text-soft text-sm leading-relaxed md:text-[15px]">
              Capture attendance from the field, align overtime and shifts, and export
              workforce data ready for payroll and project reporting.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-3 text-xs font-body body-text">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-300" />
              <span>QR-based clock-in and clock-out</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-orange-300" />
              <span>Overtime tracking and approvals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
              <span>Payroll-ready reporting</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <motion.a
              href="https://timesheet-manager.akk.sg"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit the AKK Timesheet Manager system (opens in a new tab)"
              className="group inline-flex items-center gap-2 border border-transparent bg-gradient-to-r from-amber-700/40 via-orange-700/40 to-red-700/40 px-5 py-3 text-sm font-body tracking-[0.18em] uppercase text-amber-100/90 outline-none focus-visible:ring-2 focus-visible:ring-amber-300/85 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100">
                  Visit Timesheet Manager here
                </span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
              </span>
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                →
              </motion.span>
            </motion.a>
            <span className="text-[10px] font-body uppercase tracking-[0.22em] text-amber-100/45">
              Live system • timesheet-manager.akk.sg
            </span>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-1 items-center justify-center"
          style={{ x: symbolX, willChange: "transform" }}
          transition={{ ease: EASE }}
        >
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-3xl border border-amber-300/15" />
            <TimesheetSymbol />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function FutureSystemsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex items-center px-6 py-20 md:px-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-500/15 via-orange-500/10 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-3xl border border-amber-500/25 bg-black/45 px-6 py-8 backdrop-blur-sm md:flex-row md:items-center md:px-10 md:py-10">
        <motion.div
          className="flex-1 space-y-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-900/30 px-3 py-1 text-[11px] font-body uppercase tracking-[0.22em] text-amber-100/85">
            <span className="h-1 w-6 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200" />
            <span>Future internal systems</span>
          </div>
          <h2 className="font-heading heading-text text-xl tracking-[0.16em] md:text-2xl">
            Built to host the next wave of AKK tools
          </h2>
          <p className="max-w-xl font-body body-text-soft text-sm leading-relaxed md:text-[15px]">
            The AKK landing environment is engineered to onboard additional internal
            platforms, from engineering analytics to project control dashboards, without
            compromising performance or clarity.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-1 justify-end"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
        >
          <div className="relative w-full max-w-xs">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl border border-amber-400/20" />
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-black/80 via-zinc-900/80 to-black/90 px-5 py-4">
              <div className="mb-4 flex items-center justify-between text-[11px] font-body uppercase tracking-[0.22em] text-amber-100/70">
                <span>Upcoming modules</span>
                <span className="inline-flex items-center gap-1 text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
                  <span>Designing</span>
                </span>
              </div>
              <div className="space-y-2 text-xs font-body body-text-soft">
                <div className="flex items-center justify-between gap-2 rounded-xl bg-white/5 px-3 py-2">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
                    <span>Project analytics hub</span>
                  </span>
                  <span className="rounded-full bg-red-900/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-red-200/90">
                    Concept
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 rounded-xl bg-white/5 px-3 py-2">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <span>Equipment lifecycle view</span>
                  </span>
                  <span className="rounded-full bg-orange-900/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-orange-100/90">
                    Exploring
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 rounded-xl bg-white/5 px-3 py-2">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-300" />
                    <span>Project control cockpit</span>
                  </span>
                  <span className="rounded-full bg-amber-900/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-amber-100/90">
                    Coming soon
                  </span>
                </div>
              </div>
              <motion.div
                className="mt-4 h-px w-full bg-gradient-to-r from-red-500/60 via-orange-400/80 to-amber-300/70"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
              />
              <div className="mt-3 flex items-center justify-between text-[10px] font-body text-amber-100/55">
                <span>AKK internal roadmap</span>
                <span>
                  No public access • Internal design only
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer({ opacity }) {
  return (
    <motion.footer
      className="relative flex min-h-[30vh] items-center px-6 pb-10 pt-14 md:px-14"
      style={{ opacity }}
      transition={{ ease: EASE }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-6">
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        />
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <p className="font-heading text-xs tracking-[0.25em] text-amber-100/70">
              © AKK ENGINEERING PTE. LTD.
            </p>
            <p className="font-body body-text-soft text-xs">
              Internal systems access for materials and workforce management.
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 text-[10px] font-body text-amber-100/45 md:items-end">
            <span>Singapore • 15 Kaki Bukit Rd 4, #01-50</span>
            <span>Premium internal tooling • Designed for engineering operations</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const containerRef = useRef(null);
  const materialSectionRef = useRef(null);
  const timesheetSectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const theme = useHeatTheme();

  const phases = useScrollPhases(containerRef);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 260);
    return () => clearTimeout(timeout);
  }, []);

  useMotionValueEvent(phases.scrollYProgress, "change", () => {});

  const rootClassName = useMemo(
    () =>
      "relative min-h-screen bg-root text-root font-body selection:bg-amber-400/30 selection:text-amber-50 cursor-default",
    []
  );

  return (
    <>
      <main
        ref={containerRef}
        className={rootClassName}
      >
        <EdgeGlowFrame scrollYProgress={phases.scrollYProgress} />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-root">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F0A05_0,#120603_55%,#050203_100%)] opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,18,0.22),transparent_60%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.18),transparent_55%)] mix-blend-screen" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light">
            <div className="noise-layer" />
          </div>
        </div>

        <Hero
          heroOpacity={phases.heroOpacity}
          heroTitleY={phases.heroTitleY}
          theme={theme}
          backgroundY={phases.heroBackgroundY}
        />
        <SystemsRail
          materialRef={materialSectionRef}
          timesheetRef={timesheetSectionRef}
        />
        <motion.div
          className="relative"
          style={{
            scale: prefersReducedMotion ? 1 : phases.midScale,
            willChange: "transform"
          }}
          transition={{ ease: EASE }}
          >
          <MaterialSection
            opacity={phases.materialOpacity}
            symbolX={phases.materialSymbolX}
            textX={phases.materialTextX}
            backgroundY={phases.materialBackgroundY}
            sectionRef={materialSectionRef}
          />
          <TimesheetSection
            opacity={phases.timesheetOpacity}
            symbolX={phases.timesheetSymbolX}
            textX={phases.timesheetTextX}
            backgroundY={phases.timesheetBackgroundY}
            sectionRef={timesheetSectionRef}
          />
        </motion.div>
        <FutureSystemsSection />
        <Footer opacity={phases.footerOpacity} />
        <ScrollIndicator scrollYProgress={phases.scrollYProgress} />
      </main>
      {showLoader && <LoadingOverlay />}
    </>
  );
}
