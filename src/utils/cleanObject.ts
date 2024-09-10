import _ from "lodash";

export const cleanObject = (obj: any): any => {
  const copy = _.cloneDeep(obj);

  const clean = (obj: any): any => {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj
        .map((item) => clean(item))
        .filter((item) => item !== null && item !== undefined && item !== "");
    }

    const newObj: any = {};

    for (const propName in obj) {
      if (obj.hasOwnProperty(propName)) {
        const value = obj[propName];

        if (value === null || value === undefined || value === "") {
          continue;
        } else if (typeof value === "object") {
          const cleanedValue = clean(value);

          if (Array.isArray(cleanedValue) && cleanedValue.length === 0) {
            continue;
          }

          if (
            typeof cleanedValue === "object" &&
            !Array.isArray(cleanedValue) &&
            Object.keys(cleanedValue).length === 0
          ) {
            continue;
          }

          newObj[propName] = cleanedValue;
        } else {
          newObj[propName] = value;
        }
      }
    }

    return newObj;
  };

  return clean(copy);
};