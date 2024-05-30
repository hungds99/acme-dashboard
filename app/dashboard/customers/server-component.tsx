import { fetchPost } from '@/app/lib/data';

export default async function ServerComponent() {
  const post: any = await fetchPost();

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
