import React, { useState } from "react";
import marked from "marked";
import "./App.css";

export default function App() {
  const [text, setText] = useState(placeholder);
  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const getMarkedDownText = () => {
    const rawMarkup = marked(text, {
      gfm: true,
      breaks: true,
    });
    return { __html: rawMarkup };
  };
  return (
    <div className="app-container">
      <div className="container">
        <h1 className="title">Editor</h1>
        <textarea id="editor" onChange={changeHandler} value={text}></textarea>
      </div>
      <div className="container">
        <h1 className="title">Previewer</h1>
        <div id="preview" dangerouslySetInnerHTML={getMarkedDownText()} />
      </div>
    </div>
  );
}

const placeholder = `# React Markdown Previewer

## What is Markdown?
Markdown is a lightweight markup language with plain-text-formatting syntax, is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor. Read more on [Wikipedia](https://en.wikipedia.org/wiki/Markdown).

## What can you do with Markdown?

### Emphasis:
You can add emphasis by making text **bold**, _italic_ or ***combine both***.

### Blockquotes: 
To create a blockquote, add a > in front of a paragraph.
> "A person who never made a mistake never tried anything new."

### List:
You can organize items into ordered and unordered lists.
1. First item
2. Second item
3. Third item
* First item
* Second item
* Third item

### Code Blocks:
Wrap single line code between 2 backticks to display some code: \`<div></div>\`
\`\`\`
// This way you can get multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
### Links:
To create a link, enclose the link text in brackets and then follow it immediately with the URL in parentheses.
[FreeCodeCamp](https://www.freecodecamp.org/).

### Images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`;
