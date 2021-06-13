import fs from 'fs';
import path from 'path';
import { app } from '../config';
import { logger } from './logger';

const { cacheDirectory } = app;

const createDirectoryMaybe = (directory: string) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
};

interface SaveToFileArgs {
  directory: string;
  file: string;
  content: string;
}

const saveToFile = ({
  directory,
  file,
  content,
}: SaveToFileArgs) => {
  createDirectoryMaybe(directory);
  const filePath = path.join(directory, file);
  fs.writeFileSync(filePath, content);
};

const getFileContents = (filePath: string) =>
  Buffer.from(fs.readFileSync(filePath)).toString() || '';

export class Cache {
  static get(name: string) {
    logger.verbose(`Getting cached value for ${name}...`);
    return getFileContents(path.join(cacheDirectory, name));
  }

  static set(name: string, value: object) {
    logger.verbose(`Saving new value to ${path.join(cacheDirectory, name)}...`); // eslint-disable-line
    saveToFile({
      directory: cacheDirectory,
      file: name,
      content: JSON.stringify(value),
    });
  }
}
