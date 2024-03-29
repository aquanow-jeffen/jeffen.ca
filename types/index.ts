import { ReactNode } from 'react'
import { MotionValue } from 'framer-motion';

export type MouseType = {
  position: {
    x: MotionValue<number>
    y: MotionValue<number>
  }
  velocity: {
    x: MotionValue<number>
    y: MotionValue<number>
  }
}

export type DockContextType = {
  hovered: boolean
  width: number | undefined
}

export type DockItemProps = {
  key?: string
  id?: string
  children?: ReactNode
  route?: string
}

export type IconProps = {
  className?: string
  height?: string | number
  width?: string | number
}