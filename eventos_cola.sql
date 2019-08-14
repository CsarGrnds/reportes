SELECT 
    queue.id ID,
    queue.name,
    COUNT(1) Total,
    SUM(CASE
        WHEN ticket.user_id = 1 THEN 1
        ELSE 0
    END) SinAnalisis,
    SUM(CASE
        WHEN ticket.ticket_state_id = 11 THEN 1
        ELSE 0
    END) Escalados,
    SUM(CASE
        WHEN ticket.ticket_state_id = 12 THEN 1
        ELSE 0
    END) Recuperados,
    SUM(CASE
        WHEN ticket.ticket_state_id IN (2 , 3) THEN 1
        ELSE 0
    END) SatisfechosInsatisfechos,
    SUM(CASE
        WHEN ticket.ticket_state_id = 9 THEN 1
        ELSE 0
    END) Fusionados
FROM
    ticket,
    queue
WHERE
    ticket.queue_id = queue.id
        AND queue.valid_id = 1
        AND queue.name LIKE 'Event Management::SCOT%'
        AND ticket.create_time BETWEEN '2018-05-01 00:00:00' AND '2018-05-27 23:59:59'
