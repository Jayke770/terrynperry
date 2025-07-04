"use client"
import { SessionProvider, SessionProviderProps } from 'next-auth/react'
export function NextAuthSessionProvider({ children, session }: { session: SessionProviderProps['session'], children: React.ReactNode }) {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}