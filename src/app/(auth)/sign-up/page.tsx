import { SignUpForm } from "@/features/auth/components/SignUpForm";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              ZenithUp
            </h1>
          </Link>
          <p className="text-muted-foreground mt-2">
            Join Africa&apos;s Intelligent Financial OS
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 border-2">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Create Account
          </h2>
          <SignUpForm />

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">
              Already have an account?{" "}
            </span>
            <Link
              href="/sign-in"
              className="text-primary hover:text-accent font-semibold transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
