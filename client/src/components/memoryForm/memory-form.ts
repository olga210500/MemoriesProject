
import { LitElement, html} from 'lit';
import { customElement, state, property, query } from 'lit/decorators.js';
import { addNewPost, getAllPosts } from '../../actions/postActions';
import { memoriesState } from '../../states/memoryState';
import { formStyles } from './styles';
// import { addNewPost, get } from './actions/postActions';
// import { Post } from './models/models';

@customElement('memory-form')
export class MemoryForm extends LitElement {
  static styles = formStyles;

  @state()


  @property()

  render() {

    return html`

<div>
<div class="memory-form-wrapper">
  <div class="memory-form">
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
    <input type="button" value="Send"  @click = ${this.addMemory}>
    </div>
  </div>
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
  tags!:HTMLInputElement;


  addMemory(e: Event): void {
    // e.preventDefault();

    const creator = this.creator.value;
    const message = this.message.value;
    const title = this.titleString.value;
    const selectedFile = this.selectedFile.value;
    const tags = this.tags.value;
    console.log(creator, message, selectedFile)

    const obj = {
      title,
      message,
      creator,
      createdAt:new Date(),
      tags: [...tags.split(',')],
      selectedFile
    }

    getAllPosts()

    addNewPost(obj)

  }
}

