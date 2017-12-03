import React from 'react';
import './header.scss';

function Header() {
  return (
    <main className="website">
      <header className="header">
        <div className="header__head">
          <figure>
            {/* <img /> */}
            <figcaption>Logo</figcaption>
          </figure>
          <h2>Today is {new Date().toLocaleDateString()}</h2>
        </div>
        <div className="title">
          <h1>“News”</h1>
        </div>
      </header>
      <div className="search">
        <div className="sLists">List of articles:</div>
        <label htmlFor="stext">
          Search and filter by text:
          <input
            type="text"
            className="stext"
            name="query"
            placeholder="Search..."
            // value={this.state.search}
            // onChange={this.updateSearch}
          />
        </label>
      </div>

      <section>
        <article className="articles">
          {/* <h2><button className="articles_button"> heading button </button></h2> */}
          <h3><a className="articles_a" href="asd">heading </a></h3>
          <span className="articles__text">
            Solutions
            Depending on which version of React you are running, you do have
            a few options to address this:
            Return an array (React v16+ only!)
            As of React v16, React Components can return arrays. This is
            unlike earlier versions of React where you were forced to wrap
            all sibling components in a parent component.
          </span>

          <div className="asides">
            <ul className="asides__ul">
              <li className="images">images</li>
              <li className="likes" />
            </ul>
            {/* <img src="" alt="images" /> */}

            {/* <button>
              like
            </button> */}
          </div>
        </article>
      </section>

      <footer className="footer">
        Some copyright
        <address> Contact information:
          <a href="mailto:someone@example.com">someone@example.com</a>
        </address>
      </footer>
    </main>
  );
}

export default Header;
