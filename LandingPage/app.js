let linkArr;

fetch("config.json")
  .then(response => response.json())
  .then(data => {
    document.title = data.site_title;

    document.getElementById("mainPicture").src = data.profile_picture;
    document.getElementById("mainHeading").innerHTML = data.main_heading;
    document.getElementById("secondaryHeading").innerHTML = data.secondary_heading;
    document.getElementById("mainParagraph").innerHTML = data.main_paragraph;


    linkArr = data.links;

    linkArr.forEach(item => {
      const newDiv = document.createElement("div");
      newDiv.className = "card";
      newDiv.innerHTML = `<a class="card-link" href="${item.link}" target="_blank" ><img src="${item.img}" alt="${item.name} logo" /><h3>${item.name}</h3></a>`;
      document.getElementById("cardContainer").appendChild(newDiv);
    });

    document.querySelector('head').innerHTML += `
    <style>
    .main-content {
      background: ${data.background_color};
      color: ${data.text_color};
    }
    </style>
  `;


  })
  .catch(error => console.error(error));
