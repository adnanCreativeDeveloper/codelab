import fs, { readdirSync } from 'fs'
import matter from 'gray-matter'
import { uuidv7 } from 'uuidv7'

const GetPostMetaData = (basePath) => {
  const folder = basePath + '/'
  const files = readdirSync(folder)
  const markdownFiles = files.filter((file) => file.endsWith('.md'))

  const posts = markdownFiles.map((fileName) => {
    const filePath = folder + fileName
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    return {
      id: uuidv7(),
      title: data.title,
      key_words: data.key_words,
      description: data.description,
      img: data.img,
      category: data.category,
      slug: data.slug,
    }
  })
  return posts;
}

export default GetPostMetaData;