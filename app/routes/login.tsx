import { Form, Link } from "@remix-run/react";
import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-100 to-cyan-600">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Form method="post" className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="input input-bordered w-full"
                placeholder="Username"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input input-bordered w-full mt-4"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Sign In
            </button>
          </div>
          <div className="flex  justify-end mt-4">
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="text-indigo-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
