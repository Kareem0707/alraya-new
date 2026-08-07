const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');
const rx = /name:\s*['"]([^'"]+?)['"]/g;
let m;
let res = [];
while ((m = rx.exec(content))) {
    let name = m[1];
    if ((/\d/.test(name) || /-/.test(name)) && !name.includes('اعواد البروفايل') && !name.includes('عقده')) {
        res.push(name);
    }
}
console.log(res.join('\n'));
