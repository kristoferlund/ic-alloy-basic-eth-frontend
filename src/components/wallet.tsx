import { useInternetIdentity } from "ic-use-internet-identity";
import ReceiveButton from "./receive-button";
import SendButton from "./send-button";
import { Address } from "./address";
import { Balance } from "./balance";
import Logout from "./logout";

export default function Wallet() {
  const { identity } = useInternetIdentity();

  if (!identity) return null;

  return <section className="flex flex-col gap-5">
    <div className="flex justify-between items-center">
      <h3>Wallet</h3>
      <Logout />
    </div>
    <Address />
    <Balance />
    <div className="flex gap-5">
      <ReceiveButton />
      <SendButton />
    </div>
  </section>

}
