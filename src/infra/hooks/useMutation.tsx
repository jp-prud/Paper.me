import {useState} from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function mutate(variables: TVariables) {
    try {
      setIsLoading(true);

      const data = await mutationFn(variables);

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (erro) {
      console.log(erro);

      if (options?.onError) {
        options.onError(options?.errorMessage || '');
      }

      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    mutate,
    isLoading,
    error,
  };
}
