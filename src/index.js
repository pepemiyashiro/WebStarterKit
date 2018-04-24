import './style.css';

const $main = document.querySelector('main');

$main.innerHTML = `
    <h1>Hello Webpack 4 with Postcss/CSSNext</h1>
    <section>
        <article>
            <p class="color-blue">Using a color variable for cssnext!!!</p>
            <p>Also Post CSS is removing the :root reference, it uses the postcss custom reference, to compile as a property in the object. <a href="https://github.com/cbracco/postcss-remove-root">postcss-remove-root</a></p>
        </article>
    </section>
`;
