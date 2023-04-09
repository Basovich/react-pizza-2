import { FilterInterface } from '../../redux/filter/types';

export type ButtonProps = {
    $btnType: string
    type: string
    children: React.ReactNode | React.ReactNode[]
    className?: string
    onClick?: () => void
  }
  
  export type LinkButtonProps = {
    $btnLinkType: string
    to: string
    children: React.ReactNode | React.ReactNode[] | Element[]
    className?: string
    state?: FilterInterface
  }