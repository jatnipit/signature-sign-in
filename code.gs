function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate()
  .setTitle("Signature Sign In")
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}
