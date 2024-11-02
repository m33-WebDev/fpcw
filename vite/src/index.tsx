import { useState } from "react";
import { Layout } from "./components/layout";

export default function Index() {
    const [count, setCount] = useState(1);

    return (
        <>
            <Layout>
                <h1>Home page</h1>
                <button onClick={() => setCount((prev) => prev * 2)}>Click me (to double)</button>
                <p>Count: {count}</p>
            </Layout>
        </>
    );
}
