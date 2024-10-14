import { CircleArrowDown, Copy } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import useEthAddress from "@/hooks/useEthAddress";
import { toast } from "@/hooks/use-toast";

function copyToClipboard(address: string) {
  navigator.clipboard.writeText(address);
  toast({ title: "Copied" });
}

export default function ReceiveButton() {

  const { data: address, isPending: isFetchingAddress } = useEthAddress();

  return <Dialog >
    <DialogTrigger asChild>
      <Button disabled={isFetchingAddress} className="flex flex-col h-30 w-full items-start gap-1">
        <CircleArrowDown className="w-5 h-5" />Receive
      </Button>
    </DialogTrigger>
    <DialogContent className='w-[400px]'>
      <DialogHeader>
        <DialogTitle>Receive</DialogTitle>
      </DialogHeader>
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold hover:bg-muted-foreground cursor-pointer"
        onClick={() => copyToClipboard(address!)}
      >
        {address}
        <Copy className="inline-block h-3 w-3 ml-2 pb-[2px]" />
      </code>
    </DialogContent>
  </Dialog>
}
