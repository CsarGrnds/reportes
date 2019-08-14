-- Eventos por hora
    DAYNAME(ticket.create_time) AS 'Day of Week',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '00:00:00' AND '00:59:59' THEN 1
        ELSE 0
    END) AS '12 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '01:00:00' AND '01:59:59' THEN 1
        ELSE 0
    END) AS '1 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '02:00:00' AND '02:59:59' THEN 1
        ELSE 0
    END) AS '2 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '03:00:00' AND '03:59:59' THEN 1
        ELSE 0
    END) AS '3 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '04:00:00' AND '04:59:59' THEN 1
        ELSE 0
    END) AS '4 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '05:00:00' AND '05:59:59' THEN 1
        ELSE 0
    END) AS '5 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '06:00:00' AND '06:59:59' THEN 1
        ELSE 0
    END) AS '6 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '07:00:00' AND '07:59:59' THEN 1
        ELSE 0
    END) AS '7 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '08:00:00' AND '08:59:59' THEN 1
        ELSE 0
    END) AS '8 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '09:00:00' AND '09:59:59' THEN 1
        ELSE 0
    END) AS '9 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '10:00:00' AND '10:59:59' THEN 1
        ELSE 0
    END) AS '10 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '11:00:00' AND '11:59:59' THEN 1
        ELSE 0
    END) AS '11 AM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '12:00:00' AND '12:59:59' THEN 1
        ELSE 0
    END) AS '12 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '13:00:00' AND '13:59:59' THEN 1
        ELSE 0
    END) AS '1 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '14:00:00' AND '14:59:59' THEN 1
        ELSE 0
    END) AS '2 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '15:00:00' AND '15:59:59' THEN 1
        ELSE 0
    END) AS '3 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '16:00:00' AND '16:59:59' THEN 1
        ELSE 0
    END) AS '4 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '17:00:00' AND '17:59:59' THEN 1
        ELSE 0
    END) AS '5 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '18:00:00' AND '18:59:59' THEN 1
        ELSE 0
    END) AS '6 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '19:00:00' AND '19:59:59' THEN 1
        ELSE 0
    END) AS '7 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '20:00:00' AND '20:59:59' THEN 1
        ELSE 0
    END) AS '8 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '21:00:00' AND '21:59:59' THEN 1
        ELSE 0
    END) AS '9 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '22:00:00' AND '22:59:59' THEN 1
        ELSE 0
    END) AS '10 PM',
    SUM(CASE
        WHEN DATE_FORMAT(ticket.create_time, '%H:%i:%s') BETWEEN '23:00:00' AND '23:59:59' THEN 1
        ELSE 0
    END) AS '11 PM',
    COUNT(*) AS Total
FROM
    queue,
    ticket
WHERE
    ticket.queue_id = queue.id
        AND queue.name LIKE 'Event Management::SCOT%'
        AND DATE_FORMAT(ticket.create_time, '%Y-%m-%d') BETWEEN '\'+FechaInicio+\'' AND '\'+FechaFin+\''
GROUP BY DAYOFWEEK(ticket.create_time)
ORDER BY DAYOFWEEK(ticket.create_time)


