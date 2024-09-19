import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="bg-hero h-fit-content absolute top-0 z-10 w-full">
      <div className="container mx-auto my-20 flex flex-col justify-between p-4 lg:flex-row">
        <div className="w-full justify-center lg:w-[40%]">
          <div className="relative my-16 -ml-[1%] h-96 w-96 items-center bg-white lg:mx-auto">
            <h1 className="text-brand p-6 text-center text-3xl font-bold">
              A GREAT APP MAKES YOUR LIFE BETTER
            </h1>
            <p className="text-paragraph px-6 py-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <h3 className="p-6 text-xl font-semibold text-black">
              DOWNLOAD THE APP NOW
            </h3>
            <div className="flex justify-between px-6">
              <Image
                alt="Download with Google Play"
                src={"images/download-google.svg"}
                width={151}
                height={45}
              />
              <Image
                alt="Download with App Store"
                src={"images/download-apple.svg"}
                width={151}
                height={45}
              />
            </div>
            <div className="absolute -right-10 -top-12 -z-10 h-[480px] w-96 border-[15px] border-[#7572ff] lg:-right-12" />
          </div>
        </div>
        <div className="ml-[12%] mt-10 w-full justify-center lg:ml-0 lg:mt-0 lg:w-[40%]">
          <Image
            alt="Mobile app mockup"
            src={"images/hero-phone.svg"}
            width={378}
            height={423}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
