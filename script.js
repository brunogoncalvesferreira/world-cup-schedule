const apiFlags = "https://countryflagsapi.com/png/"

function createGame(player1, hour, player2) {
  return `
        <li>
          <img src=${player1} alt="Bandeira do ${player1}" />
          <strong>${hour}</strong>
          <img src=${player2} alt="Bandeira da ${player2}" />
        </li>
  `
}

function createCard(date, day, games) {
  return ` 
      <div class="card">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `   
      <header>
        <img
          class="logo"
          src="./assets/logo.svg"
          alt="Logo da agenda copa 2022"
        />
      </header>
      <main id="cards">

      ${createCard(
        "20/11",
        "Domingo",
        createGame(apiFlags + "qatar", "13:00", apiFlags + "ecuador")
      )}

       ${createCard(
         "21/11",
         "Segunda",
         createGame(apiFlags + "england", "10:00", apiFlags + "iran") +
           createGame(apiFlags + "senegal", "13:00", apiFlags + "netherlands") +
           createGame(apiFlags + "usa", "16:00", apiFlags + "wales")
       )}

       ${createCard(
         "22/11",
         "Terça",
         createGame(apiFlags + "argentina", "07:00", apiFlags + "sa") +
           createGame(apiFlags + "denmark", "10:00", apiFlags + "tunisia") +
           createGame(apiFlags + "mexico", "13:00", apiFlags + "poland") +
           createGame(apiFlags + "france", "13:00", apiFlags + "australia")
       )}

       ${createCard(
         "23/11",
         "Quarta",
         createGame(apiFlags + "morocco", "07:00", apiFlags + "croatia") +
           createGame(apiFlags + "germany", "10:00", apiFlags + "japan") +
           createGame(apiFlags + "spain", "13:00", apiFlags + "cr") +
           createGame(apiFlags + "belgium", "16:00", apiFlags + "canada")
       )}

       ${createCard(
         "24/11",
         "Quinta",
         createGame(apiFlags + "switzerland", "07:00", apiFlags + "cameroon") +
           createGame(apiFlags + "uruguay", "10:00", apiFlags + "kr") +
           createGame(apiFlags + "portugal", "13:00", apiFlags + "ghana") +
           createGame(apiFlags + "brazil", "16:00", apiFlags + "serbia")
       )}

      ${createCard(
        "25/11",
        "Sexta",
        createGame(apiFlags + "wales", "07:00", apiFlags + "iran") +
          createGame(apiFlags + "qatar", "10:00", apiFlags + "senegal") +
          createGame(apiFlags + "netherlands", "13:00", apiFlags + "ecuador") +
          createGame(apiFlags + "england", "16:00", apiFlags + "usa")
      )}

      ${createCard(
        "26/11",
        "Sabádo",
        createGame(apiFlags + "tunisia", "07:00", apiFlags + "australia") +
          createGame(apiFlags + "poland", "10:00", apiFlags + "sa") +
          createGame(apiFlags + "france", "13:00", apiFlags + "denmark") +
          createGame(apiFlags + "argentina", "16:00", apiFlags + "mexico")
      )}

      ${createCard(
        "27/11",
        "Domingo",
        createGame(apiFlags + "japan", "07:00", apiFlags + "cr") +
          createGame(apiFlags + "belgium", "10:00", apiFlags + "morocco") +
          createGame(apiFlags + "croatia", "13:00", apiFlags + "canada") +
          createGame(apiFlags + "spain", "16:00", apiFlags + "germany")
      )}

      ${createCard(
        "28/11",
        "Segunda",
        createGame(apiFlags + "cameroon", "07:00", apiFlags + "serbia") +
          createGame(apiFlags + "kr", "10:00", apiFlags + "ghana") +
          createGame(apiFlags + "brazil", "13:00", apiFlags + "switzerland") +
          createGame(apiFlags + "portugal", "16:00", apiFlags + "uruguay")
      )}

      ${createCard(
        "29/11",
        "Terça",
        createGame(apiFlags + "ecuador", "12:00", apiFlags + "senegal") +
          createGame(apiFlags + "netherlands", "12:00", apiFlags + "qatar") +
          createGame(apiFlags + "iran", "16:00", apiFlags + "usa") +
          createGame(apiFlags + "wales", "16:00", apiFlags + "england")
      )}

      ${createCard(
        "30/11",
        "Quarta",
        createGame(apiFlags + "tunisia", "12:00", apiFlags + "france") +
          createGame(apiFlags + "australia", "12:00", apiFlags + "denmark") +
          createGame(apiFlags + "poland", "16:00", apiFlags + "argentina") +
          createGame(apiFlags + "sa", "16:00", apiFlags + "mexico")
      )}

        ${createCard(
          "01/12",
          "Quinta",
          createGame(apiFlags + "croatia", "12:00", apiFlags + "belgium") +
            createGame(apiFlags + "canada", "12:00", apiFlags + "morocco") +
            createGame(apiFlags + "japan", "16:00", apiFlags + "spain") +
            createGame(apiFlags + "cr", "16:00", apiFlags + "germany")
        )}

        ${createCard(
          "02/12",
          "Sexta",
          createGame(apiFlags + "kr", "12:00", apiFlags + "portugal") +
            createGame(apiFlags + "ghana", "12:00", apiFlags + "uruguay") +
            createGame(apiFlags + "serbia", "16:00", apiFlags + "switzerland") +
            createGame(apiFlags + "cameroon", "16:00", apiFlags + "brazil")
        )}

      </main> 
    `
