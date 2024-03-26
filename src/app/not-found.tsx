"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <>
      <div className="flex h-full min-h-[calc(100vh-3.5rem)] items-center justify-center bg-secondary">
        <Card className="w-[420px]">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl lg:text-7xl">404</CardTitle>
            <CardDescription>
              The page you&#8217;re looking for doesn&#8217;t exist.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/" className="text-[#64748B]">
                Go Back
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
