const jsonParser = (jsonObject) => {
  let children = [];
  const keys = Object.keys(jsonObject);
  if (keys && keys.length > 0) {
    keys.forEach(function (key) {
      const keyObject = jsonObject[key];
      if (typeof keyObject === "object") {
        if (Array.isArray(keyObject)) {
          let babyChildren = [];
          keyObject.forEach((element, index) => {
            if (typeof element === "object") {
              babyChildren.push({
                name: `${key}(${index})`,
                children: jsonParser(element),
                value: 1,
              });
            } else {
              babyChildren.push({
                name: element,
                value: 1,
              });
            }
          });
          children.push({
            name: key,
            children: babyChildren,
            value: 1,
          });
        } else {
          children.push({
            name: key,
            children: jsonParser(keyObject),
            value: 1,
          });
        }
      } else {
        children.push({
          name: key,
          children: [{ name: keyObject }],
          value: 1,
        });
      }
    });
  }
  return children;
};
export default jsonParser;
