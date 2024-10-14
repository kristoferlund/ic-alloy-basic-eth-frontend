import useEthAddress from "@/hooks/useEthAddress";
import { Skeleton } from "./ui/skeleton";

export function Address() {
  const { data: address, isPending: isFetchingAddress } = useEthAddress();

  if (isFetchingAddress) {
    return <Skeleton className="w-full h-10" />
  }

  return <div className="text-muted-foreground">
    {address?.slice(0, 5)}...{address?.slice(-5)}
  </div>
}
