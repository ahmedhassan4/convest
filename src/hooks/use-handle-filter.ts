import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';

export interface UseHandleFilterReturnType {
  onFilter: (key: string, value: any, push?: boolean) => void;
  onReset: (key: string, push?: boolean) => void;
  onResetAll: (push?: boolean) => void;
  [param: string]: any; // This allows for dynamic string keys with any value
}

const useHandleFilter = (): UseHandleFilterReturnType => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();

  function isJson(item: string): any {
    try {
      return JSON.parse(item);
    } catch (_e) {
      return item;
    }
  }

  const onFilter = (key: string, value: any, push = false) => {
    const valueAsString = ['string', 'number'].includes(typeof value)
      ? String(value)
      : JSON.stringify(value);
    params.set(key, valueAsString);
    router[push ? 'push' : 'replace'](`?${params.toString()}`, { scroll: false });
  };

  const onReset = (key: string, push = false) => {
    params.delete(key);
    router[push ? 'push' : 'replace'](`?${params.toString()}`);
  };

  const onResetAll = (push = false) => {
    const keys = Array.from(params.keys());
    keys.forEach((key) => {
      params.delete(key);
    });
    router[push ? 'push' : 'replace'](`?${params.toString()}`);
  };

  const dynamicParams: { [param: string]: any } = Object.fromEntries(
    Array.from(params.entries()).map(([key, value]) => [key, isJson(value)])
  );

  return { onFilter, onReset, onResetAll, page: 1, push: true, ...dynamicParams };
};

export default useHandleFilter;