
import { LitElement, html } from 'lit';
import { customElement, state, property, query } from 'lit/decorators.js';
import { addNewPost, getAllPosts } from '../../actions/postActions';
import { Post } from '../../models/models';
import { formStyles } from './styles';

@customElement('memory-form')
export class MemoryForm extends LitElement {
  static styles = formStyles;

  @state()
  public _listItems = JSON.parse(localStorage.getItem('posts') || '[]');


  @property()

  render() {
    getAllPosts()
    return html`

<div>
<div class="memory-form-wrapper">
  <form class="memory-form" id='card'>
    <h5 class="title">Creating a memory</h5>
    <p class="description">Create memory to not forgot.
    </p>
    <div class='input-container'>
      <input type="text" class="input-field form-control  form-input" id="creator-name" placeholder="Creator" required>
    </div>
    <div class='input-container'>
      <input type="text" class="input-field form-control  form-input" id='title'  placeholder="Title" required>
    </div>
    <div class='input-container'>
      <textarea id="message" class="input-field form-control form-text-area" rows="5" cols="30" id='message' placeholder="Message" required></textarea>
    </div>
    <div class='input-container'>
    <input type="text" class="input-field form-control  form-input" id='tags' placeholder="Tags (comma separated)" required>
    </div>
    <div class='input-container'>
    <input type="file" name="selectedFile" accept="image/*" id='selectedFile'>
    </div>
    <div class="submit-button-wrapper">
    <input type="button" value="Send"  @click = ${this.addMemory} >
    </div>
  </form>
</div>
</div>
 `;
  }

  @query('#creator-name')
  creator!: HTMLInputElement;
  @query('#message')
  message!: HTMLInputElement;
  @query('#title')
  titleString!: HTMLInputElement;
  @query('#selectedFile')
  selectedFile!: HTMLInputElement;
  @query('#tags')
  tags!: HTMLInputElement;


  addMemory(e: Event): void {

    const creator = this.creator.value;
    const message = this.message.value;
    const title = this.titleString.value;
    const selectedFiles = this.selectedFile.files;
    const tags = this.tags.value;


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

}

function getBase64(file: File, cb: (el:string | ArrayBuffer | null) => void) {
  var reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}
