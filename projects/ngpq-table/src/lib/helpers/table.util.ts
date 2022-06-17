export const createModes = (dataLength) => {
  let i = 0;
  let tmp = dataLength.toString().length + 1;
  const result: number[] = [];
  let mode;
  let length = dataLength;

  while (tmp !== 0) {
    while (i !== tmp) {
      mode = length / 2;
      length = mode;
      i++;
    }

    i = 0;
    tmp--;

    const toInteger = () => mode % 10;
    const intMode = Math.ceil((mode - toInteger()) !== 0 ? mode - toInteger() : toInteger());
    if (!(result.find(m => m === intMode))) {
      result.push(intMode);
    }

    length = dataLength;

    if (tmp === 0) {
      const lastItem = result[0] - ((result.reduce((a, b) => (a) + (b))) + (result[0]) - length);
      result[result.length - 1] = Math.ceil(result[result.length - 1] + lastItem);
    }
  }

  result.push(dataLength);
  return result;
};

export const cloneDeep = (data: any[] | any) => {
  if (typeof (data) != "object") {
    return data;
  }

  if (!data) {
    return data;
  }

  const v: any | any[] = (data instanceof Array) ? [] : {};

  for (const i in data) {
    if (data.hasOwnProperty(i)) {
      v[i] = cloneDeep(data[i]);
    }
  }
  return v;
};
