import { Heart } from "phosphor-react";

export default function TestSetup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-500">
      <div className="bg-white/90 rounded-xl shadow-md px-8 py-6 flex flex-col items-center gap-3">
        <Heart size={32} weight="fill" className="text-accent" />
        <p className="text-sm font-medium text-neutral-700">
          Setup Verified! 💜 Tailwind + Phosphor + ShadCN working.
        </p>
      </div>
    </div>
  );
}
