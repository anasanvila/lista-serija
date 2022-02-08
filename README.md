# Zadatak
Potrebno je napraviti identicnu kopiju BIT SHOW (https://bit-show-app.netlify.app/ ) projekta.

Potrebno je da kopija ima isti osnovni set funkcionalnosti ali da bude implementirana u sledecim tehnologijama i koristeci sledece alate: 
- TypeScript (obavezno)
- Axios - http client (obavezno)
- Chakra UI (obavezno)
- Koriscenje hookova i funkcionalnih komponenti (obavezno)

Zahtevi i dodatne funkcionalnosti:
- Theme switch / Dark i light mode (obavezno)
- Sortiranje serija po nazivu i/ili po rating-u (opciono) (context)
- Selektovanje omiljenih serija i prikaz istih na posebnoj strani (omiljene serije ostaju sacuvane i nakon zatvaranja pretrazivaca) (opciono)
- Paginacija / load more (opciono)

# Resenje

- zadatak je uradjen u Javascriptu na `main` branchu
- krenula sam da konvertujem u typescript na branchu `addingTypescript` ali sam videla da ce mi oduzeti jos vremena pa sam odustala
- ostale trazene funkcionalnosti su uradjene

## objasnjenja

- radi boljeg UX-a dodala sam dodatni header gde stoje: `switch` dugme za menjanje teme i `select` za izbor nacina sortiranja
- da bi moglo da se primeti kad se sortira po id-ju dodala sam `labelu` u karticama gde se vidi `id`
- dodala sam `zvezdicu` u karticama koja predstavlja favourites. Kada je crvena zvezdica to znaci da je u favourites, kada je siva znaci da nije. Klikom na zvezdicu se dodaje ili uklanja u favourites. Izabrani se mogu videti na posebnoj stranici Favourites
- za paginaciju sam dodala prethodnu i sledecu stranu i broj tekuce stranice, mislim da je to bolji UX od `load more` jer je preglednije
- kada se zeljeni kriterijum unese u `search inputu` i klikne na dugme lupu ili pritisne `enter`, aktivira se API poziv za backend pretragu po zadatom kriterijumu. Bekend vraca 10 prikaza
- sortiranje po izabranom kriterijumu funkcionise i na glavnoj stranici i na stranici Favourites
