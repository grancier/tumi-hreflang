const fs = require('fs');
const category = JSON.parse(fs.readFileSync('../categories/bags-laptop.json', 'utf8'));


category.map((item)=>{
    console.log(`${item.hreflang}>>>${item.href}`)
})

