import is from 'electron-is';
import { join } from 'path';
import { BrowserWindow } from 'electron';
import log from 'electron-log';

let count = 0;

export function create(opts) {
  count += 1;
  let win = new BrowserWindow(opts);
  win.on('close', () => {
    count -= 1;
    win = null;
  });
  return win;
}

export function getCount() {
  return count;
}

function getRenderer() {
  let fs = require('fs');
  let path = `${join($dirname, '..', 'renderer')}`;
  let _base = `${path}/index.html`;
  let new_base = `${path}/index2.html`;
  if (fs.existsSync(new_base)) return new_base;
  let file = fs.readFileSync(_base);
  //   console.log(file);
  log.info('file' + file.replace);
}

export function getPath() {
  let path = `file://${join($dirname, '..', 'renderer')}/index.html`;
  //   getRenderer();
  if (is.dev()) {
    path = 'http://127.0.0.1:8000/';
  }
  return path;
}
