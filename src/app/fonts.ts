import { Italianno, Lato } from 'next/font/google'

export const fontHeader = Italianno({
    weight: '400',
    subsets: ['latin-ext'],
    display: 'swap',
})


export const fontBody = Lato({
    weight: ['300', '400'],
    subsets: ['latin-ext'],
    display: 'swap',
})