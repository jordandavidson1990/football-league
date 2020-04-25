import React, { useEffect, useState } from "react";
import { shuffle } from "../helpers/helperFunction";
import requests from "../api/requests";
import Fixture from "./Fixture";
import "./Fixtures.css";

export default function Fixtures({ folks }) {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    requests.getFixtures().then((data) => setFixtures(shuffle(data)));
  }, []);

  const formatFixtures = fixtures.map((fixture, index) => {
    return <Fixture fixture={fixture} key={index} folks={folks} />;
  });

  return (
    <>
      <h1>Fixtures</h1>
      <div className="fixtures-list">{formatFixtures}</div>
    </>
  );
}
