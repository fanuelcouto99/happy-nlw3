const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // Inserir dados no banco
    await saveOrphanage(db, {
        lat: "-21.2034112",
        lng: "-41.8977974",
        name: "Pe. Geraldo",
        about: "Presta assistencia a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "22999999999",
        images: [
            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1602622931974-78228760b7b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1580673787750-2c5ef81571dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1572247324584-a841c32b95ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1600711724779-c039d7410ceb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar!",
        opening_hours: "Horário de visitas Das 8h até as 18h",
        open_on_weekends: "0"
    });

    // Consultar dados do banco
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    //Consulta somente um orphanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
    console.log(orphanage);

    //Deletar dado da tabela
    await db.run("DELETE FROM orphanages WHERE id = '4'");
})