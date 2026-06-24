document.documentElement.classList.add("js");

const agendaDetails = document.querySelectorAll(".agenda-theme__details");

agendaDetails.forEach((details) => {
  details.addEventListener("toggle", () => {
    const theme = details.closest(".agenda-theme");

    if (!theme) {
      return;
    }

    if (details.open) {
      agendaDetails.forEach((otherDetails) => {
        if (otherDetails === details) {
          return;
        }

        otherDetails.open = false;
        otherDetails.closest(".agenda-theme")?.classList.remove("is-showing-points");
      });

      theme.classList.add("is-showing-points");
    } else {
      theme.classList.remove("is-showing-points");
    }
  });
});
