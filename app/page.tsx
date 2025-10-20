import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">DriveSuper</h1>
      <p className="text-gray-600 mb-8">Welcome to the staff carpool app</p>

      <div className="flex gap-4">
        <Link href="/offer" className="bg-pink-600 text-white px-6 py-3 rounded">
          Offer a Ride
        </Link>
        <Link href="/find" className="border border-pink-600 text-pink-600 px-6 py-3 rounded">
          Find a Ride
        </Link>
      </div>
    </main>
  )
}
