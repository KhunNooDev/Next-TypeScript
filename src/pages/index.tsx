import { HiShoppingCart } from "react-icons/hi";
import useSWR from "swr";
import axios from "axios";
import { IProduct } from "@/utils/database/models/Product";

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

Home.title = "Home";
export default function Home() {
  const { data, error } = useSWR("/api/product", fetcher);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <main className="min-h-screen">
      <section className="bg-blue-500 p-3 text-white">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 xl:gap-x-8">
          {data.data.map((product: IProduct) => (
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
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <div className="self-end">
                  <button className="rounded-full bg-yellow-500 p-2 text-white">
                    <span className="sr-only">Open ShoppingCart</span>
                    <HiShoppingCart size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
