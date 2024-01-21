import Link from "next/link";
import ClientImage from "@/components/ClientImage";

export default function Soon() {
    return (
        <main className="relative isolate min-h-full">
            <ClientImage fill src="https://res.cloudinary.com/tiyeni/image/upload/v1679808591/2X0A4983.jpg"/>
            <div
                className="relative mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8 text-primary-light text-shadow bg-primary-dark/70">
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
