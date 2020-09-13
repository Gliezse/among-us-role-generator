## Welcome! / Bienvenido!

#### Language / Lenguaje
- [English](#english)
- [Español](#español)

# English

### Table of contents
- [App description](#descriptionEN)
- [How to use](#usageEN)
- [Roles and Rules](#rulesEN)
- [Install locally](#installEN)
- [Compatibility](#compatibilityEN)


## App Description
This app was created for the purpose of providing a remote roleplay role generating tool for the very popular game Among Us. The advantage of this being hosted in a unique server is the posibility of creating and joining rooms with your friends and having control over some unique roles (See [**buffoon**](#buffoon) role).

## How to use
When a ingame room is created with a 4 character code, one player (from now, the Host) should enter the app and create a new generator room with the same code and region that the ingame room has. The host will be given a role, like everyone else. Then, every other player should also enter the app and join by writting the same code and select the same region the host specified. When all players have a role, the game can begin. The host will have a **"Reset Room"** button all time, which should be clicked when the game is over (since there's no api to track games yet). When this button is clicked, the host will get a new role and all the others players will get a similar button on their screens. When clicked, this button will give them a new role for a new game. 
The role assigned is currently unique per ip, this will change in a future update.

## Roles And Rules
These are the 7 roles actually available:
- **Normal**: Plays like any other game.
- **Liar**: You can't say the truth and must act the best you can so they don't realize
- **Interrogator**: Don't stop making questions (Minimum one to every crew member).
- **Accuser**: Compulsively accuse people.
- **Quiet**: You are allowed to say only 5 words per meeting.
- **Paranoid**: Everyone thinks you are the **impostor**. Defend yourself like your life depends on it.
- **Buffoon**: Special role. Wins the game by getting ejected. (There can be only one per game)

#### Rules
The rules are simple, but aren't mandatory, so every group can decide how they play or state their own rules. 
- Since this is a roleplay situation, **everyone should act their role the best they can.**
- If you are the **impostor**, you should still act your role, but if you role is **buffoon**, you'll lose if you're ejected.
- If you are a **buffoon**, you can only win the game by getting kicked out. If the crewmates win, you and the **impostor** lose. Nonetheless, you must do your missions.
- If a **buffoon** is ejected, they should notify the other players so the game ends there.

## Install Locally
To run this app locally for development purposes you should have `nodejs v12` installed. Clone this repository and then:
- `npm install` to install client dependencies
- `npm run install-server` to install server dependencies
- `npm start` start server or `npm run dev-server` to start server with Nodemon
- `npm run start-client` to start React client
- `npm run scss` to start node-scss listening to scss files
Then you can start developing in ports 3000 (Client) and 3030 (Server)

To build and deploy run:
`npm run build` and then `npm start`, and you should get a locally runing deploy version in server port.

## Compatibility
Major visual glitches in mobile devices, will be fixed in next version.

# Español

### Tabla de contenidos
- [Descripción de la aplicación](#descriptionES)
- [Como usarla](#usageES)
- [Roles y Reglas](#rulesES)
- [Instalar localmente](#installES)
- [Compatibilidad](#compatibilityES)


## Descripción de la aplicación
Esta app fue creada con el proposito de proveer una herramienta remota de generación de roles para roleplay, apuntada al popular juego Among Us. La ventaja de que sea hosteada en un único server es que brinda la posibilidad de crear y unirse a salas con tus amigos y tener control sobre algunos roles únicos (Ver el rol de **bufón**)

## Como usarla
Cuando una sala dentro de Among Us es creada con un código de 4 letras, un jugador (desde ahora, el anfitrión) debe entrar a esta app y crear una nueva sala del generador con el mismo código y región que se le fue dado por el juego. Al anfitrión se le otorgará un rol, igual que a todos los demas. Luego, todos los otros jugadores también deben entrar al generador y unirse a esta sala introduciéndo el mísmo código y región. Cuando todos tengan un rol, el juego puede empezar. El anfitrion tendrá disponible un botón de **"Resetear sala"** en todo momento, el cuál deberá ser clickeado cuando el juego termine (Ya que no hay una api disponible para esto por ahora). Cuando el botón sea clickead, el anfitrión obendrá un nuevo rol y todos los demas jugadores en la sala verán un botón similar en sus pantallas el cual, al clickearlo, les dará unos nuevos roles para una nueva partida. Los roles son asignados como únicos por ip, esto va a cambiar en una actualización futura.

## Roles And Reglas
Estos son los 7 roles actualmente disponibles:
- **Normal**: Juega como cualquier otra partida.
- **Mentiroso**: No puedes decir la verdad y debes actuar lo mejor que puedas para que no puedan distinguirlo.
- **Interrogador**: No parar de hacer preguntas (Al menos una a cada jugador)
- **Acusador**: Acusa a los demas compulsivamente.
- **Callado**: Solo tienes permitidas 5 palabras por reunión.
- **Paranóico**: Todos piensan que eres el **impostor**, defiendete como si tu vida dependiese de eso.
- **Bufón**: Rol especial. Gana el juego haciendo que te hechen. (Solo puede haber un **bufón** por partida).

#### Rules
Las reglas son simples, pero no obligatorias, de forma que todos los grupos puedan definir cómo quieren jugar o poner sus propias reglas.
- Ya que esta es una situación de roleplay, todos deben actuar sus roles lo mejor que puedan. La idea no es adivinar el rol del otro, sino apegarse al própio.
- Si eres **impostor**, aún así debes actuar tu rol, sin embargo, si tu rol es **bufón**, aún perderás si te expulsan. 
- Si eres bufín, solo puedes ganar el juego si te expulsan. Si los tripulantes ganan, tu y el **impostor** pierden. Sin embargo, debes hacer tus tareas. Si el **impostor** te mata, también pierdes.
If you are a **buffoon**, you can **only** win the game by getting kicked out. If the crewmates win, you and the **impostor** lose. Nonetheless, you must do your missions.
- Si un **bufón** es expulsado, debe avisar a los demas jugadores para dar el juego por terminado.

## Instalar Localmente
Para correr esta app con propósitos de desarrollo, debes tener `nodejs v12` instalado. Clona este repositorio y luego en la raíz del proyecto:
- `npm install` para instalar dependencias del cliente React
- `npm run install-server` para instalar dependencias del server
- `npm start` correr server o `npm run dev-server` para correr server con Nodemon
- `npm run start-client` para correr cliente
- `npm run scss` para correr node-scss y escuchar archivos scss
Luego ya puede empezar a desarrollar en los puertos 3000 (Cliente) y 3030 (Server)

Para buildear y deployar corre:
`npm run build` y luego `npm start`, asi obtendrás una versión de deploy local corriendo en el puerto del server.

## Compatibilidad
Glitches visuales en mobile, serán arreglados en próximos parches
