function mapaCalorHoras() {
    var ss = SpreadsheetApp.getActive();
    var sheetConfig = ss.getSheetByName('Config');
    var sheetCollector = ss.getSheetByName('Data');
    var sheetGeneral = ss.getSheetByName('General');
    var sheetRoot = ss.getSheetByName('Root Analysis');


    var host = sheetConfig.getRange("B1").getValue();
    var database = sheetConfig.getRange("B2").getValue();
    var user = sheetConfig.getRange("B3").getValue();
    var password = sheetConfig.getRange("B4").getValue();
    var port = sheetConfig.getRange("B5").getValue();
    var FechaInicio = sheetConfig.getRange("B7").getValue();
    var FechaFin = sheetConfig.getRange("B8").getValue();
    var Cliente = sheetConfig.getRange("B6").getValue();

    var url = 'jdbc:mysql://' + host + ':' + port + '/' + database;
    var EnventosPorHoraCRED = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::CRED%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraCREDEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::CRED%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraCREDAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::CRED%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraDOLE = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::DOLE%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraDOLEEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::DOLE%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraDOLEAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::DOLE%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraGBNK = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::GBNK%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraGBNKEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::GBNK%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraGBNKAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::GBNK%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraICEX = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::ICE%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraICEXEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::ICE%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraICEXAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::ICE%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraSOIN = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::SOIN%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraSOINEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::SOIN%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraSOINAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::SOIN%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraBACG = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::BACG%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraBACGEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::BACG%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraBACGAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::BACG%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraFCRC = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::FCRC%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraFCRCEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::FCRC%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraFCRCAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::FCRC%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraDAVP = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::DAVP%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraDAVPEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::DAVP%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraDAVPAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::DAVP%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraESPH = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::ESPH%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraESPHEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::ESPH%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraESPHAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::ESPH%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraGRID = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::GRID%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraGRIDEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::GRID%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraGRIDAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::GRID%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraSERV = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::SERV%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraSERVEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::SERV%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraSERVAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::SERV%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraCNFL = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::CNFL%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraCNFLEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::CNFL%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraCNFLAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::CNFL%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraUTNX = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND queue.name LIKE "Event Management::UTNX%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraUTNXEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND queue.name LIKE "Event Management::UTNX%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraUTNXAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id in  (80, 84, 82, 85, 76, 83, 77, 78) AND queue.name LIKE "Event Management::UTNX%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    //var EnventosPorHoraRoot = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id = 1 AND queue.name LIKE "Event Management::'+Cliente2+'%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "'+FechaInicio+'" AND "'+FechaFin+'" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    var EnventosPorHoraFernandoEscalados = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id = 11 AND ticket.user_id = 83 AND queue.name LIKE "Event Management::%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';
    var EnventosPorHoraFernandoAtendidos = 'SELECT DAYNAME(ticket.create_time) AS "Day of Week", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "00:00:00" AND "00:59:59" THEN 1 ELSE 0 END ) AS "12 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "01:00:00" AND "01:59:59" THEN 1 ELSE 0 END ) AS "1 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "02:00:00" AND "02:59:59" THEN 1 ELSE 0 END ) AS "2 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "03:00:00" AND "03:59:59" THEN 1 ELSE 0 END ) AS "3 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "04:00:00" AND "04:59:59" THEN 1 ELSE 0 END ) AS "4 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "05:00:00" AND "05:59:59" THEN 1 ELSE 0 END ) AS "5 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "06:00:00" AND "06:59:59" THEN 1 ELSE 0 END ) AS "6 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "07:00:00" AND "07:59:59" THEN 1 ELSE 0 END ) AS "7 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "08:00:00" AND "08:59:59" THEN 1 ELSE 0 END ) AS "8 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "09:00:00" AND "09:59:59" THEN 1 ELSE 0 END ) AS "9 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "10:00:00" AND "10:59:59" THEN 1 ELSE 0 END ) AS "10 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "11:00:00" AND "11:59:59" THEN 1 ELSE 0 END ) AS "11 AM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "12:00:00" AND "12:59:59" THEN 1 ELSE 0 END ) AS "12 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "13:00:00" AND "13:59:59" THEN 1 ELSE 0 END ) AS "1 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "14:00:00" AND "14:59:59" THEN 1 ELSE 0 END ) AS "2 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "15:00:00" AND "15:59:59" THEN 1 ELSE 0 END ) AS "3 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "16:00:00" AND "16:59:59" THEN 1 ELSE 0 END ) AS "4 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "17:00:00" AND "17:59:59" THEN 1 ELSE 0 END ) AS "5 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "18:00:00" AND "18:59:59" THEN 1 ELSE 0 END ) AS "6 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "19:00:00" AND "19:59:59" THEN 1 ELSE 0 END ) AS "7 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "20:00:00" AND "20:59:59" THEN 1 ELSE 0 END ) AS "8 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "21:00:00" AND "21:59:59" THEN 1 ELSE 0 END ) AS "9 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "22:00:00" AND "22:59:59" THEN 1 ELSE 0 END ) AS "10 PM", SUM(CASE WHEN date_format(ticket.create_time, "%H:%i:%s") BETWEEN "23:00:00" AND "23:59:59" THEN 1 ELSE 0 END ) AS "11 PM", COUNT(*) AS Total FROM queue, ticket WHERE ticket.queue_id = queue.id AND ticket.ticket_state_id in (11, 12, 2, 9) AND ticket.user_id = 83 AND queue.name LIKE "Event Management::%" AND date_format(ticket.create_time, "%Y-%m-%d") BETWEEN "' + FechaInicio + '" AND "' + FechaFin + '" GROUP BY dayofweek(ticket.create_time) ORDER BY dayofweek(ticket.create_time)';

    try {
        var connection = Jdbc.getConnection(url, user, password);

        var result = connection.createStatement().executeQuery(EnventosPorHoraCRED);
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

        sheetCollector.getRange('A2:Z9').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(2, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraCREDEscalados);
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

        sheetCollector.getRange('A11:Z18').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(11, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraCREDAtendidos);
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

        sheetCollector.getRange('A236:Z243').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(236, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraDOLE);
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

        sheetCollector.getRange('A20:Z27').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(20, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraDOLEEscalados);
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

        sheetCollector.getRange('A29:Z36').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(29, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraDOLEAtendidos);
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

        sheetCollector.getRange('A245:Z252').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(245, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraGBNK);
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

        sheetCollector.getRange('A38:Z45').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(38, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraGBNKEscalados);
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

        sheetCollector.getRange('A47:Z54').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(47, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraGBNKAtendidos);
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

        sheetCollector.getRange('A254:Z261').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(254, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraICEX);
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

        sheetCollector.getRange('A56:Z63').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(56, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraICEXEscalados);
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

        sheetCollector.getRange('A65:Z72').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(65, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraICEXAtendidos);
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

        sheetCollector.getRange('A263:Z270').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(263, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraSOIN);
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

        sheetCollector.getRange('A74:Z81').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(74, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraSOINEscalados);
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

        sheetCollector.getRange('A83:Z90').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(83, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraSOINAtendidos);
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

        sheetCollector.getRange('A272:Z279').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(272, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraBACG);
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

        sheetCollector.getRange('A92:Z99').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(92, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraBACGEscalados);
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

        sheetCollector.getRange('A101:Z108').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(101, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraBACGAtendidos);
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

        sheetCollector.getRange('A281:Z288').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(281, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraFCRC);
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

        sheetCollector.getRange('A110:Z117').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(110, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraFCRCEscalados);
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

        sheetCollector.getRange('A119:Z126').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(119, 1, values.length, value.length).setValues(values);


        var result = connection.createStatement().executeQuery(EnventosPorHoraFCRCAtendidos);
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

        sheetCollector.getRange('A290:Z297').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(290, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraDAVP);
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

        sheetCollector.getRange('A128:Z135').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(128, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraDAVPEscalados);
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

        sheetCollector.getRange('A137:Z144').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(137, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraDAVPAtendidos);
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

        sheetCollector.getRange('A299:Z306').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(299, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraESPH);
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

        sheetCollector.getRange('A146:Z153').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(146, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraESPHEscalados);
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

        sheetCollector.getRange('A155:Z162').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(155, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraESPHAtendidos);
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

        sheetCollector.getRange('A308:Z315').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(308, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraGRID);
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

        sheetCollector.getRange('A164:Z171').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(164, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraGRIDEscalados);
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

        sheetCollector.getRange('A173:Z180').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(173, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraGRIDAtendidos);
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

        sheetCollector.getRange('A317:Z324').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(317, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraSERV);
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

        sheetCollector.getRange('A182:Z189').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(182, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraSERVEscalados);
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

        sheetCollector.getRange('A191:Z198').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(191, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraSERVAtendidos);
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

        sheetCollector.getRange('A326:Z333').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(326, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraCNFL);
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

        sheetCollector.getRange('A200:Z207').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(200, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraCNFLEscalados);
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

        sheetCollector.getRange('A209:Z216').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(209, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraCNFLAtendidos);
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

        sheetCollector.getRange('A335:Z342').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(335, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraUTNX);
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

        sheetCollector.getRange('A218:Z225').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(218, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraUTNXEscalados);
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

        sheetCollector.getRange('A227:Z234').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(227, 1, values.length, value.length).setValues(values);


        var result = connection.createStatement().executeQuery(EnventosPorHoraUTNXAtendidos);
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

        sheetCollector.getRange('A344:Z351').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(344, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraRoot);
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

        sheetCollector.getRange('A354:Z361').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(354, 1, values.length, value.length).setValues(values);

        var result = connection.createStatement().executeQuery(EnventosPorHoraFernandoAtendidos);
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

        sheetCollector.getRange('A364:Z371').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(364, 1, values.length, value.length).setValues(values);

        SpreadsheetApp.getActive().toast('Datos actualizado correctamente!');

        var result = connection.createStatement().executeQuery(EnventosPorHoraFernandoEscalados);
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

        sheetCollector.getRange('A374:Z381').clearContent();
        //Escribe datos en las celdas
        sheetCollector.getRange(374, 1, values.length, value.length).setValues(values);

        SpreadsheetApp.getActive().toast('Datos actualizado correctamente!');

    } catch (err) {
        SpreadsheetApp.getActive().toast(err.message);
    }
}
