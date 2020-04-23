import React, { useEffect, useState } from "react";
import { shuffle } from "../helpers/helperFunction";
import teams from "../../data/Teams.json";
import "./Fixtures.css";

export default function Fixtures() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    getFixtures();
  }, []);

  const getFixtures = () => {
    let arr1 = teams.slice();

    const fixtures = [];
    fixtures.push([arr1[arr1.length - 2], arr1[arr1.length - 1]]);
    arr1.forEach(() => {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[0] !== arr1[i]) {
          const newFixture = [arr1[0], arr1[i]];
          fixtures.push(newFixture);
        }
      }
      arr1.splice(0, 1);
    });
    setFixtures(shuffle(fixtures));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit:", event.target);
  }

  const formatFixtures = fixtures.map((fixture, index) => {
    return (
      <div key={index}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name1">
            <img src={`${fixture[0].team}.png`} alt={fixture[0].team} />
          </label>
          <input name="name1" type="number" min={0} />
          V
          <input name="name2" type="number" min={0} />
          <label htmlFor="name2">
            <img src={`${fixture[1].team}.png`} alt={fixture[1].team} />
          </label>
          <br />
          <input type="submit" value="Submit" />
          <hr />
        </form>
      </div>
    );
  });

  return (
    <>
      <h1>Fixtures</h1>
      <div className="fixtures-list">{formatFixtures}</div>
    </>
  );
}
