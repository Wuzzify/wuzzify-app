import Link from "next/link";

export default function footer() {
  return (
<footer className="right-0 left-0 py-8 px-4 rounded-lg shadow bg-black/40 backdrop-blur-lg mt-24 flex items-center border-t-[1px] border-neutral-900 justify-between">
    <aside className="flex items-center gap-[2px]">
        <p className="text-2xl font-thin">Wuz</p>
            {/* <Image
                src="/fuzzieLogo.png"
                width={15}
                height={15}
                alt="fuzzie logo"
                className="shadow-sm"
            /> */}
        <p className="text-2xl font-bold">zify</p>
    </aside>
    <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">

    </div>
    <aside className="flex items-center gap-4">
            <Link
                href="/contact"
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Message Us
                </span>
            </Link>
        </aside>
</footer>

  )
}
