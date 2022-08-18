import GenerateTemplatePlugin from '../generate-template-plugin';

function pluginFactory(plugin) {
  return {
    create: (initializers) => {
      const pluginInstance = new plugin();
      Object.assign(pluginInstance, initializers);
      return pluginInstance;
    },
  };
}

export function initialize(application) {
  application.register(
    'plugin:generate-template',
    pluginFactory(GenerateTemplatePlugin),
    { singleton: false }
  );
}

export default {
  initialize,
};
