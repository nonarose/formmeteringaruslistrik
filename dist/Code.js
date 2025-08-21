var sheetId = '1etVOgqrr1kFSzqw_1pLU2zgxso3yktsMO0SWAJTfYhQ'; 
var sheetName = 'Sheet1'; 
var scriptProp = PropertiesService.getScriptProperties();

function doPost(e) {
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
  var data = JSON.parse(e.postData.contents);

  for (var mccbName in data) {
    var record = data[mccbName];

    sheet.appendRow([
      record.petugas || "",
      mccbName || "",
      record.savedAt || "",
      record.arus_r || "",
      record.arus_s || "",
      record.arus_t || "",
      record.catatan || ""
    ]);
  }

  return ContentService.createTextOutput("OK");
}
