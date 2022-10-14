
import { LitElement, html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';


@customElement('memories-list')
export class MemoriesList extends LitElement {
  static styles = css`
  .main{
    display:flex;
    flex-direction:column;
    justify-content:space-around;

    margin:20px 120px;
  }
  .header-container{
    align-items:center;
    text-align:center;

  }
  .wrapper{
    display:flex;
    justify-content:space-between;
  }

  .title{
    margin:0;
  }
      
  `;

  @state()
  @property()


  render() {
    const memoriesForm = html`<memory-form  header="Create memory"></memory-form>`
    // TODO: Define partial templates.
    return html`
    <div class='main'>
    <memory-header></memory-header>
    <div class='wrapper'>
       <memory-card></memory-card>
       <div>
          ${memoriesForm}
       </div>

    </div>
 </div>
    `;
  }


}

