# ic-alloy-basic-eth-frontend

A React/Vite frontend for the multi user wallet example [ic-alloy-basic-eth](https://github.com/kristoferlund/ic-alloy-basic-eth).

## Run locally

Pre-requisites:

1. Deploy the `ic-alloy-basic-eth` smart contract canister

- Fork the [ic-alloy-basic-eth](https://github.com/kristoferlund/ic-alloy-basic-eth) repository.
- Start `dfx` and deploy contract according to instructions in that repository

2. Copy `.env` from `basic-eth` to the root of this repository

- Rename the file `.env.basic-eth`
- This information is required for the frontend to find the smart contract

Run:

```bash
dfx start --background
dfx deploy
```

## Author

- [kristofer@kristoferlund.se](mailto:kristofer@kristoferlund.se)
- Twitter: [@kristoferlund](https://twitter.com/kristoferlund)
- Discord: kristoferkristofer
- Telegram: [@kristoferkristofer](https://t.me/kristoferkristofer)

## License

This project is licensed under the MIT License. See the LICENSE file for more
details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you
have any suggestions or improvements.
