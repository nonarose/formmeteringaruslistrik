var sheetName = 'Sheet1'; // Ganti sesuai nama sheet kamu
var scriptProp = PropertiesService.getScriptProperties();

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var data = JSON.parse(e.postData.contents); // karena kamu submit data berupa JSON

  for (var mccbName in data) {
    var record = data[mccbName];

    sheet.appendRow([
      record.petugas,      // petugas jadi judul tabel, tetap disimpan ke sheet
      mccbName,            // nama MCCB
      record.savedAt || "",// waktu save
      record.arus_r || "", // arus R
      record.arus_s || "", // arus S
      record.arus_t || "", // arus T
      record.catatan || "" // catatan
    ]);
  }

  return ContentService.createTextOutput("OK");
}
