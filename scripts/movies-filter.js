const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      bs: "target end-to-end models",
    },
  },
];
const movies = [
  {
    userId: 10,
    id: 1,
    title: "The Godfather",
    genre: "Thriller",
    watched: "2022-04-01 09:40:48",
    rate: 7.6,
    image: "https://i.ebayimg.com/images/g/X~cAAOSwz2ZiaB2w/s-l1600.jpg",
  },
  {
    userId: 7,
    id: 2,
    title: "The Texas Chain Saw Massacre",
    genre: "Horror",
    watched: "2020-05-25 13:11:24",
    rate: 7.4,
    image: "https://m.media-amazon.com/images/I/91ei8JE0SDL.jpg",
  },
  {
    userId: 1,
    id: 3,
    title: "The Shining",
    genre: "Horror",
    watched: "2022-02-24 00:21:22",
    rate: 5.8,
    image:
      "https://cdn.posteritati.com/posters/000/000/061/864/the-shining-md-web.jpg",
  },
  {
    userId: 3,
    id: 4,
    title: "Toy Story",
    genre: "Animation|Children|Comedy|Fantasy",
    watched: "2022-06-17 23:21:12",
    rate: 5.9,
    image: "https://m.media-amazon.com/images/I/71aBLaC4TzL.jpg",
  },
  {
    userId: 8,
    id: 5,
    title: "Halloween: The Curse of Michael Myers",
    genre: "Horror|Thriller",
    watched: "2020-04-18 15:47:33",
    rate: 0.7,
    image: "https://m.media-amazon.com/images/I/91UHof7cKKL.jpg",
  },
  {
    userId: 5,
    id: 6,
    title: "Die Hard",
    genre: "Action|Crime|Thriller",
    watched: "2020-06-15 22:49:31",
    rate: 3.3,
    image:
      "https://cdn.shopify.com/s/files/1/1057/4964/products/Die-Hard-Vintage-Movie-Poster-Original-1-Sheet-27x41-7126.jpg",
  },
  {
    userId: 2,
    id: 7,
    title: "The Dark Knight Rises",
    genre: "Action|Adventure|Crime",
    watched: "2022-11-16 04:22:21",
    rate: 4.7,
    image: "https://m.media-amazon.com/images/I/81G+2LJQJeL.jpg",
  },
  {
    userId: 3,
    id: 8,
    title: "Fight Club",
    genre: "Action|Crime|Drama|Thriller",
    watched: "2022-10-26 07:04:17",
    rate: 4,
    image: "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg",
  },
  {
    userId: 5,
    id: 9,
    title: "Avengers: Infinity War",
    genre: "Action|Adventure|Sci-Fi",
    watched: "2022-07-12 20:36:17",
    rate: 2.8,
    image: "https://i.ebayimg.com/images/g/kukAAOSw-YZa8mLH/s-l1600.jpg",
  },
  {
    userId: 7,
    id: 10,
    title: "The Hangover",
    genre: "Comedy",
    watched: "2020-08-13 01:17:10",
    rate: 1.4,
    image: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-172442538.jpg",
  },
  {
    userId: 4,
    id: 11,
    title: "Your Name",
    genre: "Animation|Drama|Fantasy|Romance",
    watched: "2020-10-06 00:08:50",
    rate: 1,
    image:
      "https://i0.wp.com/www.septimacaja.com/wp-content/uploads/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
  },
  {
    userId: 9,
    id: 12,
    title: "How to Train Your Dragon",
    genre: "Adventure|Animation|Children|Fantasy",
    watched: "2022-01-11 23:06:04",
    rate: 9.1,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    userId: 8,
    id: 13,
    title: "Robin Hood",
    genre: "Adventure|Animation|Children|Comedy|Musical",
    watched: "2021-08-05 18:57:45",
    rate: 5.8,
    image: "https://pics.filmaffinity.com/Robin_Hood-466796044-large.jpg",
  },
  {
    userId: 6,
    id: 14,
    title: "Whiplash",
    genre: "Drama|Musical",
    watched: "2022-04-23 00:44:02",
    rate: 0.7,
    image: "https://flxt.tmsimg.com/assets/p10488558_p_v12_ai.jpg",
  },
  {
    userId: 5,
    id: 15,
    title: "Life Is Beautiful",
    genre: "Comedy|Drama|Romance|War",
    watched: "2022-05-02 20:00:04",
    rate: 6.4,
    image: "https://flxt.tmsimg.com/assets/p22005_p_v8_aa.jpg",
  },
];

let requestedMovies = [];
const resetButton = document.getElementById("resetButton");
const showMoviesPanel = document.getElementById("showMoviesPanel");
const searchForm = document.getElementById("searchMoviesForm");
const moviesSearchFormInputs = document.querySelectorAll("input");
const fromDate = document.getElementById("watchedFromIdInput");
const toDate = document.getElementById("watchedToIdInput");
const userId = document.getElementById("userIdInput");
userId.setAttribute("maxLength", "2");
const rate = document.getElementById("rateIdinput");
rate.setAttribute("maxLength", "3");
const searchButton = document.getElementById("searchButton");

/* CREO UN ARREGLO VACIO AL CUAL LE AGREGO LAS FECHAS EN MILISEGUNDOS DE TODAS LAS PELICULAS  
PARA LUEGO VALIDAR QUE LAS FECHAS INGRESADAS ESTAN EN EL RANGO DE FECHAS EXISTENTES EN EL ARREGLO.
CREO UNA VARIABLE dateHelper PARA ALMACENAR EL VALOR DE LA PRIMERA FECHA Y COMPARAR LA SEGUNDA*/
const registerDates = [];
let dateHelper = 0;
movies.forEach(({ ...movie }) => {
  const registerDate = new Date(movie.watched);

  registerDates.push(registerDate.getTime());
});

const firstDateRegistered = Math.min(...registerDates);
const lastDateRegistered = Math.max(...registerDates);

/* Creo un objeto con los haciendo referencia a los 4 inputs */
const moviesFieldsInputs = {
  userIdInput: false,
  watchedFromIdInput: false,
  watchedToIdInput: false,
  rateIdinput: false,
};

/* Diccionario con las funciones de validacion utilizadas en cada input */
const validations = {
  userIdInput: (idUser) => {
    if (/^[0-9]*$/.test(idUser.value)) {
      return true;
    }
    if (!/^[0-9]*$/.test(idUser.value)) {
      return false;
    }
    if (idUser.value === "") {
      return false;
    }
    if (idUser.value <= 0 && 10 < idUser.value) {
      return false;
    }
  },
  watchedFromIdInput: (date) => {
    const dateFromSelected = new Date(date.value).getTime() + 67653000;

    if (
      firstDateRegistered <= dateFromSelected &&
      dateFromSelected <= lastDateRegistered
    ) {
      dateHelper = dateFromSelected;

      return true;
    }
    if (
      !(
        (firstDateRegistered <= dateFromSelected) |
        (dateFromSelected <= lastDateRegistered)
      )
    ) {
      return false;
    }
  },
  watchedToIdInput: (date) => {
    const dateToSelected = new Date(date.value).getTime() + 26541000;

    if (
      firstDateRegistered <= dateToSelected &&
      dateToSelected <= lastDateRegistered &&
      dateHelper <= dateToSelected &&
      dateHelper != 0
    ) {
      console.log(dateToSelected);
      return true;
    }
    if (
      !(
        firstDateRegistered <= dateToSelected &&
        dateToSelected <= lastDateRegistered
      ) | !(dateHelper <= dateToSelected)
    ) {
      return false;
    }
  },
  rateIdinput: (rate) => {
    if (
      0 <= Number(rate.value) &&
      Number(rate.value) <= 10 &&
      rate.value != ""
    ) {
      return true;
    }
    if (!(0 <= Number(rate.value) && Number(rate.value) <= 10)) {
      return false;
    }
  },
};

/* agrego un eventlistener a cada input, este listener cumple la funcion de mostrar
el error al llenar un input o el exito al hacerlo*/
moviesSearchFormInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validations[input.name](input);
    if (validations[input.name](input)) {
      moviesFieldsInputs[input.name] = true;
      document
        .getElementById(`${input.name}Fine`)
        .classList.add("itsFineInputActive");
      document
        .getElementById(`${input.name}Fine`)
        .classList.remove("itsFineInput");
      document.getElementById(`${input.name}Error`).classList.add("errorInput");
      document
        .getElementById(`${input.name}Error`)
        .classList.remove("errorInputActive");
    }
    if (!validations[input.name](input) | (input.value === "")) {
      moviesFieldsInputs[input.name] = false;
      document
        .getElementById(`${input.name}Fine`)
        .classList.add("itsFineInput");
      document
        .getElementById(`${input.name}Fine`)
        .classList.remove("itsFineInputActive");
      document
        .getElementById(`${input.name}Error`)
        .classList.add("errorInputActive");
      document
        .getElementById(`${input.name}Error`)
        .classList.remove("errorInput");
    }
    if (input.value === "") {
      document
        .getElementById(`${input.name}Fine`)
        .classList.add("itsFineInput");
      document
        .getElementById(`${input.name}Fine`)
        .classList.remove("itsFineInputActive");
      document
        .getElementById(`${input.name}Error`)
        .classList.remove("errorInputActive");
      document.getElementById(`${input.name}Error`).classList.add("errorInput");
    }
  });
});

/* Funcion filterMovies dentro se encarga de buscar las coincidencias 
expuestas en los condicionales. Utilice un arreglo vacio fuera de la funcion el cual se llena mediante una funcion interna llamada 
registerViewer
*/

const filterMovies = ({ users, movies, userId, fromDate, toDate, rate }) => {
  const fromDateValueCompare = new Date(fromDate.value).getTime() + 67653000;
  const toDateValueCompare = new Date(toDate.value).getTime() + 26541000;

  const registerViewer = ({ userId: userId, movie: movie }) => {
    users.forEach((user) => {
      if (user.id === Number(userId)) {
        const viewer = {
          id: user.id,
          username: user.username,
          email: user.email,
          fullAddress: `${user.address.street} - ${user.address.city}`,
          company: user.company.name,
          movie: movie.title,
          rate: movie.rate,
        };

        requestedMovies.push(viewer);
      }
    });
  };

  if (userId.value) {
    movies.forEach(({ ...movie }) => {
      if (movie.userId === Number(userId.value)) {
        if (
          fromDateValueCompare <= new Date(movie.watched).getTime() &&
          new Date(movie.watched).getTime() <= toDateValueCompare &&
          Number(rate.value) <= movie.rate
        ) {
          registerViewer({ userId: movie.userId, movie: movie });
        }
      }
    });
  }

  if (!userId.value) {
    movies.forEach(({ ...movie }) => {
      if (
        fromDateValueCompare <= new Date(movie.watched).getTime() &&
        new Date(movie.watched).getTime() <= toDateValueCompare &&
        Number(rate.value) <= movie.rate
      ) {
        registerViewer({ userId: movie.userId, movie: movie });
      }
    });
  }
};

/* agrego listener al boton de busqueda el cual ejecuta la funcion de busqueda y luego ejecuta un map 
sobre el array que posee las peliculas filtradas  para mostrar
los objetos en pantalla */

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    moviesFieldsInputs.watchedFromIdInput &&
    moviesFieldsInputs.watchedToIdInput &&
    moviesFieldsInputs.rateIdinput
  ) {
    setTimeout(
      filterMovies({
        users: users,
        movies: movies,
        userId: userId,
        fromDate: fromDate,
        toDate: toDate,
        rate: rate,
      }),
      1500
    );

    requestedMovies.map((movie) => {
      const movieViewerCard = document.createElement("div");
      movieViewerCard.classList.add("box1");

      const movieTitle = document.createElement("h3");
      movieTitle.textContent = `${movie.movie}`;

      const movieUserID = document.createElement("h5");
      movieUserID.textContent = `ID: ${movie.id}`;
      const movieUserName = document.createElement("h5");
      movieUserName.textContent = `Username: ${movie.username}`;
      const movieUserEmail = document.createElement("h5");
      movieUserEmail.textContent = `email: ${movie.email}`;
      const movieFullAddress = document.createElement("h5");
      movieFullAddress.textContent = ` fullAddress: ${movie.fullAddress}`;
      const movieCompany = document.createElement("h5");
      movieCompany.textContent = `company: ${movie.company}`;
      const movieRate = document.createElement("h5");
      movieRate.textContent = `rate: ${movie.rate}}`;

      movieViewerCard.appendChild(movieTitle);
      movieViewerCard.append(movieUserID);
      movieViewerCard.append(movieUserName);
      movieViewerCard.append(movieUserEmail);
      movieViewerCard.append(movieFullAddress);
      movieViewerCard.append(movieCompany);
      movieViewerCard.append(movieRate);
      showMoviesPanel.appendChild(movieViewerCard);
    });
  }
});

/* uso el boton RESET para reiniciar el formulario y quitar 
los estilos de los inputs */
resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchForm.reset();

  moviesSearchFormInputs.forEach((input) => {
    document.getElementById(`${input.name}Fine`).classList.add("itsFineInput");
    document
      .getElementById(`${input.name}Fine`)
      .classList.remove("itsFineInputActive");
    document
      .getElementById(`${input.name}Error`)
      .classList.remove("errorInputActive");
    document.getElementById(`${input.name}Error`).classList.add("errorInput");
  });
});
