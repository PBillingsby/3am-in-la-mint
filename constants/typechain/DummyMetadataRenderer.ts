/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common'

export interface DummyMetadataRendererInterface extends utils.Interface {
  functions: {
    'contractURI()': FunctionFragment
    'initializeWithData(bytes)': FunctionFragment
    'tokenURI(uint256)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic: 'contractURI' | 'initializeWithData' | 'tokenURI'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'contractURI', values?: undefined): string
  encodeFunctionData(functionFragment: 'initializeWithData', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'tokenURI', values: [BigNumberish]): string

  decodeFunctionResult(functionFragment: 'contractURI', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initializeWithData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result

  events: {}
}

export interface DummyMetadataRenderer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: DummyMetadataRendererInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    contractURI(overrides?: CallOverrides): Promise<[string]>

    initializeWithData(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    tokenURI(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>
  }

  contractURI(overrides?: CallOverrides): Promise<string>

  initializeWithData(
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  tokenURI(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  callStatic: {
    contractURI(overrides?: CallOverrides): Promise<string>

    initializeWithData(data: BytesLike, overrides?: CallOverrides): Promise<void>

    tokenURI(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    contractURI(overrides?: CallOverrides): Promise<BigNumber>

    initializeWithData(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    tokenURI(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>

    initializeWithData(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    tokenURI(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
