import { useRouter } from "next/router";
import useProduct from "@/utils/hooks/useProduct";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useProduct(id as string);

  const product = data && data.data;

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="min-h-screen">
      <button onClick={handleGoBack}>Go Back</button>
      <section className="bg-blue-500 p-3 text-white">
        {!data ? (
          <div>Loading...</div>
        ) : (
          <div key={product._id} className="group relative rounded-lg bg-white">
            <div className="aspect-h-1 aspect-w-1 lg:aspect-none h-48 w-48 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mx-3 my-4 flex justify-between">
              <div>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
