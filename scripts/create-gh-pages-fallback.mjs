import { copyFile, access } from 'node:fs/promises';

const indexPath = new URL('../dist/index.html', import.meta.url);
const fallbackPath = new URL('../dist/404.html', import.meta.url);

await access(indexPath);
await copyFile(indexPath, fallbackPath);
