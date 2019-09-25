import {remote} from 'electron';

const config = remote.getCurrentWindow().clientConfig;

export default config;