import csdnCntResolve from './single/csdn-cnt';
import githubCntResolve from './single/github-cnt';
import segmentfaultCntResolve from './single/segmentfault-cnt';
import stackoverflowCntResolve from './single/stackoverflow-cnt';
import zhihuCntResolve from './single/zhihu-cnt';
import Constant from '../config/Constant';
import {showTips} from '../utils/UIUtil';

const {CNT_CMD_TOGGLE_CUR_COL,CNT_CMD_UPDATE_CUR_FAV,CUR_HREF} = Constant;
$(function () {
    csdnCntResolve(CUR_HREF);
    githubCntResolve(CUR_HREF);
    segmentfaultCntResolve(CUR_HREF);
    stackoverflowCntResolve(CUR_HREF);
    zhihuCntResolve(CUR_HREF);
});

chrome.runtime.onMessage.addListener(function (msgArr, msgSenderObj, resSend) {
    switch (msgArr[0]) {
        case CNT_CMD_UPDATE_CUR_FAV:
            break;
        case CNT_CMD_TOGGLE_CUR_COL:
            if (!window._toggleCurCol) return showTips('不支持当前页面');
            window._toggleCurCol(resSend);
            break;
    }
    return true;
});
