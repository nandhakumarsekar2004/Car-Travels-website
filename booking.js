function doPost(e) {
  var formData = e.parameter;
  // Process the form data here
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([formData.name, formData.email, formData.phone, formData.carType, formData.driverOption, formData.aadharCard, formData.licenseNumber]);
}