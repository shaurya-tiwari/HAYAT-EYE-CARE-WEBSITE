import Image from "next/image";

export default function LoaderUI() {
  return (
    <>
      <div className="relative w-[100vw] h-[250px] md:w-[800px] md:h-[300px] animate-pulse px-4">
        <Image 
          src="/HAYAT LOGO.svg" 
          alt="Hayat Eye Care" 
          fill 
          className="object-contain scale-110 md:scale-100"
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
