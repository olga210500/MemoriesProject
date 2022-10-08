
import { LitElement, html } from 'lit';
import { customElement, state, property, query } from 'lit/decorators.js';
import { addNewPost, getAllPosts, updtateCurrentPost } from '../../actions/postActions';
import { Post } from '../../models/models';
import { formStyles } from './styles';

@customElement('memory-form')
export class MemoryForm extends LitElement {
  static styles = formStyles;

  @state()
  public _listItems = JSON.parse(localStorage.getItem('posts') || '[]');


  @property()
  header = '';
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
  @property()
  edit=false;
  render() {
    getAllPosts()
    return html`

<div>
<div class="memory-form-wrapper" id = 'memory-form-wrapper'>
  <form class="memory-form" id='card'>
    <h5 class="title">${this.header}</h5>
    <div class='input-container'>
      <input type="text" value=${this.creator} class="input-field form-control  form-input" id="creator-name" placeholder="Creator" required>
    </div>
    <div class='input-container'>
      <input type="text" value=${this.title} class="input-field form-control  form-input" id='title'  placeholder="Title" required>
    </div>
    <div class='input-container'>
      <textarea id="message" class="input-field form-control form-text-area" rows="5" cols="30" id='message' placeholder="Message" required>${this.message}</textarea>
    </div>
    <div class='input-container'>
    <input type="text" value=${this.tags} class="input-field form-control  form-input" id='tags' placeholder="Tags (comma separated)" required>
    </div>
    <div class='input-container'>
    <input type="file" value=${this.selectedFiles} name="selectedFile" accept="image/*" id='selectedFile'>
    </div>
    ${this.edit?html`<div class="submit-button-wrapper">
    <input type="button" value="Save"  @click = ${this.updateMemory} >
    </div>`:html`<div class="submit-button-wrapper">
    <input type="button" value="Send"  @click = ${this.addMemory} >
    </div>`}

  </form>
</div>
</div>
 `;
  }

  @query('#creator-name')
  getCreator!: HTMLInputElement;
  @query('#message')
  getMessage!: HTMLInputElement;
  @query('#title')
  getTitleString!: HTMLInputElement;
  @query('#selectedFile')
  getSelectedFile!: HTMLInputElement;
  @query('#tags')
  getTags!: HTMLInputElement;


  addMemory(e: Event): void {

    const creator = this.getCreator.value;
    const message = this.getMessage.value;
    const title = this.getTitleString.value;
    const selectedFiles = this.getSelectedFile.files;
    const tags = this.getTags.value;
  

    let obj: Post = {
      title,
      message,
      creator,
      createdAt: new Date(),
      tags: [...tags.split(',')],
    }
    if (selectedFiles?.length) {

      getBase64(selectedFiles[0], (result) => {
        obj.selectedFile = result?.toString();
        addNewPost(obj);

      });

    } else {
      addNewPost(obj);

    }
  }
  updateMemory(e: Event):void{
    var modal = document.querySelector('tyapk-modal');
    const creator = this.getCreator.value.trim();
    const message = this.getMessage.value.trim();
    const title = this.getTitleString.value.trim();
    const selectedFile = this.getSelectedFile.files;
    const tags = this.getTags.value.trim();
    if(creator!==this.creator.trim() || message!==this.message.trim() || title!==title.trim()|| tags!==this.tags.trim() || selectedFile ){
      const updatedPost:Post={
        _id:this.id,
        creator,
        message,
        title,
        tags

      }
      if (selectedFile?.length) {

        getBase64(selectedFile[0], (result) => {
          updatedPost.selectedFile = result?.toString();
          updtateCurrentPost(this.id,updatedPost);
  
        });
  
      }
      updtateCurrentPost(this.id,updatedPost)
      const pos = this._listItems.map((e:Post) => e._id).indexOf(this.id);
      this._listItems[pos]=updatedPost;
      this._listItems = this._listItems;
      modal.show=false;
    

      // const currentItem = this._listItems.filter((el:Post)=>el._id===this.id)
    }
    console.log(this.title)
  }
}



function getBase64(file: File, cb: (el: string | ArrayBuffer | null) => void) {
  var reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}
