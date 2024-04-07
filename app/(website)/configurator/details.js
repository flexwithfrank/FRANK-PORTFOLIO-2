import LargeText from "@/components/LargeText";
import Badge from "@/components/ui/Badge";

export default function Details() {
  return (
    <div className="animate-scroll mt-5 w-full text-left px-8">
      <LargeText h1="Vehicle Configurator" color="#ff3c00" />

      {/*<!-- Component: Two columns even layout --> */}
      <section className="w-full py-12">
        <div className="lg-6 container lg:px-12">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              {/*<!-- Component: Rounded full basic base sized badge --> */}

              <Badge text='Javascript' />

              {/*<!-- End Rounded full basic base sized badge --> */}
            </div>
            <div className="col-span-4 lg:col-span-6 ibm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Quam adipiscing vitae proin sagittis nisl
              rhoncus mattis. Morbi quis commodo odio aenean sed
              adipiscing. Lacinia at quis risus sed vulputate odio ut
              enim blandit. Pellentesque dignissim enim sit amet
              venenatis urna. A iaculis at erat pellentesque
              adipiscing commodo elit. Ut sem viverra aliquet eget sit
              amet tellus cras. Bibendum at varius vel pharetra vel.
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </div>
  );
}
