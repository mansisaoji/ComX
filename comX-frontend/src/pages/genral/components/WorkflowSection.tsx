import { motion } from "framer-motion";
import {
  CheckCircle2,
  CheckSquare2,
  Code2,
  FolderKanban,
  MessageCircle,
  Phone,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discuss",
    description: "Start with a conversation.",
    icon: MessageCircle,
    feature: "Chat",
  },
  {
    number: "02",
    title: "Plan",
    description: "Turn ideas into projects.",
    icon: FolderKanban,
    feature: "Projects",
  },
  {
    number: "03",
    title: "Assign",
    description: "Give work clear ownership.",
    icon: CheckSquare2,
    feature: "Tasks",
  },
  {
    number: "04",
    title: "Execute",
    description: "Build and move work forward.",
    icon: Code2,
    feature: "Code",
  },
  {
    number: "05",
    title: "Collaborate",
    description: "Talk when text isn't enough.",
    icon: Phone,
    feature: "Calls",
  },
  {
    number: "06",
    title: "Complete",
    description: "Finish work with everyone aligned.",
    icon: CheckCircle2,
    feature: "Workspace",
  },
];

export default function WorkflowSection() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
            From conversation to execution
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            Connect the way teams
            <br />
            <span className="text-slate-400 dark:text-slate-500">
              actually work.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
            Work rarely happens in a straight line. ComX keeps the
            conversation, planning, execution, and collaboration in the same
            place.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-500/30 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <p className="mt-5 text-[9px] font-semibold tracking-[0.15em] text-slate-400">
                    {step.number}
                  </p>

                  <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {step.description}
                  </p>

                  <div className="mx-auto mt-3 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[9px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {step.feature}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}