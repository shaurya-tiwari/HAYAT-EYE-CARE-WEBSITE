import Image from "next/image";

export default function LoaderUI() {
  return (
    <>
      <div className="relative w-80 h-32 md:w-[500px] md:h-[180px] animate-pulse">
        <Image 
          src="/HAYAT LOGO.svg" 
          alt="Hayat Eye Care" 
          fill 
          className="object-contain"
          priority
        />
      </div>

      <div
        className="w-10 h-10 rounded-full border-4 border-gray-100 border-t-[--primary] animate-spin"
        aria-hidden="true"
      />
    </>
  );
}
