/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
"use-client";
import LargeText from "@/components/LargeText";
import Badge from "@/components/ui/Badge";
import Hero from "@/components/Hero";
import OpenText from "@/components/OpenText";

export default function Inventory() {
  return (
    <div className="animate-scroll mt-0 min-h-screen w-full bg-[#211F1F] pt-12 text-left">
      <LargeText
        h1="Inventory Management"
        h2="Inventory Management"
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
                value3="AMPSCRIPT"
                value4="JavaScript"
                value5="SQL"
                value6="Marketing Cloud"
                titleText="Tech Stack"
                color="#EEEEEE"
              />

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>

            <div className="inter-medium col-span-4 text-[#eeeeee] lg:col-span-6">
              I developed an inventory management tool for Fisker Inc,
              an Electric Vehicle Company, to present product data to
              customers in a user-friendly manner. The algorithm I
              created displayed personalized vehicle features based on customer
              profiles. This tool generated 11,000+ leads and achieved
              a 10% conversion rate, totaling $41M+ in revenue.
              <br /> <br />
              View the full web experience{" "}
              <a
                href="https://cloud.marketing.fiskerinc.com/search-inventory"
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
        <Hero url="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/82l/2f6/1bc/Group%2052%20%282%29%20%281%29.png" />
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
                src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/81p7eutj/jc5/0d2/jjn/screencapture-cloud-marketing-fiskerinc-search-inventory-2024-04-08-19_12_34%20%281%29%20%281%29%202%20%281%29.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </div>
  );
}
