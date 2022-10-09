When a user enters an URL in the browser, how does the browser fetch the desired result?
 A) What is the main functionality of the browser?
 Ans: A web browser takes you anywhere on the internet. It retrieves information from other parts of the web and displays it on your desktop or mobile device. Each time a browser loads a web page, it processes the HTML, which may include text, links, and references to images and other items, such as cascading style sheets and JavaScript functions. The browser processes these items, then renders them in the browser window.

![alt text](E:\Pesto\GIT_MAIN\p6--tanish-akashbabar23\Week-1\Exercise_1.1\Images\main functionality of the browser.jpg)
 
 B) High Level Components of a browser
 Ans:
 -The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
 -The rendering engine: responsible for displaying requested content. For example, if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
 -Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
 -UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
 -JavaScript interpreter. Used to parse and execute JavaScript code.
 -Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as local Storage, Indexed DB, Web SQL and File System.

 
 C)Rendering engine and its use.
 Ans: The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen.
 By default, the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in. However, in this chapter we will focus on the main use case: displaying HTML and images that are formatted using CSS.

![alt text](E:\Pesto\GIT_MAIN\p6--tanish-akashbabar23\Week-1\Exercise_1.1\Images\Rendering Engine.jpg)

 
 D) Parsers (HTML, CSS, etc)
 Ans: Parsing means analysing and converting a program into an internal format that a runtime environment can run, for example the JavaScript engine inside browsers.
         HTML Parser - The job of the HTML parser is to parse the HTML markup into a parse tree.
         Similar to HTML parsing, CSS parsing also starts by tokenizing the CSS source code into tokens, which are then parsed into CSS rules.
 E) script processors
 Ans: The Script processor allows you to specify your own processor logic for a simple processor using JavaScript or Groovy. The script is entered as an option on the script processor.
 
 F) Tree construction
 Ans: 
 A DOM tree starts from the topmost element which is html element and branches out as per the occurrence and nesting of HTML elements in the document. Whenever an HTML element is found, it creates     a DOM node (Node) object from its respective class (constructor function).
 A DOM node doesn’t always have to be an HTML element. When the browser creates a DOM tree, it also saves things like comments, attributes, text as separate nodes in the tree. But for the simplicity, we     will just consider DOM nodes for HTML elements AKA DOM element. 
G) Order of script processing
Scripts - The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a script tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network–this is also done synchronously, and parsing halts until the resource is fetched.
Speculative parsing - Both WebKit and Firefox do this optimization. While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved.
Style sheets - Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing.

H) Layout and Painting
1. The DOM and CSSOM trees are combined to form the render tree.
2. Render tree contains only the nodes required to render the page.
3. Layout computes the exact position and size of each object.
The last step is paint, which takes in the final render tree and renders the pixels to the screen.

![alt text](E:\Pesto\GIT_MAIN\p6--tanish-akashbabar23\Week-1\Exercise_1.1\Images\Layout and Painting.jpg)
