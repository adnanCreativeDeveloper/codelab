'use client'
// app/blog/[category]/[slug]/page.tsx
import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const { category, slug } = useParams();

  return (
    <div>
      <h3>Post: {slug}</h3>
      <p>From Category: {category}</p>
    </div>
  );
}
