import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckSquare2,
  Code2,
  FolderKanban,
  MessageCircle,
  UsersRound,
  Video,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Real-time communication",
    description:
      "Communicate instantly with your team through real-time conversations and group chats.",
    eyebrow: "COMMUNICATE",
  },
  {
    icon: FolderKanban,
    title: "Project management",
    description:
      "Organize projects, track progress, and keep your team's work structured.",
    eyebrow: "ORGANIZE",
  },
  {
    icon: CheckSquare2,
    title: "Task management",
    description:
      "Create, assign, prioritize, and track tasks from one shared workspace.",
    eyebrow: "EXECUTE",
  },
  {
    icon: CalendarDays,
    title: "Shared calendar",
    description:
      "Coordinate schedules, deadlines, and team events without leaving ComX.",
    eyebrow: "SCHEDULE",
  },
  {
    icon: UsersRound,
    title: "Community",
    description:
      "Create shared spaces where teams can communicate, discuss, and collaborate.",
    eyebrow: "CONNECT",
  },
  {
    icon: Video,
    title: "Voice & video",
    description:
      "Jump into voice and video calls when conversations need more than text.",
    eyebrow: "MEET",
  },
//   {
//     icon: Code2,
//     title: "Code collaboration",
//     description:
//       "Keep development work connected to the conversations, projects, and tasks around it.",
//     eyebrow: "BUILD",
//   },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeatureSection() {
  return (
    <section className="border-y border-slate-200/70 bg-white/60 px-4 py-24 dark:border-slate-800/70 dark:bg-[#080d1a]/50 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={cardVariants}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400"
          >
            Everything connected
          </motion.p>

          <motion.h2
            variants={cardVariants}
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
          >
            One workspace.
            <br />
            <span className="text-slate-400 dark:text-slate-500">
              Every part of the workflow.
            </span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400"
          >
            ComX combines the tools teams use every day without forcing every
            conversation, task, and deadline into a different application.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-indigo-200 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-indigo-500/30 ${
                  index === 0 || index === 6
                    ? "lg:col-span-1"
                    : ""
                }`}
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-indigo-500/10" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-transform duration-200 group-hover:scale-105 dark:bg-indigo-500/10 dark:text-indigo-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[9px] font-semibold tracking-[0.16em] text-slate-400">
                      {feature.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-7 text-base font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>

                  <div className="mt-6 h-px w-0 bg-indigo-500 transition-all duration-300 group-hover:w-8" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}