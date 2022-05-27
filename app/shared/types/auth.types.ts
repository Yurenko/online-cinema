import { NextPage } from 'next'

export interface TypeRole {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRole

export type TypeComponentAuthField = { children: any; Component: TypeRole }
