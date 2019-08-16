function totalTicktesMes() {
    var ss = SpreadsheetApp.getActive();
    var sheetConfig = ss.getSheetByName('Config');
    var sheetCollector = ss.getSheetByName('Ticket List');

    var host = sheetConfig.getRange("B1").getValue();
    var database = sheetConfig.getRange("B2").getValue();
    var user = sheetConfig.getRange("B3").getValue();
    var password = sheetConfig.getRange("B4").getValue();
    var port = sheetConfig.getRange("B5").getValue();
    var FechaInicio = sheetCollector.getRange("L4").getValue();
    var FechaFin = sheetCollector.getRange("L5").getValue();
    var Cliente = sheetConfig.getRange("B6").getValue();

    var url = 'jdbc:mysql://' + host + ':' + port + '/' + database;
    var totalTicktesmes = 'SELECT t.tn AS Numero, t.title AS Titulo, t.create_time AS creacion, t.change_time AS cierre, q.name AS Cola, ts.name AS Estado, u.first_name AS Agente, t.until_time AS falso, (SELECT th.change_time FROM ticket_history th INNER JOIN ticket tx ON th.ticket_id = tx.id WHERE 1 = 1 AND tx.tn = t.tn AND th.history_type_id = 8 AND th.id = ( SELECT MIN(th.id) FROM ticket_history th, ticket ti WHERE th.ticket_id = ti.id AND ti.tn = tx.tn AND th.history_type_id = 8 ) ) AS Respuesta FROM queue q INNER JOIN ticket t ON t.queue_id = q.id INNER JOIN users u ON t.user_id = u.id INNER JOIN ticket_state ts ON t.ticket_state_id = ts.id WHERE t.type_id = 1 AND 1 = 1 AND 1 = 1 AND 1 = 1 AND q.name LIKE "Event Management::%" AND date_format(t.create_time, "%Y-%m-%d") BETWEEN concat(date_format(LAST_DAY(now() - INTERVAL 1 month), "%Y-%m-"), "01 00:00:00") AND concat(date_format(LAST_DAY(now() - INTERVAL 1 month), "%Y-%m-%d"), "23:59:59") ORDER BY t.create_time';
    try {
        var connection = Jdbc.getConnection(url, user, password);

        var result = connection.createStatement().executeQuery(totalTicktesmes);
        var metaData = result.getMetaData();
        var columns = metaData.getColumnCount();

        var values = [];
        var value = [];
        var element = '';

        for (i = 1; i <= columns; i++) {
            element = metaData.getColumnLabel(i);
            value.push(element);
        }
        values.push(value);

        while (result.next()) {
            value = [];
            for (i = 1; i <= columns; i++) {
                element = result.getString(i);
                value.push(element);
            }
            values.push(value);
        }

        //Cierra conexion
        result.close();

        //Escribe datos en las celdas
        sheetCollector.getRange('A1:J17000').clearContent();
        sheetCollector.getRange(1, 1, values.length, value.length).setValues(values);
        SpreadsheetApp.getActive().toast('Datos actualizado correctamente!');
    } catch (err) {
        SpreadsheetApp.getActive().toast(err.message);
    }
}
