const getTypeIcon = (type) => {
    switch (type) {
        case 'client': return '<i class="bx bx-desktop" title="Client"></i>';
        case 'server': return '<i class="bx bx-server" title="Server"></i>';
        case 'shared': return '<i class="bx bx-transfer" title="Shared"></i>';
        default: return '';
    }
};

const grouped = {};
docs.forEach(doc => {
    let parts = doc.modul.split('›').map(s => s.trim());
    const baseCategory = parts[0];
    doc.subcat = parts[1] || "";
    if (!grouped[baseCategory]) grouped[baseCategory] = [];
    grouped[baseCategory].push(doc);
});

const navList = document.getElementById('nav-list');
const content = document.getElementById('content');

function renderWelcome() {
    content.innerHTML = "";
    const welcome = document.createElement('div');
    welcome.innerHTML = `<h1>Willkommen in der Dokumentation</h1>
                         <p>Bitte wähle ein Modul in der Navigation oder benutze die Suche.</p>`;
    content.appendChild(welcome);
}

function renderCategoryContent(cat, docsList, groupId) {
    content.innerHTML = "";

    const header = document.createElement('h2');
    header.textContent = cat;
    content.appendChild(header);

    docsList = docsList.filter(doc => !doc.modul.includes('chat › commands'));

    const groupedSub = {};
    const noSubcat = [];

    docsList.forEach(doc => {
        if (doc.subcat) {
            if (!groupedSub[doc.subcat]) groupedSub[doc.subcat] = [];
            groupedSub[doc.subcat].push(doc);
        } else noSubcat.push(doc);
    });

    function createFunctionBlock(doc, id) {
        const block = document.createElement('div');
        block.className = "function-block";

        const name = document.createElement('h3');
        name.id = id;
        name.innerHTML = `${getTypeIcon(doc.type)} Funktion: ${doc.name} (${doc.params})`;

        const code = document.createElement('pre');
        code.textContent = `-- ${doc.type || 'undefined'} function
function ${doc.name}(${doc.params})`;

        const desc = document.createElement('p');
        desc.innerHTML = `<strong>Beschreibung:</strong> ${doc.beschreibung || "_Noch keine Beschreibung vorhanden_"}`;

        block.appendChild(name);
        block.appendChild(code);
        block.appendChild(desc);
        return block;
    }

    const byType = {
        client: docsList.filter(d => d.type === "client"),
        shared: docsList.filter(d => d.type === "shared"),
        server: docsList.filter(d => d.type === "server")
    };

    const order = ["client", "shared", "server"];

    order.forEach(type => {
        if (byType[type].length > 0) {
            byType[type].forEach(doc => {
                const id = `${groupId}-${doc.name}`;
                content.appendChild(createFunctionBlock(doc, id));
            });
        }
    });

    Object.keys(groupedSub).forEach(sub => {
        const subHeader = document.createElement('h3');
        subHeader.textContent = sub;
        content.appendChild(subHeader);

        groupedSub[sub].forEach(doc => {
            const id = `${groupId}-${sub}-${doc.name}`;
            content.appendChild(createFunctionBlock(doc, id));
        });
    });
}

const functionsNavItem = document.createElement('li');
const functionsLink = document.createElement('span');
functionsLink.style.cursor = "pointer";
functionsLink.style.fontWeight = "bold";
functionsLink.innerHTML = '<i class="bx bx-code-alt"></i> Core';

const functionsList = document.createElement('div');
functionsList.className = 'toggle-content';
functionsList.style.display = 'none';

Object.keys(grouped).forEach(category => {
    if (category === 'Core') {
        const subcats = {};
        grouped[category].forEach(doc => {
            if (doc.subcat) {
                if (!subcats[doc.subcat]) subcats[doc.subcat] = [];
                subcats[doc.subcat].push(doc);
            }
        });

        Object.keys(subcats).forEach(sub => {
            const subSpan = document.createElement('span');
            subSpan.className = 'subtoggle';
            subSpan.textContent = sub;
            subSpan.onclick = e => {
                e.stopPropagation();
                const id = `Core-${sub}`.replace(/\s/g, "-");
                renderCategoryContent(`Core › ${sub}`, subcats[sub], id);
            };
            functionsList.appendChild(subSpan);
        });
    }
});

functionsLink.onclick = () => {
    functionsList.style.display = functionsList.style.display === 'none' ? 'block' : 'none';
};

functionsNavItem.appendChild(functionsLink);
functionsNavItem.appendChild(functionsList);
navList.appendChild(functionsNavItem);

renderWelcome();

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
    const text = this.value.trim().toLowerCase();
    if (!text) return renderWelcome();

    content.innerHTML = "<h2>Suchergebnisse</h2>";

    const results = docs.filter(d =>
        d.name.toLowerCase().includes(text) ||
        d.beschreibung?.toLowerCase().includes(text)
    );

    if (results.length === 0) {
        content.innerHTML += `<p>Keine Ergebnisse gefunden.</p>`;
        return;
    }

    results.forEach(doc => {
        const block = document.createElement('div');
        block.className = "function-block";

        const name = document.createElement('h3');
        name.innerHTML = `${getTypeIcon(doc.type)} ${doc.name}`;

        const code = document.createElement('pre');
        code.textContent = `function ${doc.name}(${doc.params})`;

        const desc = document.createElement('p');
        desc.innerHTML = `<strong>Beschreibung:</strong> ${doc.beschreibung}`;

        block.appendChild(name);
        block.appendChild(code);
        block.appendChild(desc);
        content.appendChild(block);
    });
});
