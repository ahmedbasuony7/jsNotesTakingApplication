const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click",addNote);

function addNote (){
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = ` 
    <div class="tool">
        <i class="fas fa-save">  </i>
        <i class="fas fa-trash"> </i>
    </div> 
    <textarea></textarea>
    `;

    const save = note.querySelector(".fa-save");
    const trash = note.querySelector(".fa-trash");
    const textarea = note.querySelector("textarea");

    save.addEventListener("click",saveNotes);
    textarea.addEventListener("click",saveNotes);
    trash.addEventListener("click",()=> {
        note.remove();
        saveNotes();

    });

    main.appendChild(note);

}

function saveNotes(){
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes,data);

    if(data.length === 0){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}
function loadNotes(){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));

    if(lsNotes !==null ){
        lsNotes.forEach(noteText =>{
            addNote();
            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length -1];
            lastNote.value = noteText;


        });
    }else{
        addNote();
    }
}

loadNotes();