The project is currently designed to be embedded in a wordpress page. 

## Deploying

In the web directory, you can run:

### `yarn build`

Then copy the contents of the build folder to your wordpress server, placing them in
`content/react/covid`

Next, locate the index.html file in the build directory, and copy all content between the <body></body> tags.

Paste this content into a Javascript element on your wordpress page, where you would like the visualizer to render. 
