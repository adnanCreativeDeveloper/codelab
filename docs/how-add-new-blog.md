# 📝 Guide to Adding a Blog Post in the Project

To contribute a new blog post to the project, follow the steps below carefully.  
The blog system expects each post to follow a specific structure, folder placement, and naming convention.

---

## ✅ Steps to Add a New Blog Post

### 1. **Create a Markdown File**

- Create a new file with a `.md` extension.
- The **file name must exactly match the `slug`** specified in the frontmatter metadata inside the file.

📁 **Location:**  
Place the file in the following folder at the root of the project:
`/blog-post-files/`



🧩 **Example:**  
For a blog post with the slug `my-awesome-article`, the file path should be:
/blog-post-files/my-awesome-article.md


---

### 2. **Add a Featured Image (Optional but Recommended)**

- If your blog post includes a main/featured image:
  - Save the image in the following directory:
    ``` /public/images/blog/blog-md/ ```
  - Reference this image in the `img` field in the frontmatter.

🖼️ **Example image path:**
``` /images/blog/blog-md/my-awesome-article.jpg ```

### **🧪 Demo Structure**
Here’s a sample blog post with real content and frontmatter, demonstrating the complete structure:

```
---
title: What is API Shift Select vs. API Definition? A Strategic Approach
description: Explore the strategic differences between API Shift Select and API Definition. This article explains how APIs simplify and accelerate application development, enhance security, and discusses various API types, from open to composite APIs, in modern business applications.
img: /images/blog/blog-md/api-1.jpg
category: Development
slug: api-shift-select-definition
key_words: [
  "API",
  "API Shift Select",
  "API Definition",
  "Application Development",
  "API Security",
  "API Types",
  "Open APIs",
  "Composite APIs",
  "Business Applications",
  "Software Development",
  "Strategic Approach"
]
---
### **What is API Shift Select vs. API Definition?**
This is a sample blog post demonstrating how to format a post and place assets.

The featured image used here is stored in:
/public/images/blog/blog-md/api-1.jpg

![api-1](/images/blog/blog-md/api-1.jpg)

Continue writing your blog content below the frontmatter. Use Markdown syntax for headings, images, links, lists, and formatting as needed.
