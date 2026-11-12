import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  FolderKanban,
  MessageCircle,
  Search,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const previewItems = [
  {
    icon: MessageCircle,
    label: "Real-time chat",
    description: "Stay connected with your team.",
    className: "left-0 top-24 lg:-left-16",
    delay: 0.7,
  },
  {
    icon: CheckCircle2,
    label: "Tasks & projects",
    description: "Turn conversations into work.",
    className: "right-0 top-44 lg:-right-16",
    delay: 0.85,
  },
  {
    icon: CalendarDays,
    label: "Shared calendar",
    description: "Keep deadlines in sync.",
    className: "left-2 bottom-16 lg:-left-20",
    delay: 1,
  },
  {
    icon: Video,
    label: "Voice & video",
    description: "Meet without leaving ComX.",
    className: "right-2 bottom-8 lg:-right-20",
    delay: 1.15,
  },
];

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-6xl"
    >
      {/* Glow */}
      <div className="absolute -inset-10 -z-10 rounded-[40px] bg-indigo-500/10 blur-3xl dark:bg-indigo-500/15" />

      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-[#0b1020] dark:shadow-black/40 sm:rounded-3xl">
        {/* Browser chrome */}
        <div className="flex h-11 items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 dark:border-slate-800 dark:bg-[#0d1325] sm:h-12 sm:px-5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          </div>

          <div className="hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-1 text-[10px] text-slate-400 dark:border-slate-700 dark:bg-slate-900 sm:flex">
            comx.workspace
          </div>

          <div className="w-12" />
        </div>

        <div className="flex min-h-[400px]">
          {/* Sidebar */}
          <aside className="hidden w-48 shrink-0 border-r border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-[#080d1b] md:block">
            <div className="mb-7 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
                C
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                COM-X
              </span>
            </div>

            <p className="mb-2 px-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Workspace
            </p>

            <div className="space-y-1">
              {[
                ["Dashboard", true],
                ["Chat", false],
                ["Projects", false],
                ["Tasks", false],
                ["Calendar", false],
                ["Community", false],
                ["Code", false],
              ].map(([name, active]) => (
                <div
                  key={name as string}
                  className={`rounded-lg px-2.5 py-2 text-xs ${
                    active
                      ? "bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {name as string}
                </div>
              ))}
            </div>
          </aside>

          {/* Main dashboard */}
          <div className="min-w-0 flex-1 bg-white p-4 dark:bg-[#0b1020] sm:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium text-slate-400">
                  WORKSPACE
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
                  Good morning, Pratham
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden h-8 items-center gap-2 rounded-lg border border-slate-200 px-3 text-[10px] text-slate-400 dark:border-slate-700 sm:flex">
                  <Search className="h-3.5 w-3.5" />
                  Search
                </div>

                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600" />
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                {
                  icon: FolderKanban,
                  label: "Projects",
                  value: "12",
                  change: "+3 this month",
                },
                {
                  icon: CheckCircle2,
                  label: "Tasks",
                  value: "24",
                  change: "8 completed",
                },
                {
                  icon: CalendarDays,
                  label: "Events",
                  value: "6",
                  change: "This week",
                },
                {
                  icon: MessageCircle,
                  label: "Messages",
                  value: "38",
                  change: "12 unread",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-900/40 sm:p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                        <Icon className="h-3.5 w-3.5" />
                      </div>

                      <span className="text-[9px] text-slate-400">
                        {item.change}
                      </span>
                    </div>

                    <p className="mt-3 text-[10px] text-slate-400">
                      {item.label}
                    </p>

                    <p className="mt-0.5 text-xl font-semibold text-slate-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Activity */}
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Recent activity
                    </p>
                    <p className="mt-0.5 text-[9px] text-slate-400">
                      What's happening across your workspace
                    </p>
                  </div>

                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </div>

                <div className="space-y-3">
                  {[
                    ["Alex", "completed API integration", "2m"],
                    ["Priya", "created a new task", "18m"],
                    ["Rahul", "sent a message", "31m"],
                  ].map(([person, action, time]) => (
                    <div
                      key={`${person}-${action}`}
                      className="flex items-center gap-3"
                    >
                      <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600" />

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] text-slate-600 dark:text-slate-300">
                          <span className="font-semibold">{person}</span>{" "}
                          {action}
                        </p>
                      </div>

                      <span className="text-[9px] text-slate-400">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Project progress
                </p>

                <div className="mt-5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-500">Backend development</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      72%
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="h-6 w-6 rounded-full border-2 border-white bg-slate-300 dark:border-[#0b1020] dark:bg-slate-700"
                      />
                    ))}
                  </div>

                  <span className="text-[9px] text-slate-400">
                    4 members
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative px-4 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[11px] font-medium text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            A workspace built for teams
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Everything your team needs
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              to work together.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg"
          >
            ComX brings communication, tasks, projects, calendars, and
            collaboration into one workspace, so your team can spend less
            time switching tools and more time getting work done.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/SignUp"
              className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/25 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#050816] sm:w-auto"
            >
              Get Started
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/dashboard"
              className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:focus:ring-offset-[#050816] sm:w-auto"
            >
              Explore Workspace
            </Link>
          </motion.div>
        </motion.div>

        {/* Product visualization */}
        <div className="relative mt-16 px-0 sm:mt-20 lg:mt-24 lg:px-12">
          <DashboardPreview />

          {/* Floating capability cards */}
          {previewItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: item.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute z-20 hidden w-48 rounded-xl border border-slate-200/80 bg-white/95 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/90 dark:shadow-black/30 lg:block ${item.className}`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="mt-8 text-center text-xs text-slate-400"
        >
          One workspace for communication, planning, execution, and
          collaboration.
        </motion.div>
      </div>
    </section>
  );
}