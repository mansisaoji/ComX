import { Link } from "react-router-dom";

export default function HomeFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 dark:border-slate-800 dark:bg-[#050816] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900 dark:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs text-white">
              C
            </span>
            COM-X
          </Link>

          <p className="mt-3 max-w-xs text-xs leading-5 text-slate-400">
            Collaborate in real-time.
            <br />
            Assign tasks seamlessly.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
          <Link
            to="/"
            className="transition-colors hover:text-slate-700 dark:hover:text-slate-200"
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="transition-colors hover:text-slate-700 dark:hover:text-slate-200"
          >
            Contact
          </Link>

          <Link
            to="/dashboard"
            className="transition-colors hover:text-slate-700 dark:hover:text-slate-200"
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-100 pt-5 dark:border-slate-900">
        <p className="text-[10px] text-slate-400">
          © {new Date().getFullYear()} ComX
        </p>
      </div>
    </footer>
  );
}