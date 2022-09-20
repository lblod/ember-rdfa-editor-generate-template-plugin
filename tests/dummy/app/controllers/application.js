import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  plugins = [
    {
      name: 'generate-template',
      options: {
        administrativeUnitUuid:
          'cec59e5e872a9084e93becf3026bfcc2f25926ea76372711b7a745875f3b7949',
      },
    },
  ];

  @action
  rdfaEditorInit(controller) {
    const presetContent = `
    <div prefix="dct: http://purl.org/dc/terms/ ext: http://mu.semte.ch/vocabularies/ext/ say: https://say.data.gift/ns/">
    <div property="say:hasPart" typeof="say:Article" resource="http://data.lblod.info/artikels/1">
    <div property="say:heading">
      Artikel 
      <span property="eli:number" datatype="xsd:string"> 
        <span class="mark-highlight-manual">Voer inhoud in</span>
      </span>
      :
      <span property="ext:title"><span class="mark-highlight-manual">Voer inhoud in</span></span>
    </div>
    <span style="display:none;" property="eli:language" resource="http://publications.europa.eu/resource/authority/language/NLD" typeof="skos:Concept">&nbsp;</span>
    <div property="say:body" datatype='rdf:XMLLiteral'>
      <span class="mark-highlight-manual">Voer inhoud in</span>
    </div>
  </div>
  <div property="say:hasPart" typeof="say:Article" resource="http://data.lblod.info/artikels/2">
        <div property="say:heading">
          Artikel 
          <span property="eli:number" datatype="xsd:string"> 
            <span class="mark-highlight-manual">Voer inhoud in</span>
          </span>
          :
          <span property="ext:title"><span class="mark-highlight-manual">Voer inhoud in</span></span>
        </div>
        <span style="display:none;" property="eli:language" resource="http://publications.europa.eu/resource/authority/language/NLD" typeof="skos:Concept">&nbsp;</span>
        <div property="say:body" datatype='rdf:XMLLiteral'>
          <span class="mark-highlight-manual">Voer inhoud in</span>
        </div>
      </div>
      <div property="say:hasPart" typeof="say:Article" resource="http://data.lblod.info/artikels/3">
        <div property="say:heading">
          Artikel 
          <span property="eli:number" datatype="xsd:string"> 
            <span class="mark-highlight-manual">Voer inhoud in</span>
          </span>
          :
          <span property="ext:title"><span class="mark-highlight-manual">Voer inhoud in</span></span>
        </div>
        <span style="display:none;" property="eli:language" resource="http://publications.europa.eu/resource/authority/language/NLD" typeof="skos:Concept">&nbsp;</span>
        <div property="say:body" datatype='rdf:XMLLiteral'>
          <span class="mark-highlight-manual">Voer inhoud in</span>
        </div>
      </div>
    
    </div>`;
    controller.setHtmlContent(presetContent);
    const editorDone = new CustomEvent('editor-done');
    window.dispatchEvent(editorDone);
  }
}
