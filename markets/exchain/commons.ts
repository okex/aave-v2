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
    }
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
      DAI: '0xd04647B7CB523bb9f26730E9B6dE1174db7591Ad',
      USDC: '0xd04647B7CB523bb9f26730E9B6dE1174db7591Ad',
      USDT: '0xd04647B7CB523bb9f26730E9B6dE1174db7591Ad',
      WBTC: '0xd04647B7CB523bb9f26730E9B6dE1174db7591Ad',
      USD: '0xd04647B7CB523bb9f26730E9B6dE1174db7591Ad'
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
    [eOkexChainNetwork.exchain]: '',
  },
  WrappedNativeToken: {
    [eOkexChainNetwork.exchain]: '',
  },
  ReserveFactorTreasuryAddress: {
    [eOkexChainNetwork.exchain]: '',
  },
  IncentivesController: {
    [eOkexChainNetwork.exchain]: ZERO_ADDRESS,
  },
};
