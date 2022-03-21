import React from "react";
import { Link } from "gatsby";

import { Layout, Seo } from "../components";

function Page404() {
    return (
        <Layout>
            <Seo title="Page Not Found" noIndex />
            <div className="section">
                <div className="content has-text-centered">
                    <p>
                        It looks like something went wrong :(
                        <br />
                        Return to <Link to="/">Home</Link>.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Page404;
