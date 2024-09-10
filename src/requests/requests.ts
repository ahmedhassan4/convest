import { siteConfig } from "@/config/site.config";
import { removeEmptyQueryParams } from "@/utils";
import { cookies } from 'next/headers';

export const serverSideFetch = async ({url, tags}: {url: string, tags?: any[]}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value && JSON.parse(cookieStore.get('token')?.value || '');
  const urlEndPoint = siteConfig.endPointURL;

  try {
    const response = await fetch(`${urlEndPoint}${removeEmptyQueryParams(url)}`, {
      next: { tags: tags },
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.statusText} (${response.status})`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Expected JSON response from API');
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.message.includes('401')) {
      return `Error: Unauthorized (${error.message})`;
    } else {
      throw new Error(`Fetch error: ${error.message}`);
    }
  }
};
