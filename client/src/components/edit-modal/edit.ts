/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
 import {
    css,
    LitElement,
    html,
    customElement,
    property,
    TemplateResult,
    CSSResult,
  } from 'lit-element';
  
  import { tyapkModalStyles } from './styles';
  
  /**
   * Use the customElement decorator to define your class as
   * a custom element. Registers <tyapk-modal> as an HTML tag.
   */
  @customElement('tyapk-modal')
  export class TyapkModalElement extends LitElement {
    static get styles(): CSSResult {
      return tyapkModalStyles();
    }
  
    /**
     * Create an observed property. Triggers update on change.
     */
    
  
    @property()
    header = '';
    @property()
    show = false;
    @property()
    id = '';
    @property()
    creator = '';
    @property()
    message = '';
    @property()
    title = '';
    @property()
    selectedFiles = '';
    @property()
    tags = '';
  
    private _close(detail: string): void {
      // Fire a custom event for others to listen to
      this.dispatchEvent(new CustomEvent('close', { detail }));
    }
  
    open(): void {
      this.show = true;
    }
  
   
    closeModal(result: string): void {
      this.show = false;
      this._close(result);
      

    }
  
    /**
     * Implement `render` to define a template for your element.
     */
    render(): TemplateResult {
      /**
       * Use JavaScript expressions to include property values in
       */
      return html`
        ${this.show
          ? html`
              <div class="dialog">
                <div class="dialog__content">
                  <header>
                    <h2>${this.header}</h2>
                  </header>
                  <main>
                  <memory-form header="Edit memory" id=${this.id} creator=${this.creator}
                  message=${this.message} title=${this.title} selectedFile=${this.selectedFiles}
                  tags=${this.tags} edit='true'
                  ></memory-form>
                  </main>
                  <div
                    class="dialog__close-btn"
                    @click="${() => this.closeModal('close')}"
                  ></div>
                </div>
              </div>
              <div class="overlay"></div>
            `
          : ''}
      `;
    }
  }