class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
              footer {
                text-align: center;
                width: 90%;
                margin: auto;
            }
            
            footer ul {
                list-style-type: none;
                display: flex;
                justify-content: center;
                padding: 0;
            }
            
            footer ul li {
                display: inline;
                margin: 10px;
                padding: 5px;
                border-radius: 5px;
                box-shadow: 5px 5px 10px 2px rgba(0,0,0,.8);
            }
            
            footer ul li:hover {
                box-shadow: inset 2px 2px 2px rgba(0,0,0,.8);
            }
            </style>
            <footer>
                <h3>Robert L. C. Baker, 1933-2024</h3>
                <p>2026 Deerbrush Crescent, North Saanich, BC, V8L 0V5, Canada</p>
            </footer>
                      `;
  }
}

customElements.define("footer-component", Footer);
