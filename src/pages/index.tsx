import { HiShoppingCart } from "react-icons/hi";

import { IProduct } from "@/utils/database/models/Product";
import useProduct from "@/utils/hooks/useProduct";

Home.title = "Home";
export default function Home() {
  const { data } = useProduct();

  return (
    <main className="min-h-screen">
      <section className="bg-blue-500 p-3 text-white">Welcome</section>
    </main>
  );
}
