import React from "react";
import "./App.scss";

const marked = require("marked");

marked.setOptions({
  gfm: true,
  breaks: true
});

const defaultText = `
  # Welcome to my Markdown previewer!
  ## Level 2 heading
  ### Level 3 heading

  Markdown is great! You can bold text, _italicize it_, or ~~cross it out~~.

  You can make text \`monospace\` or put it in a code block, like this:

  \`\`\`
  const greeting = () => {\n
    console.log('Hello, world!');\n
  };\n
  greeting();\n
  \`\`\`

  Carriage returns
  render as a line break.

  You can make lists, too:
  * Eat
  * Sleep
  * Code
  * Repeat

  > Or use blockquotes, they're pretty neat!

  You can [click here](https://en.m.wikipedia.org/wiki/Markdown) to read about this markup language on Wikipedia. Finally, here's the Markdown logo:
  ![Markdown logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/800px-Markdown-mark.svg.png)
`;

const Preview = () => {
  return (
    <div id="preview-container" class="container">
      <header class="header">Preview</header>
      <div id="preview">{marked(defaultText)}</div>
    </div>
  );
};

const Editor = () => {
  return (
    <div id="editor-container" class="container">
      <header class="header">Markdown</header>
      <textarea id="editor">{defaultText}</textarea>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Editor />
        <Preview />
      </div>
    );
  }
}

export default App;
