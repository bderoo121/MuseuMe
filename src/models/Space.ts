export type Space = {
  rooms: Room[]
  geometry?: unknown // Might enable spherical mini-world environments (maybe even hyperbolic??)
}

export type Room = {
  floors?: FloorProps[]
  walls?: Wall[]
  hasCeiling?: boolean
  category?: unknown
  name?: string // Used for mapping and accessibility purposes
}

/**
 * Represents a section of walkable space
 */
export type FloorProps = {
  length: number
  width: number
  position: [number, number, number] // x, z, y
}

export type Wall = {
  width: number
  height: number
}
