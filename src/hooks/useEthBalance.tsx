import { useActor } from "@/actor";
import { Principal } from "@dfinity/principal";
import { useQuery } from "@tanstack/react-query";
import useHandleAgentError from "./useHandleAgentError";

export default function useEthBalance(principal?: Principal) {
  const { actor: basic_eth } = useActor();
  const { handleAgentError } = useHandleAgentError();
  return useQuery({
    queryKey: ['balance', principal],
    queryFn: async () => {
      const result = await basic_eth?.get_balance(principal ? [principal] : []);
      try {
        if (result === undefined) {
          throw new Error("Undefined balance returned.")
        }
        if ('Err' in result) {
          throw new Error(result.Err);
        }
        BigInt(result.Ok)
        return result.Ok
      } catch (e) {
        handleAgentError(e);
        console.error(e);
        throw new Error("Invalid balance returned.")
      }
    },
    enabled: !!basic_eth
  })
}


