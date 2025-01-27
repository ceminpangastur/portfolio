import React, { useContext, useEffect, useState } from "react"
import { ModeContext } from "../../../contexts/ModeProvider";

function MountainFour() {
  // Get global variable and defaults
  const { mode } = useContext(ModeContext);
  const [fill, setFill] = useState(mode === "dark" ? "#9F3B47" : "#476687");
  const [treeFill, setTreeFill] = useState(mode === "dark" ? "#181646" : "#1A2A19");

  // Update colour upon change
  useEffect(() => {
    setFill(mode === "dark" ? "#9F3B47" : "#476687");
    setTreeFill(mode === "dark" ? "#181646" : "#1A2A19");
  }, [mode]);

  return (
    <svg className="absolute h-screen top-0 left-1/2 transform -translate-x-1/2" width="5120" height="2160" viewBox="0 0 5120 2160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2077.93 1389.67C2076.6 1388.7 2068.12 1397.36 2064.05 1401.81L2128.75 1424.12L2133.92 1420.47L2135.79 1414.42L2137.66 1408.36L2133.18 1407.58L2129.65 1412.43L2122.82 1414.87L2124.69 1408.82L2128.21 1403.97L2126.56 1402.77L2124.21 1406L2120.69 1410.85L2115.51 1414.5L2114.55 1408.86L2116.42 1402.81L2119.94 1397.96L2112.41 1404.84L2108.89 1409.69L2106.54 1412.92L2101.57 1409.32L2107.45 1401.23L2104.14 1398.83L2100.13 1400.86L2096.61 1405.71C2095.44 1407.33 2092.76 1410.32 2091.43 1409.36C2090.11 1408.4 2090.24 1405.2 2090.47 1403.72L2092.82 1400.49L2093.51 1396.05L2084.33 1401.73L2072.53 1400.57L2076.06 1395.72C2077.23 1394.1 2079.25 1390.63 2077.93 1389.67Z" fill={treeFill}/>
      <path d="M1558.27 1277.56L1745.97 1334.94L1807.11 1353.64L1823.85 1303.97L1823.31 1300.65L1823.83 1291.32C1824.43 1287.64 1825.71 1280.1 1825.94 1279.33L1824.17 1285.11L1819.86 1289.05C1818.46 1291.09 1815.6 1295.34 1815.37 1296.11C1815.13 1296.88 1813.62 1300.14 1812.89 1301.67L1811.93 1297.17L1813.16 1288.06L1809.97 1293.41L1807.91 1300.15C1807.62 1301.12 1806.02 1303.79 1805.02 1304.53C1804.21 1305.13 1802.98 1303.56 1802.47 1302.7C1802.49 1300.95 1802.58 1297.26 1802.81 1296.49C1803.05 1295.72 1801.49 1295.73 1800.68 1295.83L1801.32 1288.66L1801.67 1282.44L1797 1292.6L1794.99 1294.1L1793.4 1296.77L1792.22 1300.62L1791.09 1299.22L1789.91 1303.08L1788.74 1306.93L1786.9 1305.32L1787.95 1299.32L1789.72 1293.54L1789.89 1290.43L1790.48 1288.5L1791.89 1276.29C1789.62 1279.46 1785.03 1285.99 1784.8 1286.76C1784.56 1287.53 1783.36 1288.08 1782.79 1288.26L1781.61 1292.11L1782.44 1294.47C1782.28 1295.83 1781.77 1298.69 1780.97 1299.29C1780.16 1299.89 1779.52 1296.39 1779.3 1294.57L1779.77 1290.49L1780.24 1286.42L1777.93 1288.88L1774.91 1291.12L1776.09 1287.26L1775.55 1283.94L1777.74 1279.34L1777.96 1270.98L1773.47 1278.03L1773 1282.11L1769.87 1282.2L1768.39 1287.02C1768.16 1287.79 1768.13 1284.48 1768.15 1282.73L1769.03 1279.84L1769.62 1277.91L1772.32 1263.99L1766.36 1275.86L1763.47 1280.24L1761.87 1282.92L1762.29 1284.1L1758.98 1287.3L1759.45 1283.23L1760.38 1275.08C1759.65 1276.62 1758.14 1279.88 1757.9 1280.65C1757.67 1281.42 1756.07 1283.25 1755.3 1284.07L1752.82 1289.63L1753.71 1286.74L1751.75 1282.98L1752.51 1277.95L1750.91 1280.62L1748.02 1285L1746.77 1281.46L1748.24 1276.64L1748.29 1271.39L1749.77 1266.57L1748.34 1266.14L1747.17 1269.99L1744.27 1274.37L1741.79 1279.94L1739.37 1280.25L1742.02 1271.58L1740.6 1271.14L1741.95 1264.18L1743.3 1257.22L1743.47 1254.11L1738.39 1263.09L1735.91 1268.66L1734.02 1272.29L1732.31 1272.82L1730.83 1277.64C1730.6 1278.41 1729.79 1277.67 1729.41 1277.21L1730.3 1274.32L1729.76 1270.99L1731.23 1266.17L1729.81 1265.74L1729.57 1261.45L1730.03 1257.38L1730.92 1254.49L1730.85 1247.09L1728.07 1253.62L1725.47 1257.04L1724.17 1258.75L1722.99 1262.6L1721.57 1262.17L1720.39 1266.02L1717.67 1267.3L1718.85 1263.44L1720.32 1258.62L1720.67 1252.41L1722.61 1243.52L1716.82 1252.29L1714.64 1256.89L1713.46 1260.74L1711.15 1263.19L1711.62 1259.12L1710.79 1256.76L1711.84 1250.76L1710.59 1247.22L1707.99 1250.64L1702.79 1257.48L1702.62 1260.59L1699.01 1264.75L1696.29 1266.03L1695.41 1268.92L1693.15 1266.12L1696.34 1260.77L1696.1 1256.49L1698.33 1246.63L1694.56 1253.91L1692.25 1256.36L1691.07 1260.22L1689.89 1264.07L1688.47 1263.64L1689.36 1260.75L1688.52 1258.38L1688.4 1256.24L1689.7 1254.53L1690.46 1249.49L1691.99 1239.43L1688.68 1242.63L1687.2 1247.44L1685.02 1252.04C1684.59 1252.61 1683.52 1253.9 1682.71 1254.5C1681.71 1255.25 1682.12 1256.43 1682.84 1256.64C1683.4 1256.82 1682.48 1258.64 1681.95 1259.54C1681.52 1260.1 1680.45 1261.39 1679.65 1261.99C1678.84 1262.59 1678.92 1263.52 1679.06 1263.92L1678.59 1267.99L1677.05 1265.41L1676.21 1263.05L1677.1 1260.16L1676.26 1257.8L1677.32 1251.8L1678.72 1239.58L1677.84 1242.47L1673.77 1250.71L1673.59 1253.82L1670.58 1256.06L1669.69 1258.95L1667.93 1264.73L1668.98 1258.73L1669.33 1252.51L1669.38 1247.26L1670.56 1243.41L1670.43 1241.26L1672.03 1238.59L1674.31 1223.49L1667.94 1234.18L1669.36 1234.61L1665.46 1239.74L1664.16 1241.45L1664.28 1243.6L1662.68 1246.27L1660.08 1249.69L1661.51 1250.12L1660.62 1253.01L1657.61 1255.25L1654.83 1261.78L1652.53 1264.24L1649.56 1261.22L1651.99 1260.91L1651.33 1255.44L1653.46 1256.09L1655.21 1237.66L1647.77 1254.35L1646.47 1256.06L1642.87 1260.23L1641.45 1259.79L1642.33 1256.9L1640.91 1256.47L1640.37 1253.14L1643.51 1253.05L1640.01 1246.71L1645.41 1218.86L1636.09 1239.19L1631.47 1244.1L1628.58 1248.49L1629.71 1249.88C1629.08 1251.1 1627.56 1253.86 1626.52 1255.23C1625.22 1256.94 1618.06 1260.02 1616.63 1259.58C1615.64 1256.75 1609.47 1258.45 1606.51 1259.65L1575.94 1250.3L1575.26 1232.18L1566.16 1244.15L1565.77 1225.07L1567.35 1209.75C1564.97 1214.99 1559.91 1226.44 1558.73 1230.29C1557.55 1234.15 1547.44 1238.43 1542.52 1240.09C1537.01 1239.45 1525.39 1238.64 1522.98 1240.43C1520.57 1242.22 1509.03 1242.84 1503.56 1242.92L1506.44 1225.89L1492.55 1245.88L1491.7 1230.87L1482.6 1242.84L1430.7 1226.97C1422.53 1226.58 1405.51 1224.95 1402.8 1221.6C1400.09 1218.24 1392.08 1219.37 1388.41 1220.36L1394.04 1227.35L1558.27 1277.56Z" fill={treeFill}/>
      <path d="M2208.42 1453.51C2278.53 1467.76 2493.87 1623.39 2526 1649.53V2160H803.499V1197C802.038 1143.54 1039.43 1088.39 1042.93 1099.79C1046.44 1111.2 1202.13 1160.06 1279.54 1179.07C1412.44 1212.33 1687.9 1279.58 1726.45 1282.43C1765.01 1285.28 1923.62 1352.52 1998.11 1385.79C2055.07 1395.29 2176.87 1422.14 2208.42 1453.51Z" fill={fill}/>
      <path d="M2519.71 1583.95C2379.09 1572.52 2145.9 1652.48 2068.27 1692.95V2160H2681H3394.5H4048.97H4501.5V1279.5L4048.97 1034.5L3943.5 1166.48L3731.51 949.219L3546.94 1166.48L3461.51 1117.97C3395.59 1147.73 3151.43 1398.52 3140.88 1398.52C3130.34 1398.52 2743.83 1480.38 2519.71 1583.95Z" fill={fill}/>
    </svg>
  );
};

export default MountainFour;