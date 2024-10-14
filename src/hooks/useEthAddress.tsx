import { useActor } from "@/actor";
import { Principal } from "@dfinity/principal";
import { useQuery } from "@tanstack/react-query";

export default function useEthAddress(principal?: Principal) {
  const { actor: basic_eth } = useActor();
  return useQuery({
    queryKey: ['address', principal],
    queryFn: () => basic_eth?.get_address(principal ? [principal] : []),
    enabled: !!basic_eth
  })

}
