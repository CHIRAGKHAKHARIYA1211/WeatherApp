import * as NetInfo from "@react-native-community/netinfo";
import msgs from "../constants/AppMessages";
import { BASE_API } from "../constants/AppSecret";

class API {
  HOST = BASE_API;

  isConnected() {
    return new Promise(function (fulfill, reject) {
      NetInfo.fetch().then((info) => {
        if (info.isConnected) fulfill(info.isConnected);
        else {
          reject(info.isConnected);
        }
      });
    });
  }

  async NetWorkFailedError(err, reject) {
    if (err == "SyntaxError: JSON Parse error: Unrecognized token '<'") {
      alert(msgs.jsonparseError);
    } else {
      if (err.message === "Network request failed") {
        err = {
          message: msgs.noInternet,
          status: "NO_INTERNET",
        };
      }
      if (typeof reject !== "undefined") {
        reject(err);
      } else {
        alert(err.message);
      }
    }
  }

  async GET(endpoint, token) {
    var headers = {};

    if (token !== undefined) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return new Promise(async (resolve, reject) => {
      var uri = this.normalizePath(`${endpoint}`);

      try {
        var res = await fetch(uri, {
          method: "GET",
          headers: headers,
        });

        res
          .json()
          .then((json) => {
            if (res.status >= 200 && res.status < 300) {
              resolve(json);
            } else {
              reject(json);
            }
          })
          .catch(async (err) => {
            this.NetWorkFailedError(err, reject);
          });
      } catch (err) {
        this.NetWorkFailedError(err, reject);
      }
    });
  }

  normalizePath(endpoint) {
    return `${this.HOST}${endpoint}`;
  }
}

export default new API();
