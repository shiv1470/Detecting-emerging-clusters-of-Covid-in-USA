const data = [
  {
    centre: ["41.2698430321", "-111.913383934"],
    radius: "1.6991401094452636",
    LogLRZ: "529.4853784963943",
  },
  {
    centre: ["40.9900687168", "-112.111371277"],
    radius: "1.853123356693629",
    LogLRZ: "463.1370923192536",
  },
  {
    centre: ["39.9541358004", "-105.052664798"],
    radius: "1.1340786826936322",
    LogLRZ: "419.96032163030907",
  },
  {
    centre: ["41.0893204311", "-111.573150356"],
    radius: "2.0446181679134177",
    LogLRZ: "398.5477323266801",
  },
  {
    centre: ["40.6673139262", "-111.923601307"],
    radius: "2.224196912778816",
    LogLRZ: "342.931884441094",
  },
  {
    centre: ["40.0924597674", "-105.35770567"],
    radius: "1.4636629350871573",
    LogLRZ: "298.56936348268425",
  },
  {
    centre: ["40.6664172232", "-105.461144451"],
    radius: "1.9131929192333421",
    LogLRZ: "193.9174162892806",
  },
];

const data2 = [
  {
    radius: 4.9091575804594605,
    centre: [40.31553506552956, -111.42002153884643],
  },
  {
    radius: 4.308030236617021,
    centre: [43.23497694754119, -111.93846850707169],
  },
  {
    radius: 1.5641885165055336,
    centre: [38.20992188969642, -112.96650167503178],
  },
  {
    radius: 6.237849883883943,
    centre: [40.14398628846774, -104.37623521528006],
  },
];

const data1 = [
  {
    centre: [37.995034555881524, -101.63233319752554],
    radius: 2.5003815131579077,
  },
  {
    centre: [41.03287834897685, -111.73434062368919],
    radius: 5.117428832223052,
  },
  {
    centre: [41.50059254065277, -103.03439996060337],
    radius: 5.06004214240621,
  },
  {
    centre: [38.71306324091341, -106.54212031485594],
    radius: 3.438863338312084,
  },
];

const data4 = [
  {
    centre: [40.6521608211194, -102.47107830660214],
    radius: 4.7330614250220195,
  },
  {
    centre: [37.00219850034996, -101.02148633227937],
    radius: 2.5041813540969198,
  },
  {
    centre: [41.83646925897811, -111.60434195764635],
    radius: 4.936508324886094,
  },
  {
    centre: [39.49040764504628, -105.71801586400053],
    radius: 5.42534232962939,
  },
];

const data5 = [
  {
    centre: [39.782144593134646, -103.97909051622571],
    radius: 6.255944644270046,
  },
  {
    centre: [41.57563789209908, -111.69457471617196],
    radius: 4.732255251230645,
  },
];

const data6 = [
  {
    centre: [39.78534473605546, -101.07238769114255],
    radius: 5.941724848879033,
  },
  {
    centre: [37.86363877097315, -113.29567239553961],
    radius: 0.6195623683523155,
  },
  {
    centre: [39.70324992253689, -112.78355665563558],
    radius: 1.188657939120205,
  },
  {
    centre: [38.73111294600448, -111.76246611874622],
    radius: 2.2482384521686107,
  },
  {
    centre: [43.429682261108816, -113.9616707775708],
    radius: 1.8229096592457028,
  },
  {
    centre: [38.66533862928378, -107.02800062124882],
    radius: 5.775756469492658,
  },
  {
    centre: [41.636527558937686, -111.24795786680676],
    radius: 5.387835000623331,
  },
];
const path = require("path");
const { spawn } = require("child_process");
const pythonDir = __dirname + "./pso/main.py"; // Path of python script folder
const python = pythonDir + "pythonEnv/bin/python"; // Path of the Python interpreter

const satScan = () => {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      result: data,
    });
  });
};

function cleanWarning(error) {
  return error.replace(
    "/Detector is not able to detect the language reliably.\n/g",
    ""
  );
}
const pso = (resBody) => {
  return new Promise((resolve, reject) => {
    const pathname = path.resolve(__dirname, "pso", "main.py");
    const { spawn } = require("child_process");
    if (!resBody.numOfCentriods) {
      resBody.numOfCentriods = 4;
    }

    const pyprog = spawn("python", [
      "-W ignore",
      pathname,
      resBody.noOfIteration,
      resBody.numOfCentriods,
    ]);
    let result = "";
    let resultError = "";
    pyprog.stdout.on("data", function (data) {
      result += data.toString();

      const hotspots = require("../hotspots_pso.json");
      const hotspotResult = [];
      for (hotspot in hotspots) {
        hotspotResult.push({
          centre: hotspots[hotspot].centre,
          radius: hotspots[hotspot].radius,
        });
        resolve({
          status: 200,
          result: hotspotResult,
        });
      }
    });

    pyprog.stderr.on("data", (data) => {
      resultError += cleanWarning(data.toString());
      reject(resultError);
    });
  });
};

module.exports = {
  satScan,
  pso,
};
