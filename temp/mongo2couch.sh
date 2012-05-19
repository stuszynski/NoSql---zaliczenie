#!/bin/bash
mongoexport -db stuszynski -c ufo -o export.json 

DB="http://127.0.0.1:5984/stuszynski"

echo 'Czyszczenie bazy'
//czyszczenie bazy
curl -X DELETE $DB

//wkladanie bazy
curl -X PUT $DB
curl -X POST -H "Content-Type: application/json" --data export.json $DB/_bulk_docs
