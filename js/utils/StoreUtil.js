import * as Promise from 'bluebird';
let storLocal = chrome.storage.local;

export default class LocalStore{
    static async save(key,val){
        return new Promise((resolve,reject) => {
            let storObj;
            if(typeof key === 'string'){
                storObj = {[key]:val};
            } else{
                storObj = key;
            }
            storLocal.set(storObj,()=>{
                resolve();
            });
        });
    }
    static async load(keys) {
        return new Promise((resolve,reject) => {
            storLocal.get(keys,(resObj) => {
                let ret;
                if(typeof keys === 'string'){
                    ret = resObj[keys];
                } else {
                    ret = keys.map(key => resObj[key]);
                }
                resolve(ret);
            });
        });
    }
}
