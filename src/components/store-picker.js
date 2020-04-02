import React, {Component, Fragment} from 'react';

export default class StorePicker extends Component {
  render() {
    return (
      <Fragment>
        <p>I am the StorePicker!!!</p>
        <form className="store-selector">
          {/* do comments like this; must be inside parent tag or treated as returning additional element which is not allowed */ }
          <h2>Please Enter a Store:</h2>
          <input type="text" required placeholder="Store Name"/>
          <button type="submit">Visit Store ➡️</button>
        </form>
      </Fragment>
    );
  }
}

/* 
 gotchas
 - put html inside of ()
 - don't put () right next to return since return is not a function
 - in JSX you can only return one element
 --- if you have more than one element then they must be wrapped in parent tag; if you use a 'dummy' div then the div renders; it works but makes html messy and can interfere with CSS Flexbox and Grid
 --- since React 16.2 you can now wrap elements in a React.Fragment tag which encloses the return so you can return as many elements as you want but does not itself render in DOM
- must use className instead of class when writing HMTL inside JS file because class is a JS keyword
- HTML comments look different in JS file
--- use {} - this tells JS that what is inside is pure JS
*/

