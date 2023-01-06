import { icon } from "constants";
import { matchRoutes, useLocation } from "react-router-dom";
import routes from "routes";
import moment from "moment";

export const makeId = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
export const toDate = (date) => {
  return moment(date).format("YYYY-MM-DD hh:mm:ss");
};
export const makeString = (length) => {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
export const findOnArr = ({ str, key = "id", array = Array }) => {
  let result = array.findIndex((x) => x[key] === str);
  return result;
};

export const mergeArray = (a, b, prop) => {
  var reduced = a.filter(
    (aitem) => !b.find((bitem) => aitem[prop] === bitem[prop])
  );
  return reduced.concat(b);
};

export const groupBy = (array = Array, key) => {
  return array.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
export const treeify = (list, idAttr, parentAttr, childrenAttr) => {
  if (!idAttr) idAttr = "id";
  if (!parentAttr) parentAttr = "parent";
  if (!childrenAttr) childrenAttr = "children";

  var treeList = [];
  var lookup = {};
  list.forEach(function (obj) {
    lookup[obj[idAttr]] = obj;
    obj[childrenAttr] = [];
  });
  list.forEach(function (obj) {
    if (obj[parentAttr] != null) {
      if (lookup[obj[parentAttr]] !== undefined) {
        lookup[obj[parentAttr]][childrenAttr].push(obj);
      } else {
        treeList.push(obj);
      }
    } else {
      treeList.push(obj);
    }
  });
  return treeList;
};
export const removeEmptyObject = (arr = Array, key = String) => {
  let _data = [];
  for (const it of arr) {
    if (key) {
      if (it[key]) {
        _data.push(it);
      }
    }
  }
  return _data;
};
export const makeOption = (data = Array, value = "id", label = "name") => {
  let _data = [];
  for (const it of data) {
    it.value = it[value];
    it.label = it[label];
    _data.push(it);
  }
  return _data;
};
export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });
export const getRoute = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);
  return route;
};
export const numberWithComma = (x) => {
  if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return 0;
};
export const isInt = (value) => {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 20))
  );
};
export const numberPercent = (num, percent) => {
  num = parseFloat(isInt(num) ? num : 0);
  percent = parseFloat(isInt(percent) ? percent : 0);
  let result = num + num * (percent / 100);
  return result;
};
export const sumItem = (arr = Array, key) => {
  let sum = 0;
  for (const it of arr) {
    if (it[key]) {
      sum += it[key];
    }
  }
  return sum;
};
export const sumByKey = ({ key, sum, array }) => {
  let result = Object.values(
    array.reduce((map, r) => {
      if (!map[r[key]]) map[r[key]] = { ...r, _id: r[key], qty: 0 };
      map[r[key]][sum] += parseInt(r[sum]);
      return map;
    }, {})
  );
  return result;
};
export const isJsonString = (item) => {
  item = typeof item !== "string" ? JSON.stringify(item) : item;
  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }
  if (typeof item === "object" && item !== null) {
    return true;
  }
  return false;
};
