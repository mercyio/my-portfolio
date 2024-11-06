import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto max-w-md px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-zinc-800 rounded focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 bg-zinc-800 rounded focus:outline-none"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600"
          >
            Login
          </Button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-emerald-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
