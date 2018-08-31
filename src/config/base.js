import maxiloVue from 'maxilo-vue';
const configs = {
    debug: maxiloVue.utils.base.env(process.env.DEVELOP, false),
    locale: 'zh_cn',
    baseURL: maxiloVue.utils.base.env(process.env.SERVER, 'http://localhost:9000'),
    storeKey: 'hBCVcLsFDCk1Ygo3',
    version: {
        core: '1.2.79',
        component: '1.0.77'
    }
};

maxiloVue.config.merge(configs)

export default maxiloVue.config.cs;