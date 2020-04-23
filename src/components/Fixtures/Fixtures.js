import React, { useEffect, useState } from "react";
import teams from "../../data/Teams.json";

export default function Fixtures() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    getFixtures();
  }, []);

  const getFixtures = () => {
    var arr1 = teams.slice(); // copy array

    arr1.sort(function () {
      return 0.5 - Math.random();
    }); // shuffle arrays

    const fixtures = [];
    arr1.forEach(() => {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[0] !== arr1[i]) {
          fixtures.push([arr1[0], arr1[i]]);
        }
      }
      arr1.shift();
    });
    setFixtures(fixtures);
  };

  const formatFixtures = fixtures.map((fixture, index) => {
    console.log(fixture);
    return (
      <tr key={index}>
        <td>{fixture[0].name}</td>
        <td>V</td>
        <td>{fixture[1].name}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>Fixtures</h1>
      <table>
        <tbody>{formatFixtures}</tbody>
      </table>
    </>
  );
}
