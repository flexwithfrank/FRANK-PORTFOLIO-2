import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import PostAlt from "@/components/postalt";
import ButtonV1 from "@/components/ButtonV1";
import { Button } from "@sanity/ui";
import HeroBannerV1 from "@/components/HeroBannerV1";
import CarouselV1 from "@/app/CarouselV1";
import OpenText from "@/components/OpenText";
import WhatWeDo from "@/components/WhatWeDo";
import IndustryTags from "@/components/industryTags";

export default function Post() {
  return (
    <>
      <HeroBannerV1 />
      <OpenText color="#ff3c00" p1="Recent Projects" />
      <CarouselV1 />
      <WhatWeDo />
      <IndustryTags />
    </>
  );
}
