/*
 EDIBREW ORDER LOG (Google Sheets) - optional, free
 1. Go to sheets.google.com and create a new sheet. Name it "Edibrew Orders".
 2. Menu: Extensions > Apps Script. Delete everything there and paste this whole file. Save.
 3. Click Deploy > New deployment > type "Web app".
      Execute as: Me      Who has access: Anyone
    Click Deploy and allow access. Copy the "Web app URL".
 4. Open config.js on your website and paste the URL into SHEETS_URL: '...'
 Every new order is then added as a row automatically.
*/
var HEADERS = ['Date','Order ID','Status','Name','Phone','Email','Address','City','Province','Order type','Items','Subtotal','Discount','Coupon','Delivery','Total','Payment'];

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  var o = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(o.date), o.id, o.status, o.name, o.phone, o.email, o.address, o.city, o.province,
                   o.type, o.items, o.sub, o.discount, o.coupon, o.delivery, o.total, o.payment]);
  return ContentService.createTextOutput('ok');
}
