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
    <div className="relative mx-auto mt-20 px-8 lg:max-w-7xl lg:px-0">
      <div className="relative">
        <div className="py-6">
          <img
            class="h-32 w-32 rounded-full"
            src="https://ik.imagekit.io/is20rnl48/DSC_5283%20(1).jpg?updatedAt=1709309781808"
            alt="image description"
          />
        </div>
        <h2 className="brita tracking-loose mb-6 font-sans text-3xl font-bold uppercase text-[#ff3c00] sm:text-[9rem] sm:leading-none impact tracking-tight">
          SEATTLE BASED SALESFORCE DEV.
        </h2>
      </div>

      {/* <img
        src="https://store.fiskerinc.com/on/demandware.static/-/Library-Sites-fiskerSharedLibrary/default/dw273dd943/images/homepage-banner/homeproduct-desktop.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        alt="TEST"
      />
      <div
        className="relative h-screen bg-gray-900 bg-opacity-30"
        style={{ styles }}>
        <div className="mx-auto px-4 sm:max-w-2xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-12 w-full max-w-4xl pt-40 xl:pr-16">
              <h2 className="brita mb-6 font-sans text-3xl font-bold uppercase tracking-loose text-white sm:text-7xl sm:leading-none">
                NEWS FOR YOUR NEXT ADVENTURE.
              </h2>
              <p className="dm-sans-med mb-4 max-w-xl text-base text-gray-100 md:text-lg">
                Fisker news to keep you up to date.
              </p>
              <div className="mt-10 flex">
                <ButtonV1
                  borderColor={"#c9ec66"}
                  color={"#000"}
                  bgColor={"#c9ec66"}
                  buttonText="Explore Post"
                  href="/archive"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
