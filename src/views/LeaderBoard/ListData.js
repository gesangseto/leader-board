import { Grid, Paper, TableContainer, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Image } from "antd";
import { dummyData } from "helper/dummy";
import useWindowDimensions from "hook/dimension";
import { useEffect, useState } from "react";

const style = (width) => {
  return {
    cardStyle: {
      maxWidth: width > 500 ? width * 0.5 : width * 0.7,
      padding: 3,
      borderRadius: 10,
    },
    textHeader: {
      fontSize: width > 500 ? width * 0.01 : width * 0.03,
      fontWeight: "bold",
      fontFamily: "-moz-initial",
    },
    textContent: {
      fontSize: width > 500 ? width * 0.009 : width * 0.03,
      fontFamily: "-moz-initial",
    },
  };
};

const styleRow = (item) => {
  let url = ``;
  if (item.rank === 1) {
    url = `url(${require("../../assets/image/rank-1.png")})`;
  } else if (item.rank === 2) {
    url = `url(${require("../../assets/image/rank-2.png")})`;
  } else if (item.rank === 3) {
    url = `url(${require("../../assets/image/rank-3.png")})`;
  }
  return {
    container: {
      border: 0,
      backgroundImage: url,
      backgroundSize: 25,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    text: {
      fontWeight: "bold",
      fontSize: 12,
      textAlign: "center",
    },
  };
};
export default function ListData() {
  const { height, width } = useWindowDimensions();
  const [listData, setListData] = useState([]);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    console.log(width);
    // loadData();
    setListData(dummyData(10));
  }, []);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${require("../../assets/image/background.png")})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Grid container wrap="nowrap">
        <Grid item xs={4} zeroMinWidth sx={{ textAlign: "left" }}>
          <Image src={require("../../assets/image/img-left.png")} width={150} />
        </Grid>
        <Grid item xs={4} zeroMinWidth sx={{ textAlign: "center" }}>
          <Image
            src={require("../../assets/image/img-center.png")}
            width={300}
          />
        </Grid>
        <Grid item xs={4} zeroMinWidth sx={{ textAlign: "right" }}>
          <Image
            src={require("../../assets/image/img-right.png")}
            width={150}
          />
        </Grid>
      </Grid>
      <Typography
        sx={{ textAlign: "center", fontSize: 42, fontFamily: "roboto" }}
      >
        QASM STANDINGS
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontSize: 20, fontFamily: "roboto" }}
      >
        DAYS 7 - LAST UPDATE : 19 JANUARI 2023 22:19:22
      </Typography>
      <TableContainer
        size="small"
        component={Paper}
        sx={{ ...style(width).cardStyle, marginInline: "auto" }}
      >
        <Table sx={{ ...style(width).cardStyle }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#7aa9f5" }}>
              <TableCell
                align="left"
                sx={{
                  ...style(width).textHeader,
                  borderTopLeftRadius: 25,
                }}
              >
                Rank
              </TableCell>
              <TableCell align="left" sx={{ ...style(width).textHeader }}>
                Nama
              </TableCell>
              <TableCell align="left" sx={{ ...style(width).textHeader }}>
                Total Jarak
              </TableCell>
              <TableCell align="left" style={{ ...style(width).textHeader }}>
                Total Waktu
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  ...style(width).textHeader,
                  borderTopRightRadius: 25,
                }}
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
                <TableCell align="left" sx={{ ...styleRow(row).container }}>
                  <Typography sx={{ ...styleRow(row).text }}>
                    {row.rank}
                  </Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ ...style(width).textContent, border: 0 }}
                >
                  {row.nama}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ ...style(width).textContent, border: 0 }}
                >
                  {row.total_jarak}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ ...style(width).textContent, border: 0 }}
                >
                  {row.total_waktu}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    ...style(width).textContent,
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
      </TableContainer>
      <Typography
        sx={{ textAlign: "center", fontSize: 24, fontFamily: "roboto" }}
      >
        "Loyal"
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 24,
          fontFamily: "roboto",
          marginBottom: 20,
        }}
      >
        Berdedikasi Untuk Mengatasi Kepentingan Negara
      </Typography>
    </div>
  );
}
