import { Account } from '@liskhq/lisk-chain';
import { BaseChannel } from 'lisk-framework';
import { DPOSAccountProps } from 'lisk-framework/dist-node/modules/dpos';
import { TokenAccount } from 'lisk-framework/dist-node/modules/token/types';
import { PersonaAccountProps } from '../../../../../types/core/account/persona';
import { RedeemableNFTAccountProps } from '../../../../../types/core/account/profile';
import { RegisteredUsernameAsset } from '../../../../../types/core/chain/registrar';

export const invokeGetAccount = async (
  channel: BaseChannel,
  address: string,
): Promise<
  PersonaAccountProps & Account & DPOSAccountProps & RedeemableNFTAccountProps & TokenAccount
> => channel.invoke('persona:getAccount', { address });

export const invokeGetAddressByUsername = async (
  channel: BaseChannel,
  username: string,
): Promise<RegisteredUsernameAsset | undefined> =>
  channel.invoke('persona:getAddressByUsername', { username });
