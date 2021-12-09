import { oneRay, ZERO_ADDRESS } from '../../helpers/constants';
import { IXDAIConfiguration, eXDaiNetwork, eOkexChainNetwork, IExChainConfiguration } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyWETH,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const ExChainConfig: IExChainConfiguration = {
  ...CommonsConfig,
  MarketId: 'ExChain Market',
  ProviderId: 4,
  ReservesConfig: {
    WETH: strategyWETH,
  },
  ReserveAssets: {
    [eOkexChainNetwork.exchain]: {
      WETH: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
    },
  },
};

export default ExChainConfig;
