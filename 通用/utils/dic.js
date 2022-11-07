const defaultLabelName = 'label'; // 默认name
// 数组转对象(枚举类)
export function dicMap(arr = [], label = defaultLabelName, value = 'value') {
  return arr.reduce((acc: any, cur: any) => {
    return {
      ...acc,
      [cur[value]]: cur[label],
    };
  }, {});
}

// 对象转数组
export const mapDict = (myMap: any, labelName = defaultLabelName) => {
  return Object.entries(myMap).map(([value, label]) => {
    return {
      [labelName]: label,
      value: typeof value === 'string' && isNaN(value) ? value : +value,
    };
  });
};

export default {
  dicMap,
  mapDict,
};
