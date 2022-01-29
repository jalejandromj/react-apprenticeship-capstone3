import { useEffect } from 'react';

import { getDatabase, ref, child, get, set, update } from "firebase/database";

function useFirebase() {
    const uid = sessionStorage.getItem('uid');
    const database = getDatabase();
    const dbRef = ref(database);

    async function getFirebaseNotes() {
        let notes = null;
        await get(child(dbRef, `users/${uid}`))
        .then((snapshot) => {
             if (snapshot.exists()) {
                console.log('[SUCCESS] Getting notes');
                 notes = snapshot.val().notes;
             } else {
                 console.log("No data available");
             }
         }).catch((error) => {
             console.error(error);
         });
        return(notes);
    }

    async function insertFirebaseNotes(target, notes) {
        if(!notes) //If it is null, the first note to be created
            notes = [];
        const newNote = {title: target.title.value, note: target.note.value, color: target.color.value, archived: false};
        notes.push(newNote);

        set(ref(database, 'users/' + uid), {
        notes: notes,
        })
        .then(() => {
            console.log("[SUCESS] Inserting note...")
        }).catch((error) => {
            console.error(error);
        });
    }

    async function updateFirebaseNotes(index, note, isArchived) {
        const noteData = {
            title: note.title,
            note: note.note,
            color: note.color,
            archived: isArchived,
        };
        const updates = {};
        updates['/users/' + uid + '/notes/' + index] = noteData;

        update(ref(database), updates)
        .then(() => {
            console.log("[SUCESS] Updating note...")
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        
    }, []);

    return { getFirebaseNotes, insertFirebaseNotes, updateFirebaseNotes }
}

export default useFirebase;
