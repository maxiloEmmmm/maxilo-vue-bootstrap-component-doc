import mockService from 'maxilo-vue/lib/core/mocks/utils';
//import mocks from './.mock';
let service = new mockService;
let mocks = {};
Object.keys(mocks).forEach((k) => {
    let build = 'resolve';
    let v = mocks[k];
    if (v.reg) {
        build = 'resolveREG';
    }

    service[build](k, v.build, v.type, v.title);
});
try {
    let raps = require('./.rap.json');
    service.resolveRap(raps.data);
} catch (e) { }

service.run();