import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import PostAlt from "@/components/postalt";
import ButtonV1 from "@/components/ButtonV1";
import { Button } from "@sanity/ui";
import HeroBannerV1 from "@/components/HeroBannerV1";


export default function Post({ posts }) {
  const featuredPost = posts.filter(item => item.featured) || null;

  return (
    <>
      <HeroBannerV1 />

      <Container large>
        {featuredPost.length > 4 && (
          <>
            <div className="flex items-center justify-center mt-10 centima uppercase">
              <h2 className="text-2xl">
                <strong>Recent Projects</strong>
              </h2>
            </div>
            <div className="grid gap-10 mt-10 mb-20 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 border-b pb-10">
              {featuredPost.slice(1, 2).map(post => (
                <div
                  className="md:col-span-2 md:row-span-2"
                  key={post._id}>
                  <PostList
                    post={post}
                    preloadImage={true}
                    pathPrefix="lifestyle"
                    fontSize="large"
                    aspect="custom"
                    fontWeight="normal"
                  />
                </div>
              ))}
              {featuredPost.slice(2, 6).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  pathPrefix="lifestyle"
                  fontWeight="normal"
                  preloadImage={true}
                />
              ))}
            </div>
          </>
        )}
      </Container>

    </>
  );
}
