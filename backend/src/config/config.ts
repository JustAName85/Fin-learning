import dotenv from 'dotenv';
import { ConfigModel, EnvironmentModel } from './configModel';
dotenv.config();

const env = JSON.parse(JSON.stringify(process.env)) as EnvironmentModel;

const config: ConfigModel = {
  env,
};

export default config;
