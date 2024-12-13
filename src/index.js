function displayPoem(response) {
    console.log("poem generated");

    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
    });
  }


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "4bfb73a00210a185tacffd8o47774b6a";
    let context = "Act as a funny AI-assistant that tells sweet and funny jokes";
    let prompt = `Generate a short and unique joke about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log(`Prompt = ${prompt}`);
    console.log(`Context = ${context}`);

    axios.get(apiUrl).then(displayPoem);
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);