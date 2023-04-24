import {FilterInterface} from '../../redux/filter/types';

export type ButtonProps = {
  $btnType: string
  type: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export type LinkButtonProps = {
  $btnLinkType: string
  to: string
  children: React.ReactNode
  className?: string
  state?: FilterInterface
}