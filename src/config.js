const defaultConfig = {
  typeForm: {
    formId: 'C9AgcxOG',
    cashConnectFormId: 'ga83xeyj',
  },
  contractABI: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'Investor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'Investment',
          type: 'uint256',
        },
      ],
      name: 'deposit',
      type: 'event',
    },
    {
      inputs: [],
      name: 'CollectFunds',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'EndTGE',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'Invest',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'balances',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'FundsAccured',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'Investor',
          type: 'address',
        },
      ],
      name: 'getInvestment',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'TGEwallet',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  contractAddress: '0xf6CF0973E406C1b06B7793968D2e7785918CeC2c',
  walletConnect: {
    infuraId: '487ddc0aad7f47b8a1590a39c8a6bfa8',
  },
  onRamper: {
    defaultCrypto: 'USDT',
    defaultFiat: 'USD',
    defaultAddrs: {
      USDT: {
        address: '0x598c702f38bfc96ce804102a8d75fb233e67f318',
      },
    },
    isAddressEditable: false,
    API_KEY: 'pk_prod_OuMEqA83NnO0PIc7CNqFyxZlzbIUAQbAOvIL9aDDh0s0',
    onlyCryptos: ['USDT'],
    filters: {
      onlyCryptos: ['USDT'],
      onlyFiat: ['USD'],
    },
  },
};

const dev = {};

const prod = {};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {
  ...defaultConfig,
  ...config,
};
