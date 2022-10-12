/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import { LitElement, TemplateResult, CSSResult } from 'lit-element';
/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <tyapk-modal> as an HTML tag.
 */
export declare class TyapkModalElement extends LitElement {
    static get styles(): CSSResult;
    /**
     * Create an observed property. Triggers update on change.
     */
    header: string;
    show: boolean;
    id: string;
    creator: string;
    message: string;
    title: string;
    selectedFiles: string;
    tags: string;
    private _close;
    open(): void;
    closeModal(result: string): void;
    /**
     * Implement `render` to define a template for your element.
     */
    render(): TemplateResult;
}
