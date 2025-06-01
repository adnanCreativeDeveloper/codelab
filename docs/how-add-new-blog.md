# 📝 Guide to Adding a Blog Post in the Project

To contribute a new blog post to the project, follow the steps below carefully.  
The blog system expects each post to follow a specific structure, folder placement, and naming convention.

---

## ✅ Steps to Add a New Blog Post

### 1. **Create a Markdown File**

- Create a new file with a `.md` extension.
- The **file name must match the `slug`** specified in the frontmatter metadata inside the file.

📁 **Location:**  
Place the file inside the root-level folder:






🧩 **Example:**


---

### 2. **Add a Featured Image (Optional but Recommended)**

- If your blog post has a main/featured image:
  - Place the image in:
    ```
    public/images/blog/blog-md/
    ```
  - Reference this image in the `img` field in your blog’s frontmatter.

🖼️ **Example image path:**



---

### 3. **Frontmatter Format**

Your blog post must begin with properly formatted frontmatter.  
This metadata is used to render your post correctly.

```yaml
---
title: Blog Post Title Here
description: A short summary for SEO and previews.
img: /images/blog/blog-md/your-image.jpg
category: Blog Category (e.g., Development, Design)
slug: your-post-slug
key_words: [
  "Keyword One",
  "Keyword Two",
  "Another Keyword"
]
---



---
title: What is API Shift Select vs. API Definition? A Strategic Approach
description: Explore the strategic differences between API Shift Select and API Definition...
img: /images/blog/blog-md/api-1.jpg
category: Development
slug: api-shift-select-definition
key_words: [
  "API",
  "API Shift Select",
  "API Definition",
  "Application Development"
]
---

# What is API Shift Select vs. API Definition?

This is a sample blog post demonstrating how to format a post and place assets.

The featured image used here is stored in:



![Demo Image](/images/blog/blog-md/api-1.jpg)

Continue writing your blog content below the frontmatter. Use Markdown syntax for headings, images, links, lists, and formatting.
