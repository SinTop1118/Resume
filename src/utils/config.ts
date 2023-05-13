type NewWindow = Window &
  typeof globalThis & {
    $config: Record<string, string>;
  };
//env文件中所有的环境变量
export const envConfigs = { ...import.meta.env };

let clientCfg:Record<string,string>;
const cfg = {
  ...envConfigs,
};

const getClientCfg = ():Record<string,any> => ({
  ...envConfigs,
  ...((window as NewWindow).$config || {}),
});

const getEnvConfig = () => {
  if (!clientCfg && (window as NewWindow).$config) {
    clientCfg = getClientCfg();
  }
  return clientCfg || cfg;
};

export default getEnvConfig