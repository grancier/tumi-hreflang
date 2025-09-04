const fs = require('fs');

/*
"returns": [
		"en-ushttps://www.tumi.com/us/returns",
		"<link rel='alternate' hreflang='fr-ca' href='https://www.tumi.com/ca/returns' />"
	],
    */


const contentAssetName = process.argv[2]
fs.readFile(`../pages/${contentAssetName}.json`, 'utf8', (err, data) => {
  if (err) throw err;
  const hreflangJson = JSON.parse(data);
  console.log(`"${contentAssetName}": [`)
  hreflangJson.map((item) => {
    console.log(`"<link rel='alternate' hreflang='${item.hreflang}' href='${item.href}' />",`)
  })
  console.log(']')
});