**EasyLoadr**

EasyLoadr is a Javascript library which is created to make your web application or project a simple page application by adding some pure Javascript (VanillaJS) to it.

EasyLoadr fetches source code from a link and parse the code on the user specified position.

_Dependency Free_

EasyLoadr does not depend on any plugin or other library to work but only request that the browser (client browser) has Javascript enabled and it is good to go.

_How to Use_

- Download and Extract EasyLoadr to your project
- Include both easyloadr.css and easyloadr.js files.
    
    `<link href='easyloadr\easyloadr.css' type='text/css' rel='stylesheet' />`
    
    `<script src='easyloadr\easyloadr.js' type='text/javascript'></script>`

- Add the following attributes to the element which holds the link to fetch from. 

    `easy-load-url`: The link to fetch content from.
    
    `easy-load-target`: The element selector name to receive the content fetched. This can be any selector (ID (`'#idname'`), Class Name (`'.classname'`), Attribute (`'[attribute-name]'`))
    
    `easy-load-title`: The new title to be given to the loaded page. This will be the title that will be replaced on the title bar.

- Initialize easyloadr using `easyloadr.init()`

_Example_

An example file is the `easyloadr.html` file. Also the below code has the same content.

    <!Doctype html>
     <html>
     <head>
         <title>EasyLoadr - Example</title>
         <link rel="stylesheet" href="easyloadr.css">
         <script src="easyloadr.js"></script>
     </head>
     <body>
     <div>
         <a href="easyloadr.css" easy-load-url="easyloadr.html" easy-load-title="EasyLoardr - A New Title"
            easy-load-target="#firsttarget">ID EasyLoadr</a>
     </div>
     <div id="firsttarget"></div>
     <script>
         easyloadr.init();
     </script>
     </body>
     </html>
     
Please feel free to contribute and report any bug found.

Thanks