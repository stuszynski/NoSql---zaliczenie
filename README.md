NoSql---zaliczenie
==================

Zestaw skryptów na zaliczenie kursu o nierelacyjnych bazach danych.


==================

Pliki główne znajdują się w folderze "main" ( w temp znajdują się różne testowe mniej lub bardziej działające skrypty)

Założenie:

1. Skrypt "cpMongo2Couch":
    * wykorzystuje "mongoimport" do ładowania ufo.csv do bazy mongo.
    * wykorzystuje node.js do przygotowania jsona do transportu na coucha
    * przy pomocy curla laduje _bulk_docs do coucha

2. 