
import { LitElement, html, css } from 'lit';
import { customElement, state, property, query } from 'lit/decorators.js';



@customElement('memory-header')
export class MemoryHeader extends LitElement {
  static styles = css`
   .header {
    margin-top: 0px;
    margin-bottom: 10px;
    font-family: sans-serif;
    font-size: 6rem;
    background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width:fit-content;
  }
    .header-container{
        display:flex;
        justify-content:center;
    }
  `;

  @state()

  @property()
  name: string | undefined;


  render() {

    return html `
    <div class='header-container'>

    <h1 class='header'>Memories</h1>
    </div>

  `;
  }

}
