/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
"use-client";
import LargeText from "@/components/LargeText";
import Badge from "@/components/ui/Badge";
import Hero from "@/components/Hero";
import OpenText from "@/components/OpenText";

export default function Loyalty() {
  return (
    <div className="animate-scroll mt-0 min-h-screen w-full bg-[#211F1F] pt-12 text-left">
      <LargeText
        h1="Loyalty Program"
        h2="Loyalty Program"
        color="#EEEEEE"
      />

      {/*<!-- Component: Two columns even layout --> */}
      <section className="w-full px-8 pt-24 lg:px-0 ">
        <div className="lg-6 container lg:px-12">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              {/*<!-- Component: Rounded full basic base sized badge --> */}

              <Badge
                value1="HTML"
                value2="CSS"
                value3="SQL"
                value4="JavaScript"
                value5="Automation Studio"
                value6="Marketing Cloud"
                titleText="Tech Stack"
                color="#EEEEEE"
              />

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>

            <div className="inter-medium col-span-4 text-[#eeeeee] lg:col-span-6">
              Designed from scratch using modern web technologies,
              this loyalty program provided a user-friendly UI that
              makes earning rewards a breeze. This innovative approach
              has proven its worth, bringing in an impressive $10
              million in revenue since its launch (2023). By seamlessly blending entertainment
              with functionality, this loyalty program sets the bar
              high for customer engagement and satisfaction.
              <br /> <br />
              View the full web experience{" "}
              <a
                href="https://cloud.marketing.fiskerinc.com/rewards"
                className="font-bold underline"
                target="_blank">
                here
              </a>
              .
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}

      <div className="w-full py-12">
        <Hero url="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/gqx/onc/uxe/Group%2048%20%281%29.png" />
      </div>

      {/*<!-- Component: Two columns even layout --> */}
      <section className="w-full px-8 py-12 lg:px-0">
        <div className="lg-6 container">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              {/*<!-- Component: Rounded full basic base sized badge --> */}

              <OpenText h1="" p1="Preview the page" color="#eee" />

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>
            <div className="inter-medium col-span-4 lg:col-span-6">
              <img
                class="mx-auto rounded-lg object-cover object-center shadow-2xl"
                alt="hero"
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/jwj/jds/mm5/screencapture-cloud-marketing-fiskerinc-rewards-2024-04-08-18_10_36%201%20%281%29%20%281%29.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </div>
  );
}
