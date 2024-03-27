import Image from "next/image";

export default function ProductPage() {
  return (
    <section className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/moletom-never-stop-learning.png"
          width={1000}
          height={1000}
          alt=""
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Moletom fabricado com 88% de algodão e 12% de poliéster.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            R$129
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de R$10,75
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="w-14 h-9 flex items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold border border-zinc-700"
            >
              P
            </button>
            <button
              type="button"
              className="w-14 h-9 flex items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold border border-zinc-700"
            >
              M
            </button>
            <button
              type="button"
              className="w-14 h-9 flex items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold border border-zinc-700"
            >
              G
            </button>
            <button
              type="button"
              className="w-14 h-9 flex items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold border border-zinc-700"
            >
              GG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold"
        >
          Adicionar ao carinho
        </button>
      </div>
    </section>
  );
}
