class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
            header {
                position: fixed;
                display: flex;
                justify-content: space-evenly;
                font-size: medium;
                margin: auto;
                width: 100%;
                padding-left: 5px;
                padding-right: 5px;
                background-color: white;
                box-shadow: 5px 5px 10px 2px grey;
            }
            
            .masthead {
                color: rgb(12, 1, 1);
                text-align: center;
                padding: 10px;
                width: 50%;
                display: flex;
                justify-content: space-evenly;
            }
            
            .title_words {
                font-weight: bold;
                margin-left: 10px;
                padding: 0;
            }
            
            .title_words h1 {
                border-bottom: 2px solid black;
                margin-bottom: -20px;
                letter-spacing: .2em;
            }
            
            /* Add a black background color to the top navigation */
            .topnav {
                background-color: #333;
                overflow: hidden;
                height: 50%;
                margin-top: 50px;
                box-shadow: 5px 5px 10px 2px rgba(0,0,0,.8);
          }
            
            /* Style the links inside the navigation bar */
            .topnav a {
                float: left;
                display: block;
                color: #f2f2f2;
                text-align: center;
                padding: 10px 10px;
                text-decoration: none;
                font-size: 17px;
            }
            
            /* Change the color of links on hover */
            .topnav a:hover {
                background-color: #ddd;
                color: black;
                box-shadow: inset 5px 5px 5px rgba(0,0,0,.8);
            }
            
            /* Add an active class to highlight the current page */
            .active {
                background-color: white;
                color: black;
                border: 1px solid black;
            }
            
            /* Hide the link that should open and close the topnav on small screens */
            .topnav .icon {
                display: none;
            }
            
            /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
            @media screen and (max-width: 830px) {
                .topnav a:not(:first-child) {
                    display: none;
                }
            
                .topnav a.icon {
                    float: right;
                    display: block;
                }
            
                .topnav {
                    margin-top: 0;
                    margin-bottom: 20px;
                }
            
                header {
                    display: flex;
                    flex-direction: column;
                }
            }
            
            /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
            @media screen and (max-width: 830px) {
                .topnav.responsive {
                    position: relative;
                }
            
                .topnav.responsive a.icon {
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            
                .topnav.responsive a {
                    float: none;
                    display: block;
                    text-align: left;
                }
            }
            </style>
            <header>
            <div class="masthead">
                <div class="title_words">
                    <h1>Robert L. C. Baker</h1>
                    <h2>26 December 1933 to 1 July 2024</h2>
                </div>
            </div>
            <div class="topnav" id="topnavid">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="login.html">Login</a>
                <a href="contact.html">Contact</a>
                <a href="javascript:void(0);" class="icon" onclick="menu()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </header>
        `;
  }
}

customElements.define("header-component", Header);
