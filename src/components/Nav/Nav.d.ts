import { TVariant } from '@/types'

type TDirection = 'row' | 'column'

export interface INavProps {
  variant?: TVariant
  direction?: TDirection
}
