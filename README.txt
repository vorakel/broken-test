Broken Pixel NFT viewer - corrected test package

Upload ALL files together to the same Cloudflare Worker/static-assets deployment:
- index.html
- app.js
- broken-pixel.jpg
- original.jpg

Do not upload only index.html. Filenames are case-sensitive on many hosts.
Test these URLs after deployment:
  / 
  /app.js
  /broken-pixel.jpg
  /original.jpg

Then set the OpenSea CSV animation_url to the deployed root URL ending in /.
This package fixes relative URL handling and shows an on-page error if the original image is missing.
