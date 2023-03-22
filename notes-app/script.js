const addBtn = document.querySelector(".add");

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach(note => {
        addNewNote(note);
    })
}

addBtn.addEventListener('click', () => {
    console.log("hello");
    addNewNote("");
});

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<div class="notes">
                            <div class="tools" >
                                <button class="edit"><i class="fas fa-edit">i</i></button>
                                <button class="delete"><i class="fas fa-trash-alt">D</i></button>
                            </div >
                            <div class="main hidden"> hafjasl </div>
                            <textarea></textarea>
                        </div >
    `;


    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textarea = note.querySelector("textarea");

    editBtn.addEventListener('click', () => {
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    });

    deleteBtn.addEventListener('click', () => {
        note.remove();
    });

    textarea.addEventListener('input', (e) => {
        updateLS();
        const value = e;
        main.innerHTML = e;
    });

    textarea.value = text;
    main.innerHTML = text;

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notes.forEach(note => {
        notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}
