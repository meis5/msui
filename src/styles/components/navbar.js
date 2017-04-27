import { colorsFont, breakpoints, colorPlates } from '../variables'
import * as colors from '../variables/colors'

export default `



.ctn {position: relative}
.navbar {
  color: ${colorsFont.primaryTextReverse};
  background-color: ${colorPlates.reverse};
  height: 45px;
}

.navbar a {
  color: ${colorsFont.primaryTextReverse};
}

.navbar-nav {
  position: absolute;
  background-color: ${colorPlates.reverse};
  top: 45px;
}

.navbar-left {
  left: 0;
}

.navbar-right {
  right: 0;
  position: absolute;
  background-color: ${colorPlates.reverse};
  top: 45px;
}

.navbar {
}

.navbar-toggle {
  display: block;
}

.navbar-toggle-left {
  position: absolute;
  left: 10px;
}

.navbar-toggle-right {
  position: absolute;
  right: 10px;
}


@media (min-width: ${breakpoints.sm}px) {
  .navbar {
    height: auto;
    background-color: ${colorPlates.default};
  }
  
  .navbar-toggle {
    display: none;
  }
  
  .navbar-ctn {
    display: flex;
    justify-content: space-between;
  }
  
  .navbar-nav {
    top: initial;
    display: flex;
    background-color: ${colorPlates.default};
    position: relative;
  }
  
  .navbar {
    border-bottom: 1px solid #e5e5e5;
  }
  
  .navbar-sub {
    position: relative;
  }
  
  .navbar-sub-nav {
    display: none;
    position: absolute;
    top: 30px;
    background-color: #ddd;
    left: 100%;
  }
  
  .navbar-sub:hover > .navbar-sub-nav {
    display: block;
    z-index: 9999;
  }
  
  .navbar a, .navbar img {
    display: block;
  }
  
  .navbar img {
    margin-right:2px;
  }
  
  .navbar a:hover {
    text-decoration: none;
  }
  
  .brand.fl {
    display: flex;
  }
  
  .brand {
    font-size: 12px !important;
    line-height: 1;
  }
  
  .brand img, .brand canvas {
    max-height: 30px;
  }
  
  .navbar a {
    font-size: 14px;
    color: #666;
    padding: 5px 10px;
  }
  
  a.brand {
    color: #888;
  }
  
  .navbar a:hover {
    color: ${colorsFont.link};
  }
}


`
