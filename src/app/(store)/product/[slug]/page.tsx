import Image from "next/image";
import { Metadata } from "next";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { AddToCartButton } from "@/components/add-to-cart-button";

interface ProductProps {
  params: {
    slug: string;
  };
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const products = await response.json();

  return products;
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return {
    title: product.title,
  };
}

export async function generateStaticParams() {
  const response = await api("/products/featured");
  const products: Product[] = await response.json();

  return products.flatMap((product) => {
    return { slug: product.slug };
  });
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug);
  return (
    <section className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          width={1000}
          height={1000}
          alt=""
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em até 12x s/ juros de{""}
            {(product.price / 12).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
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

        <AddToCartButton productId={product.id} />
      </div>
    </section>
  );
}
