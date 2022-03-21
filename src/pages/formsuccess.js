import React from "react";
import { Link } from "gatsby";

import { Layout, Seo } from "../components";

function FormSuccess() {
    return (
        <Layout>
            <Seo title="FPCW - Success" noIndex />
            <section className="section">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            Thanks for your submission!
                            <br />
                            We'll be in touch.
                            <br />
                            Return to <Link to="/">Home</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default FormSuccess;
