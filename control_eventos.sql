SELECT DISTINCT
    t.tn AS 'Numero de ticket',
    t.title AS 'Titulo',
    t.create_time AS 'Hora de creacion',
    t.change_time AS 'Hora de cierre',
    q.name AS 'Cola',
    ts.name AS 'Estado',
    u.first_name AS 'Agente',
    (SELECT 
            th.change_time
        FROM
            ticket_history th
                INNER JOIN
            ticket tx ON th.ticket_id = tx.id
        WHERE
            1 = 1 AND tx.tn = t.tn
                AND th.history_type_id = 8
                AND th.id = (SELECT 
                    MIN(th.id)
                FROM
                    ticket_history th,
                    ticket ti
                WHERE
                    th.ticket_id = ti.id AND ti.tn = tx.tn
                        AND th.history_type_id = 8))
FROM
    queue q
        INNER JOIN
    ticket t ON t.queue_id = q.id
        INNER JOIN
    users u ON t.user_id = u.id
        INNER JOIN
    ticket_state ts ON t.ticket_state_id = ts.id
WHERE
    t.type_id = 1 AND 1 = 1 AND 1 = 1
        AND 1 = 1
        AND q.id LIKE 'Event Management::%'
        AND DATE_FORMAT(t.create_time, '%Y-%m-%d') BETWEEN CONCAT(DATE_FORMAT(LAST_DAY(NOW() - INTERVAL 1 MONTH),
                    '%Y-%m-'),
            '01 00:00:00') AND CONCAT(DATE_FORMAT(LAST_DAY(NOW() - INTERVAL 1 MONTH),
                    '%Y-%m-%d'),
            '23:59:59')
ORDER BY t.create_time
