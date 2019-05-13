
/**
 * @ 正负指标的类
 * @params type 1 正指标 / 0 负指标
 * @params changeCode up 上升 / desc 下降 / equal 持平
 *
 */

function indicatorStatus(type, changeCode) {
    // 持平
    if (changeCode === 'equal') {
        return 'equal';
    }
    var str = '';
    type === 1 ? (str += 'pos') : (str += 'neg');
    str += '-';
    changeCode === 'up' ? (str += 'up') : (str += 'desc');
    return str;
}

export {
    indicatorStatus
};

