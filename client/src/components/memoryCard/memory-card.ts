
import { LitElement, html } from 'lit';
import { customElement, state, property, query } from 'lit/decorators.js';
import { addNewPost, deletePost, getAllPosts } from '../../actions/postActions';
import { Post, Tags } from '../../models/models';
import moment from 'moment';
import { cardStyles } from './styles';


@customElement('memory-card')
export class MemoryCard extends LitElement {
  static styles = cardStyles;

  @state()
  
  public _listItems = JSON.parse(localStorage.getItem('posts') || '[]');
  private edit = false;


  @property()



  render() {
    const items = this._listItems;

    
    if(!items.length){
      getAllPosts();

    }
 
    return html`<ul class="cards">${items.map((item: Post) => html`
    
    
    <li>
      <div class="card">
       <a href="/${item._id}"> <img src="${item?.selectedFile  || 'https://i.imgur.com/oYiTqum.jpg'}" class="card__image" alt="" /></a>

        <div class="card__overlay">
        <img class='edit__icon' src="./src/assets/icons/edit_icon.svg" @click = ${()=>this.editMemory(item?._id)} alt="ICON">
        <img class='delete_card'src="./src/assets/icons/delete_icon.svg" @click = ${()=>this.deleteMemory(item?._id)} alt="ICON">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <div class="card__header-text">
            ${Array(item.tags).map((tag: Tags) => html`
             <div class="card__tag">#${tag}</div> `)}
              <h3 class="card__title">${item.creator}</h3>            
              <span class="card__status">${moment(item.createdAt).fromNow()}</span>
            </div>
          </div>
          <h3 class="card__title__inside">${item.title}</h3>            

          <p class="card__description">${item.message}</p>
        </div>
      </div>      
    </li>
  `)}</ul>
  `
  // ${this.edit?}

  }

  deleteMemory(id:string|undefined){
    if(id){
      
      deletePost(id);
      this._listItems = this._listItems.filter((el:Post)=>el._id!==id)
      localStorage.setItem('posts',JSON.stringify(this._listItems))

    }
    console.log(this._listItems) ;
    console.log('click');
    
    console.log(id);
    
  
  }
  editMemory(id:string|undefined){
    // location.href = `http://localhost:5173/${id}`;

  }
}
