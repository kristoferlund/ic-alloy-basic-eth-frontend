# A multiuser Ethereum wallet built on ICP

A React/Vite frontend for the multi user wallet example [ic-alloy-basic-eth](https://github.com/kristoferlund/ic-alloy-basic-eth).

> [!TIP]
>
> ## Live demo: <https://7vics-6yaaa-aaaai-ap7lq-cai.icp0.io>

Features:

- Login with Internet Identity to generate an Ethereum wallet address
- Receive and send Ethereum to other users

![](./media/screenshot.png)

## Prerequisites

The project requires the IC developer environment to be installed. Follow the instructions at [internetcomputer.org](https://internetcomputer.org/docs/current/developer-docs/backend/rust/dev-env)

## Run locally

### 1. Fork and build the `basic_eth` canister

- The backend canister for this project is located in a separate repository.
- Fork the [ic-alloy-basic-eth](https://github.com/kristoferlund/ic-alloy-basic-eth) repository.

```bash
cd ic-alloy-basic-eth
dfx canister create basic_eth
dfx build basic_eth
```

### 2. Build and deploy the frontend

```bash
cd ic-alloy-basic-eth-frontend
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
