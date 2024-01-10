import Link from "next/link";
import Image from "next/image";

export default function Soon() {
    return (
        <main className="relative isolate min-h-full">
            <Image
                width={1920}
                height={1080}
                quality={50}
                placeholder={"blur"}
                blurDataURL={"https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"}
                src="https://res.cloudinary.com/tiyeni/image/upload/v1679808591/2X0A4983.jpg"
                alt="Coming Soon"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
            />
            <div
                className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8 text-primary-light text-shadow bg-primary-dark/70">
                <p className="text-base font-semibold leading-8">We are</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Coming Soon</h1>
                <p className="mt-4 text-base sm:mt-6">Please bear with us as this site is still under
                    construction</p>
                <div className="mt-10 flex justify-center">
                    <Link href="/" className="text-sm font-semibold leading-7">
                        <span aria-hidden="true">&larr;</span> Back to home
                    </Link>
                </div>
            </div>
        </main>
    )
}
