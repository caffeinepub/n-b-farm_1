import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitPreOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      customerName: string;
      phone: string;
      mangoVariant: string;
      packagingSize: string;
      quantity: number;
      unitPrice: number;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitPreOrder(
        data.customerName,
        data.phone,
        data.mangoVariant,
        data.packagingSize,
        BigInt(data.quantity),
        BigInt(data.unitPrice)
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['preOrders'] });
    }
  });
}

export function useGetAllPreOrders() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['preOrders'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPreOrders();
    },
    enabled: !!actor && !isFetching
  });
}
