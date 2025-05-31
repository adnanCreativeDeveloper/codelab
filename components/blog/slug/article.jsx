import rehypePrettyCode from "rehype-pretty-code";

import Markdown from 'markdown-to-jsx';
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import React from 'react';

async function Article({ content }) {
  // const processor = unified()
  //   .use(remarkParse)
  //   .use(remarkRehype)
  //   .use(rehypeDocument, { title: content.title })
  //   .use(rehypeFormat)
  //   .use(rehypeStringify)
  //   .use(rehypePrettyCode, {
  //     theme: "github-dark",
  //   })
  // const post = (await processor.process(content)).toString();
  return (
    <article className="">
      <div className="flex">
        <article className="prose prose-p:my-4 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-h1:text-xl md:prose-h1:text-3xl">
          <Markdown>{content}</Markdown>
        </article>
        {/* <div className="prose-zinc prose-p:my-4 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-h1:text-xl md:prose-h1:text-3xl" dangerouslySetInnerHTML={{ __html: post }}></div> */}
      </div>
    </article>
  );
}

export default Article;
