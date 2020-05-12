<h1 align="center">
  Over deze App
</h1>

Deze app is opgebouwd in [Gatsby](https://www.gatsbyjs.org), dat is een [React](https://reactjs.org) framework waarmee razendsnelle, goed geoptimaliseerde en dynamische websites, webshops en webapps te ontwikkelen zijn. De styling van deze app is op basis van Google's [Material design](https://material.io) principes.
De app is serverless, wat wil zeggen dat er geen backend server nodig is voor deze app. Alles speelt zich in de browser af. Uiteraard is er wel een webserver nodig om de app te hosten. Bij elke wijziging van de broncode in de [repository](https://github.com/Marco-Daniel/corona-tracker) wordt de app automatisch opnieuw gebouwd en geüpload naar de webserver.
Deze app is open-source, neem gerust een kijkje in de [broncode](https://github.com/Marco-Daniel/corona-tracker).

## Gebruikte databronnen

1.  **COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University**

    Doormiddel van [deze repository](https://github.com/pomber/covid19) wordt de laatste informatie van het _Center for Systems Science and Engineering (CSSE) at Johns Hopkins University_ ingeladen.

2.  **Wikipedia**

    Alle tekstuele informatie op deze site komt van [Wikipedia](https://wikipedia.nl/). Middels de _API_ van [Wikipedia](https://wikipedia.nl/) wordt deze bij het laden van de app ingelezen. Op deze manier is het altijd de meest recente informatie.

3.  **NOS nieuwsartikelen**

    De [NOS](https://nos.nl/) beschikt helaas niet over een openbare _API_. Wel is er een RRS feed. Door een aantal handige truckjes toe te passen is het mogelijk om deze data bij het laden van de app in te lezen en te filteren. Zo worden altijd de laatste nieuwsartikelen getoond. Helaas is de rss feed niet over HTTPS beschikbaar, waardoor bij het laden van de data de melding verschijnt dat er delen onbeveiligd zijn op deze pagina.

4.  **RTL nieuwsartikelen**

    Ook [RTL nieuws](https://www.rtlnieuws.nl/) beschikt helaas niet over een openbare _API_. Wel is er [Newsapi.org](https://newsapi.org) welke wel de laatste artikelen van RTL nieuws beschikbaar stelt.

Interesse in een website, webshop of app zoals deze? Of vragen? Neem dan gerust contact op via [mddd.nl](https://mddd.nl)!
