
// require('./style.css');

const $main = document.querySelector('main');

$main.innerHTML = `
    <p>Hello Webpack 4 with <i>ZERO CONFIGIGURATION</i</p>

    <section>
        <article>
            <h2>ZERO CONFIG</h2>
            <p>Requirements:</p>
            <ul>
                <li>node 4+</li>
                <li>yarn recommend for clearer npm script composition</li>
                <li>webpack 4 and webpack cli</li>
            </ul>
            <p>Steps:</p>
            <ul>
                <li>Install Webpack: <code>$ yarn add -D webpack webpack-cli</code></li>
                <li>Create a src folder, with and index.js</li>
                <li>Write <code>window.alert("Hello Webpack 4")</code></li>
                <li>Create a dist folder, with and index.html</li>
                <li>In the index.html put the proper html markup, on vscode use emmet syntax: <code>!, then tab</code>. Then add the the script tag to import the compiled JS which will be <b>main.js</b></li>
                <li>Create a package.json file <code>yarn init</code>, hit enter until finish.</li>
                <li>In the script section in the package.json add: "build": "webpack" </li>
                <li>Then in the terminal window run: <code>yarn build</code></li>
                <li>Open you HTML inside dist in the browser</li>
                <li>😏</li>
            </ul>
        </article>
    </section>
`;
