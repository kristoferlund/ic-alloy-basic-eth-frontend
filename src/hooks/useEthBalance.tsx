import { useActor } from "@/actor";
import { Principal } from "@dfinity/principal";
import { useQuery } from "@tanstack/react-query";

export default function useEthBalance(principal?: Principal) {
  const { actor: basic_eth } = useActor();
  return useQuery({
    queryKey: ['balance', principal],
    queryFn: async () => {
      const balance = await basic_eth?.get_balance(principal ? [principal] : []);
      try {
        if (balance === undefined) {
          throw new Error("Undefined balance returned.")
        }
        BigInt(balance)
      } catch (e) {
        console.log(e)
        throw new Error("Invalid balance returned.")
      }
      return balance;
    },
    enabled: !!basic_eth
  })
}


