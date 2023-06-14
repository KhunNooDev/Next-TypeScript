import { HiShoppingCart } from "react-icons/hi";
import Link from "next/link";

import { IProduct } from "@/utils/database/models/Product";
import useProduct from "@/utils/hooks/useProduct";

Services.title = "Services";
Services.requireAuth = true;
export default function Services() {
  const { data } = useProduct();

  return (
    <main className="min-h-screen">
      <section className="bg-blue-500 p-3 text-white">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 xl:gap-x-8">
          {!data ? (
            <div>Loading...</div>
          ) : (
            data.data.map((product: IProduct) => (
              <div
                key={product._id}
                className="group relative rounded-lg bg-white"
              >
                <div className="aspect-h-1 aspect-w-1 lg:aspect-none h-48 w-48 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mx-3 my-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/services/${product._id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                  <div className="self-end">
                    <button className="rounded-full bg-yellow-500 p-2 text-white">
                      <span className="sr-only">Open ShoppingCart</span>
                      <HiShoppingCart size={24} />
                      {/* open to [...id].tsx */}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
