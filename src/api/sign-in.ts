import { api } from '@/lib/axios'

export interface SiginBody {
    email: string
}

export async function signIn({ email }: SiginBody) {
    await api.post('/authenticate', { email })
}