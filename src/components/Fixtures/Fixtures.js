import React, { useEffect, useState } from "react";
import { shuffle } from "../helpers/helperFunction";
import teams from "../../data/Teams.json";
import Fixture from "./Fixture";
import "./Fixtures.css";

export default function Fixtures() {
  const [fixtures, setFixtures] = useState([]);
  const [score, setScore] = useState([]);

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

  const formatFixtures = fixtures.map((fixture, index) => {
    return <Fixture fixture={fixture} key={index} />;
  });

  return (
    <>
      <h1>Fixtures</h1>
      <div className="fixtures-list">{formatFixtures}</div>
    </>
  );
}
