import { create, getPath } from './window';

export function init() {
  const win = create({ width: 1360, height: 900 });
  win.loadURL(getPath());
}
