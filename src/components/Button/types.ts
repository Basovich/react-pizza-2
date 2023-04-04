import { FilterInterface } from '../../redux/filter/types';

export type ButtonProps = {
    $btnType: string
    type: string
    children: React.ReactNode
    onClick?: () => void
  }
  
  export type LinkButtonProps = {
    $btnLinkType: string
    to: string
    state: FilterInterface
    children: React.ReactNode
  }