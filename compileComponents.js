const fs = require('fs');

const components = [
    {
        name: 'something',
        template: '<template><div>something cool</div></template>'
    },
    {
        name: 'cooler',
        template: '<template><div><b>COOLER</b><dynamic-something/></div></template>'
    }
];

components.forEach(component => {
    fs.writeFileSync(`./src/dynamic/${component.name}.vue`, component.template);
})