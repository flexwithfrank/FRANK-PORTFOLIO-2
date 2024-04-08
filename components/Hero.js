/* eslint-disable @next/next/no-img-element */
export default function Hero({ url }) {
  return (
    <>
      <div
        class="flex h-screen items-center bg-gray-50"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        <section class="w-full bg-cover bg-center">
          <div class="container mx-auto text-left text-white">
            <div class="flex items-center">&nbsp;</div>
          </div>
        </section>
      </div>
    </>
  );
}
