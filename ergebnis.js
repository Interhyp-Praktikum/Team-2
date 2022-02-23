// Hier kommt dein code
var ära1Character = [
  "Qui Gon Jinn",
  "Obi Wan Kenobi",
  "Anakin Skywalker",
  "Mace Windu",
  "Kit Fisto",
  "Yoda",
  "Count Dooku",
  "Asaj Ventress",
  "General Grievous",
  "Darth Maul",
  "Darth Sidious",
  "Jango Fett",
  "Padme Amidala"
];
var ära2Character = [
  "Obi Wan Kenobi (alt)",
  "Luke Skywalker",
  "Han Solo",
  "Chewbacca",
  "Prinzessin Leia",
  "Jabba the Hutt",
  "Darth Vader",
  "Kanzler Palpetine",
  "Boba Fett",
  "R2D2",
  "Sturmtruppler"
];
var ära3Character = [
  "Luke Skywalker (alt)",
  "Rey Skywalker",
  "Finn",
  "Han Solo (alt)",
  "Prinzessin Leia (alt)",
  "Poe Dameron",
  "BB8",
  "Kylo Ren",
  "Captain Phasma",
  "General Hux",
  "Supreme Leader Snoke",
  "Darth Sidious",
  "Porg"
];
var ära1Bilder = [
  "https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768",
  "https://starwarsblog.starwars.com/wp-content/uploads/2017/09/star-wars-episode-III-obi-wan-mustafar-1024x436.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/Anakin-Skywalker_d3330724.jpeg?region=0%2C0%2C1200%2C675&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/databank_kitfisto_01_169_21517d01.jpeg?region=0%2C0%2C1560%2C878&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg?region=0%2C0%2C1436%2C808&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/Asajj-Ventress_d5ca9413.jpeg?region=67%2C0%2C1067%2C600&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/General-Grievous_c9df9cb5.jpeg?region=0%2C0%2C1200%2C675&width=768",
  "https://starwarsblog.starwars.com/wp-content/uploads/2015/07/EP1_IA_72118-copy-1536x864-433723767381.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/image_3b5ee860.jpeg?region=195%2C0%2C1171%2C878&width=600",
  "https://lumiere-a.akamaihd.net/v1/images/databank_jangofett_01_169_884cefab.jpeg?region=0%2C0%2C1560%2C878&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/Padme-Amidala_05d50c8a.jpeg?region=0%2C0%2C1536%2C864&width=768"
];
var ära2Bilder = [
  "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1ymefwb_483d5487.jpeg?region=0%2C0%2C1200%2C675",
  "https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080&width=768",
  "https://starwarsblog.starwars.com/wp-content/uploads/2013/12/chewie-e1458598236638-1536x864-397101645730.jpg",
  "https://starwarsblog.starwars.com/wp-content/uploads/2015/12/CBSW_Leia_EP4-1536x864-898744276585.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/Jabba-The-Hutt_b5a08a70.jpeg?region=0%2C0%2C1200%2C675&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/emperor-palpatine-darth-sidious-main_3d82ddaa.jpeg?region=164%2C0%2C953%2C536&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=203%2C34%2C1077%2C606&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/ss-remnant-stormtroopers_b9788ca2.jpeg?region=272%2C183%2C1084%2C609&width=768"
];
var ära3Bilder = [
  "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-tlj-history-ahch-to-sunset_33f44de5.jpeg?region=0%2C0%2C1200%2C500",
  "https://lumiere-a.akamaihd.net/v1/images/rey-main_ca4bb0d7.jpeg?region=180%2C0%2C951%2C536&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/finn-main_ad2b705b.jpeg?region=75%2C177%2C1205%2C677&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/ep7_ia_175875_j-3-reg_0c03f022.jpeg?region=0%2C0%2C800%2C335",
  "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/poe-history-1_c3340398.jpeg?region=0%2C0%2C800%2C335",
  "https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=187%2C40%2C882%2C496&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/kylo-ren-main-tros-a_6d77fd1e.jpeg?region=0%2C0%2C1280%2C720&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/captain-phasma_8f4ea1d7.jpeg?region=0%2C87%2C1560%2C879&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/hux-bio-gallery-1_6e0967d8.jpeg?region=224%2C93%2C1056%2C527&width=960",
  "https://lumiere-a.akamaihd.net/v1/images/ep8-ff-006360_c95dace6.jpeg?region=0%2C0%2C1280%2C720&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/emperor-palpatine-darth-sidious-main_3d82ddaa.jpeg?region=164%2C0%2C953%2C536&width=768",
  "https://lumiere-a.akamaihd.net/v1/images/porg-main_16933d3b.jpeg?region=0%2C0%2C1560%2C878&width=768"
];
var glückwunsch = document.querySelector("#glückwunsch");
var character = document.querySelector("#character");
var characterBild = document.querySelector("#characterBild");
var steckbrief = document.querySelector("#steckbrief");

var gespeicherterName = localStorage.getItem("name");
var gespeicherteÄra = localStorage.getItem("ära");
var frage1 = localStorage.getItem("frage1");
var frage2 = localStorage.getItem("frage2");
var frage3 = localStorage.getItem("frage3");
var frage4 = localStorage.getItem("frage4");
var frage5 = localStorage.getItem("frage5");
var frage6 = localStorage.getItem("frage6");
var frage7 = localStorage.getItem("frage7");
var frage8 = localStorage.getItem("frage8");
var frage9 = localStorage.getItem("frage9");
var frage10 = localStorage.getItem("frage10");

if (gespeicherteÄra === "Teil 1-3") {
  if (frage1 === "x") {
  } else if (frage1 === "y") {
  } else if (frage1 === "b") {
  } else if (frage1 === "c") {
  }
}

if (glückwunsch) {
  glückwunsch.innerText = "Glückwunsch, du bist:";
}
if (character) {
  character.innerText = "Count Dooku";
}
if (steckbrief) {
  steckbrief.innerText = "Steckbrief";
}
if (characterBild) {
  characterBild.src =
    "https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg?region=0%2C0%2C1436%2C808&width=960";
}
