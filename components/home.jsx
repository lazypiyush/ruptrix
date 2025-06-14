"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

const Dash = () => {
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = function (...args) {
      if (
        typeof args[0] === "string" &&
        args[0].includes("Missing property")
      ) {
        return;
      }
      originalConsoleError.apply(console, args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <div className="pb-20 px-4">
      <div>
        <h1 className="text-3xl sm:text-5xl md:text-8xl lg:text-[105px] pb-6 font-bold text-center gradient-title">
          Manage your Finances <br /> with Intelligence
        </h1>
        <p className="text-center text-muted-foreground mt-4 max-w-xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>

        <div className="flex justify-center items-center">
          <div>
            <Spline
              scene="https://prod.spline.design/nFoKZIIgGXZU8DR0/scene.splinecode"
              className="w-full h-full"
            />
            <div className="bg-white h-10 w-40 relative right-[-420] top-[-57]"></div>
            
          </div>
        </div>

        <div className="relative mt-4 flex justify-center items-center">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-black px-8 relative left-[-32.5] top-[-152px] h-10.5 hover:cursor-pointer hover:bg-black hover:text-white"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dash;
