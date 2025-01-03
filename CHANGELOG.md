## 0.13.0 (2025-01-03)

This was a version bump only, there were no code changes.

## 0.12.0 (2025-01-03)


### 🚀 Features

- display public key and remove unnecessary verification ([8ab57f6](https://github.com/fidesit/wallet-adapter/commit/8ab57f6))
- add some logs ([0eaacf4](https://github.com/fidesit/wallet-adapter/commit/0eaacf4))
- support versioned transactions ([#2](https://github.com/fidesit/wallet-adapter/pull/2))
- expose anchor helpers ([#4](https://github.com/fidesit/wallet-adapter/pull/4))
- Add support to wallet standard and solana mobile wallet adapter ([#11](https://github.com/fidesit/wallet-adapter/pull/11))
- inject signal based methods ([#15](https://github.com/fidesit/wallet-adapter/pull/15))
- modernize things up ([#18](https://github.com/fidesit/wallet-adapter/pull/18))
- **cdk:** add directive to connect wallet ([39541ba](https://github.com/fidesit/wallet-adapter/commit/39541ba))
- **cdk:** add directive to disconnect wallet ([4ffc3ec](https://github.com/fidesit/wallet-adapter/commit/4ffc3ec))
- **cdk:** add select wallet directive ([5acce8e](https://github.com/fidesit/wallet-adapter/commit/5acce8e))
- **cdk:** remove selectWallet from wallet adapter store directive ([0221b57](https://github.com/fidesit/wallet-adapter/commit/0221b57))
- **cdk:** add a sign message action and a encode text pipe ([22e4800](https://github.com/fidesit/wallet-adapter/commit/22e4800))
- **cdk-example:** use obscure address pipe ([02edef7](https://github.com/fidesit/wallet-adapter/commit/02edef7))
- **cdk-example:** use tailwind for the ui ([fa08cec](https://github.com/fidesit/wallet-adapter/commit/fa08cec))
- **material:** replace old modal button with trigger and update cdk usage ([8182170](https://github.com/fidesit/wallet-adapter/commit/8182170))
- **material:** add base styles ([e224291](https://github.com/fidesit/wallet-adapter/commit/e224291))
- **material-example:** setup material example app ([aab63b4](https://github.com/fidesit/wallet-adapter/commit/aab63b4))
- **raw-example:** add missing logs when selecting wallet ([43c50a7](https://github.com/fidesit/wallet-adapter/commit/43c50a7))

### 🩹 Fixes

- use same code as in raw ([5bdeef0](https://github.com/fidesit/wallet-adapter/commit/5bdeef0))
- improve anchor support ([#3](https://github.com/fidesit/wallet-adapter/pull/3))
- **cdk:** revert removal of modal button directive ([146aa72](https://github.com/fidesit/wallet-adapter/commit/146aa72))
- **cdk-example:** remove unnused property ([fb4b063](https://github.com/fidesit/wallet-adapter/commit/fb4b063))
- **cdk-example:** use the proper import path ([2347e76](https://github.com/fidesit/wallet-adapter/commit/2347e76))
- **core:** use the proper versions ([6791af6](https://github.com/fidesit/wallet-adapter/commit/6791af6))
- **core:** deal with building issues ([59c2f2e](https://github.com/fidesit/wallet-adapter/commit/59c2f2e))
- **core:** use the adapters explicitcly ([d36c260](https://github.com/fidesit/wallet-adapter/commit/d36c260))
- **data-access:** use provideComponentStore for safer injection ([d32721f](https://github.com/fidesit/wallet-adapter/commit/d32721f))
- **material:** add missing import ([1b6c2cf](https://github.com/fidesit/wallet-adapter/commit/1b6c2cf))
- **material-example:** avoid using custom webpack and update reeadme ([2d0914d](https://github.com/fidesit/wallet-adapter/commit/2d0914d))
- **raw-example:** use default executors and explicit wallets ([b8b9fd1](https://github.com/fidesit/wallet-adapter/commit/b8b9fd1))
- **ui-material:** close button not working ([#14](https://github.com/fidesit/wallet-adapter/pull/14))

### ❤️  Thank You

- Armando Medina @armsves
- Dan M
- Daniel Marin

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**Note:** Version 0 of Semantic Versioning is handled differently from version 1 and above.
The minor version will be incremented upon a breaking change and the patch version will be incremented for features.

## [Unreleased]

### Features

- data-access: add `adapters` to `WalletConfig`.
- data-access: create `provideWalletAdapter` for standalone.
- docs: add README to the repository.
- raw-example: create a raw example app and added instructions on how to get there in the README.
- cdk: use `inject` instead of the `constructor` for DI.
- cdk: add `HdConnectWalletDirective` to give HTML elements the ability to connect the selected wallet.
- cdk: add `HdDisconnectWalletDirective` to give HTML elements the ability to disconnect the selected wallet.
- cdk: add `HdSelectWalletDirective` to give HTML elements the ability to select a wallet.
- cdk: add `HdSelectAndConnectWalletDirective` to give HTML elements the ability to select a wallet and connect to it.
- material: add `HdWalletModalTriggerDirective` to give HTML elements the ability to open the material select wallet modal.
- cdk-example: create a cdk example app and added instructions on how to get there in the README.
- material-example: create a material example app and added instructions on how to get there in the README.
- cdk: add `HdSignMessageDirective` to give HTML elements the ability to sign an encoded message.
- cdk: add `HdEncodeTextPipe` to transform a string into a Uint8Array.

### Breaking changes

- cdk: remove `HdWalletConnectButtonDirective`.
- cdk: remove `HdWalletDisconnectButtonDirective`.
- cdk: remove `HdWalletModalButtonDirective`.
- material: remove `HdWalletModalTriggerDirective`.
- cdk: remove `selectWallet` from `HdWalletAdapterDirective`
- cdk: add `hd` prefix to all inputs and outputs from elements.

## [0.5.1] - 2023-01-15

### Fixes

- core: Bump missing dependencies.

### Breaking Changes

- core: Give support to Angular 15.

## [0.4.0]

### Breaking Changes

- core: Give support to Angular 14.

## [0.3.2]

### Breaking Changes

- core: Give support to Angular 13.

## [0.2.2]

### Breaking Changes

- core: Give support to Angular 12.

## [0.1.1] - 2021-01-31

Initial release.

### Includes

- data-access: Library to support handling wallets in Angular applications.
- cdk: UI library that gives headless widgets for creating custom UIs with wallet integration.
- material: Angular Material library with common widgets for wallet integration.
