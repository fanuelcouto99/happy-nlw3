const Database = require('./db');

Database.then(async (db) => {
    // Inserir dados no banco
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-21.2034112",
            "-41.9077974",
            "Lar dos Meninos",
            "Presta assistencia a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
            "229995555888",
            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar!",
            "Horário de visitas Das 8h até as 18h",
            "1"
        );
    `);

    // Consultar dados do banco
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    //Consulta somente um orphanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
    console.log(orphanage);
})