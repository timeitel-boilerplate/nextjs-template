// empty object
export type EmptyObject = { [key: string]: never };

// is a type an empty object?
export type IsEmpty<T, Y = true, N = false> = T extends EmptyObject ? Y : N;
