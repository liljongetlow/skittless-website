const translations = {
    ru: {
        siteTitle: "SkittlesS",
        player1: "Профиль Zloy",
        player2: "Профиль Arigami",
        player3: "Профиль Rstqq",
        player4: "Профиль Izell",
        player5: "Профиль M1ndsett",
        sponsor: "Спонсор Cuctema",
        disqualifications: "Дисквалификации"
    },
    en: {
        siteTitle: "SkittlesS",
        player1: "Profile Zloy",
        player2: "Profile Arigami",
        player3: "Profile Rstqq",
        player4: "Profile Izell",
        player5: "Profile M1ndsett",
        sponsor: "Sponsor Cuctema",
        disqualifications: "Disqualifications"
    }
};

function setLanguage(language) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.innerHTML = translations[language][key];
    });
}
