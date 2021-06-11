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
  fs.readFileSync(filePath);

export const cache = {
  get: (name: string) => {
    console.log(`getting cached value for ${name}...`); // eslint-disable-line
    return getFileContents(path.join(cacheDirectory, name));
  },
  set: (name: string, value: object) => {
    logger.verbose(`Saving new article to ${path.join(cacheDirectory, name)}...`); // eslint-disable-line
    saveToFile({
      directory: cacheDirectory,
      file: name,
      content: JSON.stringify(value),
    });
  },
};
