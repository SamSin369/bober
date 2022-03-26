import axios from "axios";

export const pingGecko = () => {
  axios
    .get("https://api.coingecko.com/api/v3/ping")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const allCoinsGecko = () => {
  axios
    .get("https://api.coingecko.com/api/v3/coins/list")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
var array = ["asdc", "asdadss"]
export const getGoingCoinRate = async (coinnames, convertTo, cb, errcb) => {
  let coinQuery = "";
  console.log(coinnames);

  if (coinnames.length === 0) {
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinnames[0]}&vs_currencies=${convertTo}`
      )
      .then((res) => {
        cb(res);
      })
      .catch((err) => {
        err(cb);
      });
  } else {
    coinnames.map((coin) => {
      coinQuery += `${coin}%2C`;
    });
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinQuery}&vs_currencies=${convertTo}`
      )
      .then((res) => {
        cb(res);
      })
      .catch((err) => {
        errcb(err);
      });
  }
};
