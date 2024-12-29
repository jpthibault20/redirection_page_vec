"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="relative hidden lg:flex lg:w-1/2 ">
            <div className="absolute inset-0">
              <Image
                src="/bgLoginPages.svg"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col lg:w-1/2 px-3">

            <div className='lg:hidden'>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Aero Connect"
                  width={48}
                  height={32}
                  className="h-20 w-auto"
                />
                <span className="text-2xl font-light text-gray-700">Aero Connect</span>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md space-y-8">
                <div className='hidden lg:flex lg:flex-col lg:items-center'>
                  <h1 className='text-black font-thin text-4xl'>
                    Aéro Connect
                  </h1>
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">Cette application n&apos;est plus disponible</h1>
                  <p className="text-gray-500">
                    Nous avons mis à jour notre plateforme. Veuillez utiliser notre nouvelle application.
                  </p>
                </div>

                <Button
  variant="perso"
  className="w-full bg-purple-600 hover:bg-purple-700"
  onClick={() => {
    window.location.href = "https://app.aeroconnect.fr";
  }}
>
  Accéder à la nouvelle plateforme
</Button>

              </div>
            </div>
          </div>
        </div>
  );
}
