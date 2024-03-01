import Search from "./search";
import Input from "./input";

import { Suspense } from "react";
import Container from "@/components/container";
import Loading from "@/components/loading";

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q;
  return (
    <>
      <div>
        <div className="mt-14 flex items-center justify-center ">
          <h1 className="text-brand-primary text-xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-tight">
            {query ? `Search results for "${query}"` : "Search"}
          </h1>
        </div>

        <Input query={query} />
      </div>

      <Container>
        <Suspense key={searchParams.search} fallback={<Loading />}>
          <Search searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

// export const revalidate = 60;
