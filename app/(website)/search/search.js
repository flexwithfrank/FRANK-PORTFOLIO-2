import PostList from "@/components/postlist";

import { searchPosts } from "@/lib/sanity/client";

export default async function Search({ searchParams }) {
  const query = searchParams.q;

  const posts = await searchPosts(query);

  // const [timer, setTimer] = useState(null);
  // const { data, error } = useSWR(
  //   [searchquery, { query: query }],
  //   fetcher
  // );

  return (
    <>
      {!query && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">¯\_(ツ)_/¯</span>
        </div>
      )}
      {query && posts?.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">
            No posts found for {query}. Try again!
          </span>
        </div>
      )}
      {query && !posts && (
        <div className="flex h-40 items-center justify-center">
          <svg
            className="h-6 w-6 animate-spin text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>{" "}
        </div>
      )}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts &&
          posts.map((post, index) => (
            <PostList key={post._id} post={post} aspect="square" />
          ))}
      </div>
    </>
  );
}
