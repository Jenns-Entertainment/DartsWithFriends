# Darts With Friends (Online Dart Multiplayer mit Statistiken)
## How to dev:

Alle möglichen Tools und Hilfen um unsere Anwendung zu programmieren.

Das Grundgerüst der Anwendung folgt in großen Teilen diesem [Tutorial](https://milanwittpohl.com/de/projects/tutorials/Full-Stack-Web-App/the-backend-with-java-and-spring).
Ich empfehle sich dies durchzulesen und zu verstehen, um das Grundgerüst der Anwendung zu verstehen.

## Front-End:

### Ziel:

- Entwicklung einer Benutzeroberfläche für einen Dart Multiplayer mit Statistiken

### Framework(s):
- Vue.js (V3.2.38) [Progressives](https://de.wikipedia.org/wiki/Progressive_Web_App) Framework für User Interfaces  [GUIDE](https://vuejs.org/guide/introduction.html)
- Tailwind (V3.1.8) CSS Framework für styling  [DOCS](https://tailwindcss.com/docs/installation)

Update: Wir nutzen jetzt Native Vue 3 und nicht mehr nuxt.

### Benötigte Software:
- Text Editor mit Support für JavaScript, HTML, CSS -> VS Code oder sowas in der Art.
- Node.js muss installiert sein zum ausführen/testen vom Frontend. Ich nutze die LTS Version (V18.10.0). [Download](https://nodejs.org/en/)

### Run Front-End:
Zum starten vom Front-End einfach die StartFrontend.bat ausführen.
Falls dies nicht klappen sollte per Konsole in den Ordner frontend gehen und dort `npm run dev` ausführen.
Dann sollte unter [http://localhost:17038](http://localhost:17038) das Front-End zu finden sein.

## Back-End:

### Ziel:

- Entwicklung einer [REST-API](https://www.redhat.com/de/topics/api/what-is-a-rest-api) welche die Logik eines Dartspiels implementiert

### Programmiersprache(n):

- Java 17

### Framework(s):

- Spring Boot (V2.6.3) Java Framework zur vereinfachung der Entwicklung von diversen Diensten [DOCS](https://spring.io/projects/spring-boot)

### Benötigte Software:

- Java 17 [Download](https://www.oracle.com/java/technologies/downloads/#jdk17-windows)  [java -version]
- Editor für Java, z.B. IntelliJ, VS Code, etc...
- Software zum testen/debuggen der REST-API, z.B. [Postman](https://www.postman.com/)

### Run Back-End:

Zum starten vom Back-End einfach die StartBackend.bat ausführen.
Falls dies nicht klappen sollte per Konsole in den Ordner backend gehen und dort `gradlew.bat bootRun` ausführen.
Dann sollte unter [http://localhost:44548/HierKonkretenEndpointEinfügen](http://localhost:44548/sayhello) die Schnittstelle(n) vom Back-End zu finden sein.

## Dartenbank:

### Datenbanktyp:

- Relational (MariaDB)
