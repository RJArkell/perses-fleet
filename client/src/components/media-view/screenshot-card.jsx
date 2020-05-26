import React from "react";
import { Card } from 'react-bootstrap';

export class ScreenshotCard extends React.Component {
  render() {
    const { s } = this.props;

    return (
      <Card className="infocard h-100">
        <a target="_blank" className="h-100" href={s.Address}>
          <Card.Img className="h-100" src={s.Address} />
        </a>
        <Card.Text className="text-center">
          Submitted by: {s.User}
        </Card.Text>
      </Card>
    )
  }
}