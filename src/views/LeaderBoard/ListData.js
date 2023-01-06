import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { dummyData } from "helper/dummy";
import { Image } from "antd";
import { Card } from "@mui/material";

const style = {
  textHeader: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "-moz-initial",
  },
};
export default function ListData() {
  const [listData, setListData] = useState([]);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    // loadData();
    setListData(dummyData(10));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          margin: "auto",
          maxWidth: 1000,
          padding: 3,
          borderRadius: 10,
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#7aa9f5" }}>
              <TableCell
                align="left"
                sx={{ ...style.textHeader, borderTopLeftRadius: 25 }}
              >
                Rank
              </TableCell>
              <TableCell align="left" sx={{ ...style.textHeader }}>
                Nama
              </TableCell>
              <TableCell align="left" sx={{ ...style.textHeader }}>
                Total Jarak
              </TableCell>
              <TableCell align="left" style={{ ...style.textHeader }}>
                Total Waktu
              </TableCell>
              <TableCell
                align="left"
                sx={{ ...style.textHeader, borderTopRightRadius: 25 }}
              >
                Point
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((row, idx) => (
              <TableRow
                key={row.rank}
                style={{
                  backgroundColor:
                    row.rank === 1
                      ? "#7aa9f5"
                      : row.rank === 2
                      ? "#95bcfc"
                      : row.rank === 3
                      ? "#afcbfa"
                      : "",
                  borderWidth: 0,
                }}
              >
                <TableCell align="left" sx={{ border: 0 }}>
                  {row.rank == 1 ? (
                    <Image
                      width={25}
                      src="https://entiretools.com/placeholder/25x25/ffd600/584959/1/png"
                    />
                  ) : row.rank == 2 ? (
                    <Image
                      width={25}
                      src="https://entiretools.com/placeholder/25x25/cecdc7/000000/2/png"
                    />
                  ) : row.rank == 3 ? (
                    <Image
                      width={25}
                      src="https://entiretools.com/placeholder/25x25/84710b/ffffff/3/png"
                    />
                  ) : (
                    row.rank
                  )}
                </TableCell>
                <TableCell align="left" sx={{ border: 0 }}>
                  {row.nama}
                </TableCell>
                <TableCell align="left" sx={{ border: 0 }}>
                  {row.total_jarak}
                </TableCell>
                <TableCell align="left" sx={{ border: 0 }}>
                  {row.total_waktu}
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    borderBottomRightRadius: idx == listData.lenght ? 25 : 0,
                    borderBottomLeftRadius: idx == listData.lenght ? 25 : 0,
                    border: 0,
                  }}
                >
                  {row.point}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
