import React from "react";

import { Layout, Seo, FormBrainTesting } from "../components";

function BrainTesting() {
    return (
        <Layout>
            <Seo title="Schedule a brain testing appointment" />
            <section className="section">
                <div className="container">
                    <div class="columns">
                        <div class="column is-6">
                            <h1 className="title is-size-1-desktop">Schedule a Brain Testing Appointment Today!</h1>
                            <FormBrainTesting />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default BrainTesting;
