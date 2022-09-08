
import { LitElement, html, css } from 'lit';
import { customElement, state, property, query } from 'lit/decorators.js';
import { addNewPost, getAllPosts } from './actions/postActions';
import { Post } from './models/models';


@customElement('memories-list')
export class MemoriesList extends LitElement {
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  @state()
  private _listItems =JSON.parse(localStorage.getItem('posts') || '')
  @property()

  render() {
    getAllPosts();

    // TODO: Replace items definition.
    const items = this._listItems;
    console.log(items);

    const memories = html`


    
      <ul>
        ${items.map((item: Post) =>
      html`
      <div class="card">
      <img src="${item.selectedFile}" alt="Avatar" style="width:100%">
      <div class="container">
      <h4><b>John Doe</b></h4> 
      <p>
      ${item.selectedFile}
      </p> 
       </div>
        </div>`
    )}
      </ul>
    `;
    // TODO: Define partial templates.
    return html`
      <h2>To Do</h2>
      <!-- TODO: Update expression. -->
      ${memories}
      <input id="newitem" aria-label="New item">
      <input id="newitem" aria-label="New item">
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
    `;
  }



  setHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked;
  }

  @query('#newitem')
  input!: HTMLInputElement;

  addToDo() {
    const obj = {
      title: 'I love cats',
      message: 'hello',
      creator: 'olha',
      tags:['String','lala'],
      selectedFile:'https://images.unsplash.com/photo-1518534249708-e8f3537753ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    }
    // const posts = localStorage.getItem('posts');
    // deletePost('6319b7d3f04d01c7b7a18d9d')
    // getAllPosts()
    addNewPost(obj)
    getAllPosts();
  }
}

