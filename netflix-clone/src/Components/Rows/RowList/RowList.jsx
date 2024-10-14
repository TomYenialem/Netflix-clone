import React from "react";
import Row from "../Row/Row";

import request from "../../../Utilies/request";

export default function RowList() {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS" fechUrl={request.tv} isLarge={true} />

      <Row title="ACTION" fechUrl={request.action} />
      <Row title="HORROR" fechUrl={request.horror} />
      <Row title="Adventure" fechUrl={request.Adventure} />
      <Row title=" Animation" fechUrl={request.Animation} />
      <Row title=" comedy" fechUrl={request.comedy} />
      <Row title="fantasy" fechUrl={request.fantasy} />
      <Row title="romance" fechUrl={request.romance} />
      <Row title=" war" fechUrl={request.war} />
      <Row title="triller" fechUrl={request.triller} />
      <Row title="History" fechUrl={request.History} />
      <Row title="Music" fechUrl={request.Music} />
      <Row title=" Drama" fechUrl={request.Drama} />
      <Row />
      <Row />
    </div>
  );
}
