// app/blog/[category]/page.tsx
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const { category } = useParams();

  return <h2>Category: {category}</h2>;
}
