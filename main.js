// Auto reload electron on changes in Vue app
require('electron-reload')(__dirname);

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let splashWindow;

function createWindow() {
  // Create the splash window.
  splashWindow = new BrowserWindow({
    width: 550,
    height: 550,
    resizable: true,
    frame: false,
    transparent: true,
    hasShadow: false,
  });

  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 1024, height: 768, resizable: true, show: false });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  splashWindow.loadURL(`file://${__dirname}/dist/index.html#splash`);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // if main window is ready to show, then destroy the splash window and show up the main window
  mainWindow.once('ready-to-show', () => {
    setTimeout(() => {
      splashWindow.hide();
      mainWindow.show();
    }, 5000);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
