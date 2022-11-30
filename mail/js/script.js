const mail_archive = ["Roberto21", "Fabio55", "Andrea24"]

const mail = prompt("Inserisci la tua mail")

let found = false;
for (let i = 0; i < mail_archive.length; i++){
    const mail_archive_name = mail_archive[i];
    
    if(mail_archive_name === mail){
        found = true;
    }
}
if(found){
    console.log("puoi accedere");
}
else{
    console.log("Utente sconosciuto: non puoi accedere");
}