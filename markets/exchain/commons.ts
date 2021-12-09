import BigNumber from 'bignumber.js';
import {
  oneEther,
  oneRay,
  RAY,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
} from '../../helpers/constants';
import { ICommonConfiguration, eXDaiNetwork, eOkexChainNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  ATokenNamePrefix: 'Aave ExChain Market',
  StableDebtTokenNamePrefix: 'Aave ExChain Market stable debt',
  VariableDebtTokenNamePrefix: 'Aave ExChain Market variable debt',
  SymbolPrefix: 'e',
  ProviderId: 0, // Overriden in index.ts
  OracleQuoteCurrency: 'ETH',
  OracleQuoteUnit: oneEther.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    DAI: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDC: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDT: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    WBTC: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    STAKE: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TEMP
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eOkexChainNetwork.exchain]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdmin: {
    [eOkexChainNetwork.exchain]: undefined,
  },
  EmergencyAdminIndex: 1,
  ProviderRegistry: {
    [eOkexChainNetwork.exchain]: '',
  },
  ProviderRegistryOwner: {
    [eOkexChainNetwork.exchain]: '',
  },
  LendingPoolConfigurator: {
    [eOkexChainNetwork.exchain]: '0',
  },
  LendingPool: {
    [eOkexChainNetwork.exchain]: '0',
  },
  LendingRateOracle: {
    [eOkexChainNetwork.exchain]: '',
  },
  LendingPoolCollateralManager: {
    [eOkexChainNetwork.exchain]: '',
  },
  TokenDistributor: {
    [eOkexChainNetwork.exchain]: '',
  },
  WethGateway: {
    [eOkexChainNetwork.exchain]: '',
  },
  AaveOracle: {
    [eOkexChainNetwork.exchain]: '',
  },
  FallbackOracle: {
    [eOkexChainNetwork.exchain]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    [eOkexChainNetwork.exchain]: {
      DAI: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      STAKE: ZERO_ADDRESS,
    },
  },
  ReserveAssets: {
    [eOkexChainNetwork.exchain]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eOkexChainNetwork.exchain]: '',
  },
  WETH: {
    [eOkexChainNetwork.exchain]: '', // DAI: xDAI is the base token, DAI is also there, We need WXDAI
  },
  WrappedNativeToken: {
    [eOkexChainNetwork.exchain]: '', // DAI: xDAI is the base token, DAI is also there, We need WXDAI
  },
  ReserveFactorTreasuryAddress: {
    [eOkexChainNetwork.exchain]: '', // TEMP
  },
  IncentivesController: {
    [eOkexChainNetwork.exchain]: ZERO_ADDRESS,
  },
};
