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
                <p>778-584-1974</p>
                <p>2026 Deerbrush Crescent, North Saanich, BC, V8L 0V5, Canada</p>
                <ul>
                    <li><a href="https://www.facebook.com/676Kittyhawk/" target="_blank" title="Visit our Facebook page!">
                            <img src="./images/facebook.png" alt="facebook" height=20></a></li>
                    <li><a href="https://www.instagram.com/676kittyhawk/" target="_blank"><img src="./images/instagram.png"
                                alt="Instagram" height="20" title="Visit our Instagram page!"></a></li>
                    <li><a href="https://maps.google.com/?cid=1560955647004789210" target="_blank"><img
                                src="./images/google_pin.png" alt="map location" height="20"
                                title="Locate our hall on a map!"></a></li>
            </footer>
                      `;
  }
}

customElements.define("footer-component", Footer);
