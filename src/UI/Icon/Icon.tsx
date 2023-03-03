import clsx from 'clsx'
import { FunctionComponent } from 'react'

import { IIconProps } from './Icon.d'

import styles from './Icon.module.scss'

export const Icon: FunctionComponent<IIconProps> = ({
  id,
  width = 16,
  height = 16,
  className,
  ...props
}): JSX.Element => {
  return (
    <svg
      className={clsx(styles.root, className)}
      width={width}
      height={height}
      {...props}
    >
      <use xlinkHref={`/images/symbol/svg/sprite.css.svg#${id}`} />
    </svg>
  )
}
