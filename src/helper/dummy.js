import { makeString } from "./utils";

export const dummyData = (num = 10) => {
  let data = [];
  for (var i = 0; i < num; i++) {
    data.push({
      rank: i + 1,
      nama: `Gesang ${makeString(6)} ${i}`,
      total_jarak: 200,
      total_waktu: 200,
      point: 200,
    });
  }
  return data;
};
