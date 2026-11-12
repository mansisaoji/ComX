import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  UsersRound,
} from "lucide-react";

export default function WorkspacePreview() {
  return (
    <section className="border-y border-slate-200/70 bg-slate-50/50 px-4 py-24 dark:border-slate-800/70 dark:bg-[#070c18]/60 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
              Everything stays connected
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Your work has context.
              <br />
              <span className="text-slate-400 dark:text-slate-500">
                Keep it together.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-500 dark:text-slate-400">
              A message can become a task. A task belongs to a project. A
              project has deadlines. ComX keeps these pieces close enough that
              your team doesn't have to reconstruct the context every time.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Communication connected to actual work",
                "Projects and tasks in one workspace",
                "Schedules and collaboration side by side",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>

                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[40px] bg-indigo-500/5 blur-3xl dark:bg-indigo-500/10" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-[#0b1020] dark:shadow-black/30 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    COM-X WORKSPACE
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    Backend Development
                  </p>
                </div>

                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-7 w-7 rounded-full border-2 border-white bg-slate-300 dark:border-[#0b1020] dark:bg-slate-700"
                    />
                  ))}
                </div>
              </div>

              {/* Chat card */}
              <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <MessageCircle className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Team Chat
                    </p>
                    <p className="text-[9px] text-slate-400">
                      Backend Team
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-slate-50 p-3 dark:bg-slate-900/70">
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    "API integration is ready for review."
                  </p>
                  <p className="mt-1 text-[9px] text-slate-400">
                    Alex · 2 minutes ago
                  </p>
                </div>
              </div>

              {/* Connection */}
              <div className="flex justify-center py-2">
                <div className="h-5 w-px bg-indigo-200 dark:bg-indigo-500/30" />
              </div>

              {/* Task */}
              <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        API Integration
                      </p>
                      <p className="text-[9px] text-slate-400">
                        Task · High priority
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-medium text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    Complete
                  </span>
                </div>
              </div>

              {/* Bottom cards */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                  <CalendarDays className="h-4 w-4 text-indigo-500" />

                  <p className="mt-3 text-[9px] text-slate-400">Deadline</p>

                  <p className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Friday
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                  <UsersRound className="h-4 w-4 text-indigo-500" />

                  <p className="mt-3 text-[9px] text-slate-400">Team</p>

                  <p className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    8 members
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}