import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

function findBackups(dir: string) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          if (!file.startsWith('.') && file !== 'node_modules') {
            findBackups(fullPath);
          }
        } else if (file.includes('App') || file.includes('app') || file.includes('main')) {
          console.log('Found file:', fullPath, 'size:', stat.size);
        }
      } catch (e) {}
    }
  } catch (e) {}
}

console.log('--- Searching home and tmp directories ---');
findBackups('/tmp');
findBackups(process.cwd());
