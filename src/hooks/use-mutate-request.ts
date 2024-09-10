import {
  useMutation,
  MutationFunction,
  useQueryClient,
} from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import useAuth from './use-auth';
import { useRef, useState } from 'react';
import { removeEmptyQueryParams } from '@/utils';

 type MutateRequestProps = {
  mutationOptions?: object;
  invalidateQueries?: any[];
  refetchQueries?: any[];
  onSuccessOptions?: object;
  headers?: object;
  removeQueries?: any[];
};

 type SubmitParamsProps = {
  urlPath: string;
  reqDataParam?: object;
};


const useMutateRequest = ({
  mutationOptions,
  invalidateQueries = [],
  refetchQueries = [],
  onSuccessOptions = {},
  headers = {},
  requestType = 'POST',
  removeQueries = [],
}: MutateRequestProps & {
  requestType?: 'POST' | 'PUT' | 'DELETE' | 'GET';
}) => {
  const { token, endPointUrl } = useAuth();
  const finalHeaders = {
    Authorization: `Bearer ${token}`,
    ...headers,
  };

  const onSubmit: MutationFunction<
    AxiosResponse<any, any>,
    SubmitParamsProps
  > = async ({ urlPath, reqDataParam }) => {
    const cleanedUrlPath = removeEmptyQueryParams(urlPath);

    switch (requestType) {
      case 'POST':
        return await axios.post(
          `${endPointUrl}${cleanedUrlPath}`,
          reqDataParam,
          {
            headers: finalHeaders,
          }
        );
      case 'PUT':
        return await axios.put(
          `${endPointUrl}${cleanedUrlPath}`,
          reqDataParam,
          {
            headers: finalHeaders,
          }
        );
      case 'DELETE':
        return await axios.delete(`${endPointUrl}${cleanedUrlPath}`, {
          headers: finalHeaders,
        });
      case 'GET':
        return await axios.get(`${endPointUrl}${cleanedUrlPath}`, {
          headers: finalHeaders,
        });
      default:
        throw new Error(`Unsupported request type: ${requestType}`);
    }
  };

  const queryClient = useQueryClient();
  const responseRef = useRef<AxiosResponse<any, any> | null>(null);
  const [response, setResponse] = useState<AxiosResponse<any, any> | null>(null);

  const { mutateAsync, isPending, error, isError } = useMutation({
    mutationFn: onSubmit,
    onSuccess: async (response) => {
      responseRef.current = response;
      setResponse(response);
      toast.success(
        requestType === 'POST'
          ? 'Successfully submitted'
          : requestType === 'PUT'
          ? 'Successfully updated'
          : 'Success'
      );
      if (invalidateQueries.length) {
        queryClient.invalidateQueries({ queryKey: invalidateQueries });
      }
      if (refetchQueries.length) {
        queryClient.refetchQueries({ queryKey: refetchQueries });
      }
      if (removeQueries.length) {
        queryClient.removeQueries({ queryKey: removeQueries });
      }

      if (Object.values(onSuccessOptions).length) {
        Object.values(onSuccessOptions).forEach((option) => {
          if (typeof option === 'function') {
            option(response);
          }
        });
      }
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Something went wrong');
    },
    ...mutationOptions,
  });

  return { mutateAsync, isPending, error, isError, response: responseRef.current || response };
};

export default useMutateRequest;
