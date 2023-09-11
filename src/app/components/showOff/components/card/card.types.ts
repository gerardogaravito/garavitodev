import { EnumCardVariants } from '../../cardsInfo';
import { zIndexMutaleListType } from '../../utils';

export interface ICard {
  foregroundRef: React.RefObject<HTMLDivElement>;
  position: { x: number; y: number };
  isFromRight: boolean;
  isFromMiddle: boolean;
  tabName: string;
  title: string;
  dates: string;
  url: string;
  variant?: EnumCardVariants;
  zIndex: number;
  zIndexMutableList: zIndexMutaleListType[];
  setZIndexMutableList: React.Dispatch<
    React.SetStateAction<zIndexMutaleListType[]>
  >;
}
