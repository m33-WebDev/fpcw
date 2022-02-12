import React from "react";

const action =
  "https://cuttingedgepsychiatry.us19.list-manage.com/subscribe/post?u=facdc7abe706e043dbfd4ead6&amp;id=2b9b2f9f34";

export default function NewsletterSignup() {
  return (
    <>
      <h5>Connect with us</h5>
      <p>
        Want to learn more? Sign up for our newsletter and stay up to date with
        the latest developments in mental health management.
      </p>
      <form action={action} method="post" target="_blank">
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="email"
              id="email"
              name="EMAIL"
              placeholder="Email address"
              required
            />
          </div>
        </div>
        <div aria-hidden="true">
          <input
            style={{ display: "none" }}
            type="text"
            name="b_facdc7abe706e043dbfd4ead6_2b9b2f9f34"
            tabindex="-1"
            value=""
          />
        </div>
        <button
          type="submit"
          className="button is-success is-outlined is-fullwidth"
        >
          Subscribe
        </button>
      </form>
    </>
  );
}
