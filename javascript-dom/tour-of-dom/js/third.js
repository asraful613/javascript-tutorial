const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>My dynamic section</h1>
    <p>added a inside paragraph</p>
    <ul>
        <li>first item</li>
        <li>Second item</li>
        <li>third item</li>
    </ul>
`;
main.appendChild(section);
