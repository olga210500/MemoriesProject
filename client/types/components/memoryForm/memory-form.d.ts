import { LitElement } from 'lit';
export declare class MemoryForm extends LitElement {
    static styles: import("lit").CSSResult;
    _listItems: any;
    header: string;
    id: string;
    creator: string;
    message: string;
    title: string;
    selectedFiles: string;
    tags: string;
    edit: boolean;
    render(): import("lit-html").TemplateResult<1>;
    getCreator: HTMLInputElement;
    getMessage: HTMLInputElement;
    getTitleString: HTMLInputElement;
    getSelectedFile: HTMLInputElement;
    getTags: HTMLInputElement;
    addMemory(): void;
    updateMemory(): void;
}
