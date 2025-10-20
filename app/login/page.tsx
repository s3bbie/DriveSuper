'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    if (!email.endsWith('@superdrug.com')) {
      alert('Only @superdrug.com staff can log in.')
      return
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else router.push('/')
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">DriveSuper 🚗</h1>
      <p className="mb-4 text-gray-600">Sign in with your Superdrug email</p>

      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded mb-2 w-64"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded mb-4 w-64"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded"
      >
        Sign In
      </button>
    </main>
  )
}
