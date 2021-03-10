import { ReactNode } from 'react';

export type EmptyObject = Record<string, never>;

export type IsEmpty<T, Y = true, N = false> = T extends EmptyObject ? Y : N;

export type PlaceholderProp = Record<string, never> | ReactNode;
