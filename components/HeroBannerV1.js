/* eslint-disable @next/next/no-img-element */

import ButtonV1 from "@/components/ButtonV1";

const styles = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column"
};

export default function HeroBannerV1() {
  return (
    <div className="relative mx-auto mt-8 px-8 pb-28 lg:max-w-7xl lg:px-0">
      <div className="relative">
        <div className="pt-6">
          <img
            className="h-32 w-32 transform rounded-full transition-transform duration-500 ease-in-out hover:scale-110"
            src="https://ik.imagekit.io/is20rnl48/DSC_5283%20(1).jpg?updatedAt=1709309781808"
            alt="image description"
          />
        </div>
        <div className="z-50 relative">
          <p className="dm-sans-med mt-4 max-w-3xl text-xl text-[#ff3c00] lg:text-2xl">
            Welcome to my digital frontier! As a passionate web and
            email developer, I thrive on transforming concepts into
            captivating online experiences. With a keen eye for detail
            and a commitment to seamless functionality, I am dedicated
            to bringing your vision to life.
          </p>
          <h2 className="brita tracking-loose impact z-50 mb-6 font-sans text-7xl font-bold uppercase tracking-tight text-[#ff3c00] sm:text-[9rem] sm:leading-none">
            LETS CREATE SOMETHING TOGETHER.
          </h2>
        </div>
        <div className="absolute bottom-0 right-0 z-10 m-8 w-48 transform transition-all duration-500 ease-in-out hover:translate-y-3 hover:scale-105 lg:right-40 lg:top-0 lg:w-[30rem]">
          {/* <video
            data-v-df76ad4d=""
            playsInline
            autoPlay
            loop
            decoding="async"
            src="https://live.springsummer.dk/media/uploads/Reel-v3.mp4#t=0.001"
            alt="Reel v3"
            preload="metadata"
            style={{ objectFit: "cover" }}></video> */}

          <img
            className="h-auto w-full transform transition-transform duration-500 ease-in-out hover:scale-110 shadow-2xl rounded-lg"
            src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/9p7/ac1/osj/Group%2030%20%281%29.png"
            alt="image description"
          />
        </div>
      </div>
    </div>
  );
}
