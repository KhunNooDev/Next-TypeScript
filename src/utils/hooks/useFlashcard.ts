import { useRouter } from "next/router";
import useSWR from "swr";

import { fetcher, fetchAndCache } from "@/utils/fetcher";

const key = "/api/flashcard";

export default function useFlashcard(id?: string) {
  const router = useRouter();
  const url = id ? `${key}/${id}` : key;
  // return useSWR(url, fetcher);
  const { data, error } = useSWR(url, fetcher);
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.success === false
  ) {
    // Navigate to 404 page if success is false
    router.push("/404");
  }

  return { data, error };
}

export function getFlashcard() {
  return fetchAndCache(key);
}
