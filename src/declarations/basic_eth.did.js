export const idlFactory = ({ IDL }) => {
  const Wei = IDL.Nat;
  return IDL.Service({
    'get_address' : IDL.Func([IDL.Opt(IDL.Principal)], [IDL.Text], []),
    'get_balance' : IDL.Func([IDL.Opt(IDL.Principal)], [IDL.Text], []),
    'send_eth' : IDL.Func([IDL.Text, Wei], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
