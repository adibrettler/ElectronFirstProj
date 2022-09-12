const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile("chartExample.html");
});
