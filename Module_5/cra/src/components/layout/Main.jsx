import React from "react";
import Input from './../Props/Input';
import Button from './../Props/Button';

function Main() {
    const handleSubmit = () => {
        alert('Hello')
    }
    return (
        <>
            <div className="container">
                <h1 className="mt-5">Sticky footer with fixed navbar</h1>
                <p className="lead">
                    Pin a footer to the bottom of the viewport in desktop browsers with this
                    custom HTML and CSS. A fixed navbar has been added with{" "}
                    <code className="small">padding-top: 60px;</code> on the{" "}
                    <code className="small">main &gt; .container</code>.
                </p>
                <p>
                    Back to{" "}
                    <a href="/docs/5.0/examples/sticky-footer/">the default sticky footer</a>{" "}
                    minus the navbar.
                </p>
            </div>
            <div>
                <Input type={"email"} name={'email'} placeholder="Enter your email" />
                <Button href='https://google.com'>Go to my Site</Button>
                <Button handleClick={handleSubmit}>Submit</Button>
            </div>
        </>

    )
}

export default Main;
