"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if the current one is filled
      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !otp[index]) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto max-w-md px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Verify OTP</h1>
        <p className="text-center mb-4 text-gray-400">
          We’ve sent a One-Time Password (OTP) to your email. Please enter it
          below to verify your account.
        </p>
        <form className="space-y-4">
          <div className="flex justify-center space-x-2">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                id={`otp-${index}`}
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center bg-zinc-800 rounded focus:outline-none"
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-52 bg-emerald-500 hover:bg-emerald-600 h-8"
            >
              Verify OTP
            </Button>
          </div>
        </form>
        <p className="text-center mt-4">
          Didn't receive the OTP?{" "}
          <Link href="/signup" className="text-emerald-500 hover:underline">
            Resend OTP
          </Link>
        </p>
      </div>
    </main>
  );
}
