export default class GenerateTemplateCommand {
  name = 'generateTemplate';

  constructor(model) {
    this.model = model;
  }

  canExecute() {
    return true;
  }

  execute(controller) {
    let uris = [];
    for(let resource of defaultResources) {
      const quads = [...controller.datastore
      .match(null, 'a', `>${resource}`)
      .asQuads()];
      const resourceUris = quads.map((quad) => quad.subject.value)
      uris = [...uris, ...resourceUris];
    }
    let documentHTML = controller._rawEditor.rootNode.outerHTML;
    for(let uri of uris) {
      const uriParts = uri.split('/');
      uriParts.pop();
      const uriWithoutUuid = uriParts.join('/');
      documentHTML = documentHTML.replace(uri, `${uriWithoutUuid}/generateUuid()`)
    }
    return documentHTML;
  }
}
