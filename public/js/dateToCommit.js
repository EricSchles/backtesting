const dateToCommit = {
  '03-19-2020': 'da541531b70899263526ac2e061c7d87412cdc5c',
  '03-23-2020': '5c67d6247bdfc804eb9a4250ffeaf10382dd1fed',
  '03-27-2020': '63c37955a64861793c4df96037713994feeb5e51',
  '03-31-2020': 'a331ddc130e73319f594126a0369d05564be8d28',
  '04-04-2020': '861ef5d2ad244fb44545aeee7055c9616329cad4',
  '04-06-2020': '78361eb19707f13284c8699098f77ca0565707bf',
  '04-09-2020': '7d0fc8157f2140124ea26068aaff01b44806e538',
  '04-12-2020': '645ae78673bddd1dce3c7c1cf9062b75aca9b306',
  '04-14-2020': 'da3e034c5602eeb1a1398d01251c93b7e4c51b70'
 }

let modelNameObject = {}

const snapShotDates = { // from new API
    "06-06-2020": "432",
    "06-05-2020": "422",
    "06-04-2020": "417",
    "06-01-2020": "396",
    "05-29-2020": "385",
    "05-28-2020": "375",
    "05-27-2020": "373",
    "05-26-2020": "370",
    "05-22-2020": "359",
    "05-21-2020": "354",
    "05-20-2020": "323",
    "05-14-2020": "292",
    "05-11-2020": "276",
    "05-08-2020": "271",
    "05-06-2020": "261"
}

for (snapShot in snapShotDates) {
 modelNameObject[snapShot] = "Initial Inference (" + snapShot + " Commit)"
}

modelNameObject["04-14-2020"] = "Initial Inference (04/14/2020 Commit)";
modelNameObject["04-12-2020"] = "Grand Rapids (04/12/2020 Commit)";
modelNameObject["04-09-2020"] = "Grand Rapids (04/09/2020 Commit)";
modelNameObject["04-06-2020"] = "New Model/SEIR (04-06-2020 Commit)";
modelNameObject["04-04-2020"] = "New Model/SEIR (04-04-2020 Commit)";
modelNameObject["03-31-2020"] = "New Model/SEIR (03-31-2020 Commit)";
modelNameObject["03-27-2020"] = "Excel (03-27-2020)";
modelNameObject["03-23-2020"] = "Excel (03-23-2020)";
modelNameObject["03-19-2020"] = "Excel (03-19-2020)";
