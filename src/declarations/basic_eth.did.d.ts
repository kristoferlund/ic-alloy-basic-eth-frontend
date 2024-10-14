import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type Wei = bigint;
export interface _SERVICE {
  'get_address' : ActorMethod<[[] | [Principal]], string>,
  'get_balance' : ActorMethod<[[] | [Principal]], string>,
  'send_eth' : ActorMethod<[string, Wei], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
