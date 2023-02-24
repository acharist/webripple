import { SVGAttributes } from 'react'
import { TIcons } from '@/types'

export interface IIconProps extends SVGAttributes<SVGElement> {
  id: TIcons
  width?: number
  height?: number
}
