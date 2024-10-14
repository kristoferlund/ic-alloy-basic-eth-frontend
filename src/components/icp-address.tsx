import { Skeleton } from "./ui/skeleton";
import { useInternetIdentity } from "ic-use-internet-identity";

export function IcpAddress() {
  const { identity } = useInternetIdentity();

  if (!identity) {
    return <Skeleton className="w-full h-10" />
  }

  const principal = identity.getPrincipal().toString();

  return <div className="text-muted-foreground inline-block">
    {principal?.slice(0, 5)}...{principal?.slice(-5)}
  </div>
}
