import { mutate } from "swr";
import axios, { AxiosResponse } from "axios";

interface ErrorWithResponse extends Error {
  response?: AxiosResponse;
}

export async function fetcher(path: string) {
  try {
    const result = await axios.get(path);
    return result.data;
  } catch (error) {
    console.error(error);
    return Promise.reject<ErrorWithResponse>(error);
  }
}
export async function fetchAndCache(key: string) {
  console.log("Prefetching", key);
  const request = await fetcher(key);
  mutate(key, request, false);
  return request;
}
