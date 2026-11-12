import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[130px] dark:bg-indigo-500/10" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20 sm:p-12 lg:p-16"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
          <span className="text-lg font-bold">C</span>
        </div>

        <h2 className="mt-7 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Bring your team into
          <br />
          <span className="text-indigo-600 dark:text-indigo-400">
            one workspace.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
          Communicate, organize, and build together with ComX.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/SignUp"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <span className="text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-slate-700 underline-offset-4 hover:underline dark:text-slate-200"
            >
              Log in
            </Link>
          </span>
        </div>
      </motion.div>
    </section>
  );
}