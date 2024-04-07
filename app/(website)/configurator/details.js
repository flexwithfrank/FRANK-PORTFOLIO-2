/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import LargeText from "@/components/LargeText";
import Badge from "@/components/ui/Badge";
import Hero from "@/components/Hero";
import OpenText from "@/components/OpenText";

export default function Details() {
  return (
    <div className="animate-scroll mt-5 min-h-screen w-full text-left">
      <LargeText
        h1="Vehicle Configurator"
        h2="Vehicle Configurator"
        color="#ff3c00"
      />

      {/*<!-- Component: Two columns even layout --> */}
      <section className="w-full px-8 pt-24 lg:px-0 ">
        <div className="lg-6 container lg:px-12">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              {/*<!-- Component: Rounded full basic base sized badge --> */}

              <Badge
                value1="HTML"
                value2="Tailwind CSS"
                value3="React"
                value4="JavaScript"
                value5="API"
                titleText="Frameworks"
              />

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>
            <div className="inter-medium col-span-4 lg:col-span-6">
              Crafted using HTML, Tailwind CSS, and JavaScript, this
              dynamic platform offers customers an interactive
              experience, allowing them to visualize their dream
              vehicle. Seamlessly blending design and functionality,
              the configurator provides an intuitive interface for
              users to customize every aspect of their dream ride,
              from paint color to interior features.
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}

      <div className="py-12">
        <OpenText h1="" p1="Try it out" color="#ff3c00" />
      </div>

      <div className="w-full">
        <iframe
          src="https://messaging-widget.pages.dev/"
          title="Messaging Widget"
          style={{ width: "100%", height: "100vh" }}
        />
      </div>

      {/*<!-- Component: Two columns even layout --> */}
      <section className="w-full px-8 lg:px-0 ">
        <div className="lg-6 container">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              {/*<!-- Component: Rounded full basic base sized badge --> */}

              <OpenText
                h1=""
                p1="Personalized Automated Email based on customers preferences"
                color="#ff3c00"
              />

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>
            <div className="inter-medium col-span-4 lg:col-span-6">
              <img
                class="mx-auto rounded-lg object-cover object-center shadow-2xl"
                alt="hero"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/mka/nq1/m03/personalized%20email%20follow%20up%20%282%29.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </div>
  );
}
