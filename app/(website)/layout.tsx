import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import GetNavbar from "@/components/getnavbar";
import { urlForImage } from "@/lib/sanity/image";
import FooterV1 from "@/components/FooterV1";
import NavbarV4 from "@/components/NavbarV4";
import PrelineScript from "@/components/PrelineScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

async function sharedMetaData(params: any) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph images
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title || "Frank Rodriguez Portfolio",
      template: "%s | Stablo"
    },
    description:
      settings?.description || "Frank Rodriguez Portfolio",
    keywords: ["Salesforce", "Developer", "Marketing", "Consultant "],
    authors: [{ name: "Frank" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Frank Rodriguez Portfolio",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }: any) {
  return await sharedMetaData(params);
}

export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode;
  params: any;
}) {
  const settings = await getSettings();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="w-full bg-[#fff] text-gray-800 antialiased">
        <Providers>
          {/* <GetNavbar {...settings} /> */}
          <NavbarV4 posts={undefined} />

          <div>{children}</div>
          {/* <Footer {...settings} /> */}

          <FooterV1 />
        </Providers>
      </body>
      <PrelineScript />
    </html>
  );
}

export const revalidate = 86400;
