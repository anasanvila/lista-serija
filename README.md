# Zadatak
Potrebno je napraviti identicnu kopiju BIT SHOW (https://bit-show-app.netlify.app/ ) projekta.

Potrebno je da kopija ima isti osnovni set funkcionalnosti ali da bude implementirana u sledecim tehnologijama i koristeci sledece alate: 
- Axios - http client (obavezno)
- Chakra UI (obavezno)
- Koriscenje hookova i funkcionalnih komponenti (obavezno)

Zahtevi i dodatne funkcionalnosti:
- Theme switch / Dark i light mode (obavezno)
- Sortiranje serija po nazivu i/ili po rating-u (opciono) (context)
- Selektovanje omiljenih serija i prikaz istih na posebnoj strani (omiljene serije ostaju sacuvane i nakon zatvaranja pretrazivaca) (opciono)
- Paginacija / load more (opciono)

# Resenje

- zadatak je urađen u Javascriptu na `main` branchu
- ostale tražene funkcionalnosti su urađene
- deploy je na: https://aleksandra-djordjevic.com/

## objašnjenja

- radi boljeg UX-a dodala sam dodatni header gde stoje: `switch` dugme za menjanje teme i `select` za izbor načina sortiranja
- da bi moglo da se primeti kad se sortira po id-ju dodala sam `labelu` u karticama gde se vidi `id`
- u karticama sam dodala `zvezdicu` koja predstavlja oznaku za omiljene (Favourites). Crvena zvezdica označava da je serija u Favourites. Siva zvezdica označava da serija nije u Favourites. Klikom na zvezdicu se dodaje ili uklanja serija u Favourites. Izabrane serije se mogu videti na posebnoj stranici Favourites.
- za paginaciju sam dodala dugme za prelazak na prethodnu i na sledeću stranu i broj tekuće stranice. Uradila sam na taj način jer mislim da je to bolji UX od `load more` i da je preglednije
- kada se željeni kriterijum unese u `search inputu` i klikne na dugme lupu ili pritisne `Enter`, aktivira se API poziv za backend pretragu po zadatom kriterijumu. Backend vraća 10 prikaza
- sortiranje po izabranom kriterijumu funkcioniše i na glavnoj stranici i na stranici Favourites
- promenila sam UX/UI za footer (da bude fiksiran) i promenila raspored slike/teksta za mobilni prikaz stranice za odabranu jednu seriju, da bude preglednije
