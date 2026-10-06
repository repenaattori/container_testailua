## Tehtävä

* Aja workflow containerissa **mcr.microsoft.com/playwright:v1.63.0-noble**
* Container sisältää testauskirjastot ja noden
* Aja ensimmäisessä askeleessa `npm test -- test1` ja sijoita tulos tiedostoon test1.txt
* Lisää edellisen komennon loppuun **|| true** jolloin epäonnistunut testi ei kaada workflowta.
* Testaa seuraavassa askeleessa `npm test -- test2` ja talleta se toiseen tiedostoon testi2.txt
* Pushaa molemmat tiedostot lopuksi repoon.
* Lisää vielä viimeinen step, jossa tulostetaan "Testit epäonnistuivat", joka ajetaan vain, jos workflossa jokin epäonnistuu (onfailure).
  * Voit testata tämän toiminnon jättämällä pois aiemmin määritellyn **|| true** ja ajamalle workflown uudelleen.
