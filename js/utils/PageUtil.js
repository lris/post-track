export default class PageUtil{
    static bindFun(self) {
        let proto = self.constructor.prototype,
            arr = Object.getOwnPropertyNames(proto),
            excludeFunArr = ['constructor','componentWillUnmount','componentDidMount','render',];
        for (let i=0,len=arr.length;i<len;i++) {
            let key = arr[i];
            if (excludeFunArr.indexOf(key) < 0 && (proto[key] instanceof Function))
                self[key] = proto[key].bind(self);
        }
    }
}
