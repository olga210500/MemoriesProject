import { LitElement } from 'lit';
export declare class MemoryCard extends LitElement {
    static styles: import("lit").CSSResult;
    _listItems: any;
    render(): import("lit-html").TemplateResult<1>;
    deleteMemory(id: string | undefined): void;
    editMemory(id: string): void;
}
