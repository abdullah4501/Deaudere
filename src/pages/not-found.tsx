import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent)]" />
      <Card className="w-full max-w-md mx-4 bg-black/40 backdrop-blur-sm border-white/10 shadow-xl relative z-10">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-white">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-white/70 mb-6">
            The page you're looking for doesn't exist.
          </p>
          
          <Link href="/">
            <Button variant="default" className="w-full">
              Go Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
