import React from 'react';
import './header.css';

function Header() {
  return (
    <main className="website">
      <header className="header">
        <h2>Today is {new Date().toLocaleDateString()}.</h2>
        <figure>
          {/* <img /> */}
          <figcaption>Logo</figcaption>
        </figure>
        <h1>“News App”</h1>
      </header>
      <div className="search">
        {/* <label for="stext">
          search and filter by text
        </label> */}

        <input
          type="text"
          className="stext"
          name="query"
          placeholder="enter text"
          // value={this.state.search}
          // onChange={this.updateSearch}
        />
      </div>

      <section>
        <article className="articles">
          <h2><button> heading button</button></h2>
          <span className="articles__text">
            Solutions
            Depending on which version of React you are running, you do have
            a few options to address this:
            Return an array (React v16+ only!)
            As of React v16, React Components can return arrays. This is
            unlike earlier versions of React where you were forced to wrap
            all sibling components in a parent component.
          </span>
          <div className="like">
            <img src="" alt="images" />
            <button>
              like
            </button>
          </div>
        </article>
      </section>

      <footer>
        Some copyright
        <address>email</address>
      </footer>
    </main>
  );
}

export default Header;
