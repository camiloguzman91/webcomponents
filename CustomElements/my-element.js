const template = document.createElement("div");
template.innerHTML = `
  <style>
    .texto {
      color: red;
    }
    p {
      color: blue;
    }
  </style>
  <p class="texto">Hi world 2!</p>
  <p>Example</p>
`;

class myElement extends HTMLElement {
  constructor() {
    super();
    
    this.p = document.createElement("p");
  }
  connectedCallback() {
    this.p.textContent = "Hi world!";
    this.appendChild(this.p);
    this.appendChild(template);
  }
}

customElements.define("my-element", myElement);