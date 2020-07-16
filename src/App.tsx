import React from "react";
import "./App.css";
import classes from "*.module.css";
const character = {
  name: "Darth Kitty",
  location: "Hamburg",
  avatar: "assets/profile.jpeg",
  bio:
    "I am a strong fan of lorem ipsum sit amet et dolor magna aliqua eiusmod adipising.",
  classes: [
    { class: "UX", rank: "Neophyte" },
    { class: "Backend", rank: "Journeyman" },
    { class: "Frontend", rank: "Adept" },
  ],
  skilltree: [
    {
      category: "UX",
      skills: [
        { name: "Hotgloo", xp: "800" },
        { name: "Figma", xp: "1800" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML", xp: "45600" },
        { name: "CSS", xp: "23040" },
        { name: "Less", xp: "3040" },
        { name: "SCSS", xp: "300" },
      ],
    },
    {
      category: "Frontend development",
      skills: [
        { name: "JS", xp: "42200" },
        { name: "Typescript", xp: "21000" },
        { name: "React", xp: "19940" },
        { name: "Angular", xp: "30" },
      ],
    },
  ],
  inventory: [
    {
      category: "Hardware",
      items: ["LG Gram 17", "iPhone 11", "Oculus quest", "NES"],
    },
    {
      category: "Books",
      items: ["Programming in GO", "Code complete"],
    },
  ],
  goals: [
    {
      category: "Adventures",
      items: [
        "Climb mount Kilimandscharo once",
        "Go to the Maledives",
        "Live on a sailboat in the Mediterranean for two weeks",
      ],
    },
    {
      category: "Health",
      items: [
        "Eat more veggies and meat, less sugar",
        "Work out three times per week",
        "Get to 8% bodyfat once",
      ],
    },
    {
      category: "Skills",
      items: [
        "Learn to speak spanish",
        "Learn to play the piano",
        "Get better at Figma",
      ],
    },
    {
      category: "Finances",
      items: [
        "Have a paid off house",
        "Earn over 10k€ per month",
      ],
    },
    {
      category: "Relationships",
      items: [
        "Hold a family retrospective once a week",
        "Spend each saturday with the family",
      ],
    },    
  ],
  achievements: [
    { img: "assets/achievement1.png", label: "Slayer of a thousand bugs" },
    { img: "assets/achievement2.png", label: "Attended 250+ standup meetings" },
    { img: "assets/achievement3.png", label: "50 Retros" },
    { img: "assets/achievement4.png", label: "100 Merge requests" },
  ],
};

function App() {
  return (
    <div className="App">
      <div id="container">
        <div id="basicInfo">
          <img src={character.avatar} alt="Profile"></img>
          <h4>{character.name}
          <br/>
          City: {character.location}</h4>
        </div>
        <div id="Classes">
          <h3>Classes</h3>
          <ul>
            <h5><li>{JSON.stringify(character.classes[0].rank).replace(/^"|"$/g,'')} {JSON.stringify(character.classes[0].class).replace(/^"|"$/g,'')}</li>
                <li>{JSON.stringify(character.classes[1].rank).replace(/^"|"$/g,'')} {JSON.stringify(character.classes[1].class).replace(/^"|"$/g,'')}</li>
                <li>{JSON.stringify(character.classes[2].rank).replace(/^"|"$/g,'')} {JSON.stringify(character.classes[2].class).replace(/^"|"$/g,'')}</li>
            </h5>
          </ul>
        </div>

        <div id="Bio">
          <h3>Bio</h3>
          <h6>{character.bio}</h6>
        </div>

        <div id="Achievements">
          <h3>Achievements</h3>
          <ul>
            <div id="achievementsContainer">
            <li><img src={character.achievements[0].img} alt="achievements1"></img>
            <h6>{JSON.stringify(character.achievements[0].label).replace(/^"|"$/g,'')}</h6></li>
            <li><img src={character.achievements[1].img} alt="achievements2"></img>
            <h6>{JSON.stringify(character.achievements[1].label).replace(/^"|"$/g,'')}</h6></li>
            <li><img src={character.achievements[2].img} alt="achievements3"></img>
            <h6>{JSON.stringify(character.achievements[2].label).replace(/^"|"$/g,'')}</h6></li>
            <li><img src={character.achievements[3].img} alt="achievements4"></img>
            <h6>{JSON.stringify(character.achievements[3].label).replace(/^"|"$/g,'')}</h6></li>
            <li></li>
            </div>
          </ul>
        </div>

        <div id="Skills">
          <h3>Skills</h3>
          <ul>
            <li><h5>{JSON.stringify(character.skilltree[0].category).replace(/^"|"$/g,'')}</h5>
            <h6>      {JSON.stringify(character.skilltree[0].skills[0].name).replace(/^"|"$/g,'')} - {JSON.stringify(character.skilltree[0].skills[0].xp).replace(/^"|"$/g,'')} XP<br/>
                      {JSON.stringify(character.skilltree[0].skills[1].name).replace(/^"|"$/g,'')} - {JSON.stringify(character.skilltree[0].skills[1].xp).replace(/^"|"$/g,'')} XP</h6></li>
                      <li><h5>{JSON.stringify(character.skilltree[1].category).replace(/^"|"$/g,'')}</h5>
            <h6>      {JSON.stringify(character.skilltree[1].skills[0].name).replace(/^"|"$/g,'')} - {JSON.stringify(character.skilltree[1].skills[0].xp).replace(/^"|"$/g,'')} XP<br/>
                      {JSON.stringify(character.skilltree[1].skills[1].name).replace(/^"|"$/g,'')} - {JSON.stringify(character.skilltree[1].skills[1].xp).replace(/^"|"$/g,'')} XP<br/>
                      {JSON.stringify(character.skilltree[1].skills[2].name).replace(/^"|"$/g,'')} - {JSON.stringify(character.skilltree[1].skills[2].xp).replace(/^"|"$/g,'')} XP<br/>
                      {JSON.stringify(character.skilltree[1].skills[3].name).replace(/^"|"$/g,'')} - {JSON.stringify(character.skilltree[1].skills[3].xp).replace(/^"|"$/g,'')} XP</h6></li>
                      <li><h5>{JSON.stringify(character.skilltree[2].category).replace(/^"|"$/g,'')}</h5>
            <h6>      {JSON.stringify(character.skilltree[2].skills[0].name).replace(/^"|"$/g,'')} - {JSON.stringify(character.skilltree[2].skills[0].xp).replace(/^"|"$/g,'')} XP<br/>
                      {JSON.stringify(character.skilltree[2].skills[1].name).replace(/^"|"$/g,'')} - {JSON.stringify(character.skilltree[2].skills[1].xp).replace(/^"|"$/g,'')} XP<br/>
                      {JSON.stringify(character.skilltree[2].skills[2].name).replace(/^"|"$/g,'')} - {JSON.stringify(character.skilltree[2].skills[2].xp).replace(/^"|"$/g,'')} XP<br/>
                      {JSON.stringify(character.skilltree[2].skills[3].name).replace(/^"|"$/g,'')} - {JSON.stringify(character.skilltree[2].skills[3].xp).replace(/^"|"$/g,'')} XP</h6></li>
          </ul>
        </div>

        <div id="Inventory">
          <h3>Inventory</h3>
          <ul>
          <li><h5>  {JSON.stringify(character.inventory[0].category).replace(/^"|"$/g,'')}</h5>
          <h6>        {JSON.stringify(character.inventory[0].items[0]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.inventory[0].items[1]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.inventory[0].items[2]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.inventory[0].items[3]).replace(/^"|"$/g,'')}</h6></li>
          <li><h5>  {JSON.stringify(character.inventory[1].category).replace(/^"|"$/g,'')}</h5>
          <h6>        {JSON.stringify(character.inventory[1].items[0]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.inventory[1].items[1]).replace(/^"|"$/g,'')}</h6></li>
            </ul>
          </div>
        <div id="Goals">
          <h3>Growth map</h3>
          <ul>
            <div id="goalsContainer">
            <li><h5>{JSON.stringify(character.goals[0].category).replace(/^"|"$/g,'')}<br/></h5>
            <h6>      {JSON.stringify(character.goals[0].items[0]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.goals[0].items[1]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.goals[0].items[2]).replace(/^"|"$/g,'')}</h6></li>
            <li><h5>{JSON.stringify(character.goals[1].category).replace(/^"|"$/g,'')}<br/></h5>
            <h6>      {JSON.stringify(character.goals[1].items[0]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.goals[1].items[1]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.goals[1].items[2]).replace(/^"|"$/g,'')}</h6></li>
            <li><h5>{JSON.stringify(character.goals[2].category).replace(/^"|"$/g,'')}<br/></h5>
            <h6>      {JSON.stringify(character.goals[2].items[0]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.goals[2].items[1]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.goals[2].items[2]).replace(/^"|"$/g,'')}</h6></li>
            <li><h5>{JSON.stringify(character.goals[3].category).replace(/^"|"$/g,'')}<br/></h5>
            <h6>      {JSON.stringify(character.goals[3].items[0]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.goals[3].items[1]).replace(/^"|"$/g,'')}</h6></li>
            <li><h5>{JSON.stringify(character.goals[4].category).replace(/^"|"$/g,'')}<br/></h5>
            <h6>      {JSON.stringify(character.goals[4].items[0]).replace(/^"|"$/g,'')}<br/>
                      {JSON.stringify(character.goals[4].items[1]).replace(/^"|"$/g,'')}</h6></li>
            </div>
          </ul>
        </div>

        </div>
    </div>
  );
}

export default App;
