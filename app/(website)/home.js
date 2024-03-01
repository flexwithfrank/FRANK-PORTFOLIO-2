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

      {posts && (
        <div className="mx-auto w-full px-8 lg:max-w-7xl lg:px-0">
          <div className="grid h-full gap-10 py-10 md:grid-cols-12 lg:gap-10 border-b">
            <div className="h-full lg:col-span-8">
              {posts.slice(0, 1).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  preloadImage={true}
                  pathPrefix={"sidebar"}
                />
              ))}
            </div>
            <div className="h-full lg:col-span-4">
              {posts.slice(1, 2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="square"
                  preloadImage={true}
                  pathPrefix={"sidebar"}
                />
              ))}
            </div>
          </div>

          {/* <div className="grid gap-10 lg:mt-5 lg:gap-12 lg:px-12">
          {posts.slice(2, 14).map(post => (
            <PostAlt
              key={post._id}
              post={post}
              aspect="landscape"
              featured={true}
              preloadImage={true}
            />
          ))}
        </div> */}

          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="square"
                pathPrefix={"lifestyle"}
              />
            ))}
          </div>

          <div className="mb-20 mt-10 flex justify-center">
            <ButtonV1 buttonText="View All Posts" href="/archive" />
          </div>
        </div>
      )}
    </>
  );
}
