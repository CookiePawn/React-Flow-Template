type Post = {
  title: string;
  content: string;
  date: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // slug를 사용해서 해당 게시물 데이터를 가져옴
  // 예: "next-js-routing-guide"라는 slug로 접근하면
  // 그에 해당하는 게시물을 데이터베이스에서 조회
  
  return (
    <article className="p-4">
      <h1>게시물: {params.slug}</h1>
      {/* 게시물 내용 표시 */}
    </article>
  )
} 