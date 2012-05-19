
====  NoSql - zaliczenie  ====
  

Zestaw skryptów na zaliczenie kursu o nierelacyjnych bazach danych.


==================

Pliki główne znajdują się w folderze "main" ( w temp znajdują się różne testowe mniej lub bardziej działające skrypty)

Założenie:

1. Skrypt csvimport.sh:
    * importuje plik ufo.us.csv do bazy danych mongo;

2. Skrypt "cpMongo2Couch":
    * wykorzystuje "mongoexport" do stworzenia pliku export.json zawierającego bazę danych Ufo;
    * wykorzystuje node.js do przygotowania jsona do transportu na coucha
    * przy pomocy curla laduje _bulk_docs do coucha

3. Mongo Map Reduce:
    * skrypt "MongoMapReduce" laduje do powloki mongo skrypt MapReduceMongo.js który ładnie i zgrabnie dokonuje obliczeń zliczając ilość występowania poszczególnych lokacji;
