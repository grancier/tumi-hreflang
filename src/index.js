const fs = require('fs');
const category = JSON.parse(fs.readFileSync('../pages/tumi-tracer.json', 'utf8'));


category.map((item)=>{
    console.log(`${item.hreflang}>>>${item.href}`)
})

