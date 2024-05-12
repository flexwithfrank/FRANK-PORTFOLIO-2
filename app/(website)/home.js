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
import WhatWeDoV2 from "@/components/whatWeDoV2";
import HeroBannerV3 from "@/components/HeroBannerV3";
import GalleryGrid from "@/components/GalleryGrid"; 
import SkillsFaqs from "@/components/SkillsFaqs";
import ProjectGrid from "@/components/ProjectGrid";


export default function Post() {
  return (
    <>
      <HeroBannerV3 />
      <GalleryGrid />
      <SkillsFaqs />
      <ProjectGrid />
    </>
  );
}
