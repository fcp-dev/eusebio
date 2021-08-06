import React from 'react';
import '../styles/widget.scss';

declare function fussballdeWidgetAPI(): any;

type FootballWidgetProps = {
  id: string,
  name: string,
  height: string
}

class FootballWidget extends React.Component<FootballWidgetProps> {
  private id: string;
  private name: string;
  private height: string;

  constructor(props: FootballWidgetProps) {
    super(props);
    this.id = props.id;
    this.name = props.name;
    this.height = props.height;
  }

  componentDidMount() {
    fussballdeWidgetAPI().showWidget(this.name, this.id);
  }

  render() {
    return(
      <div className={`widget-container utils-height-${this.height}`}>
        <div className="widget-content" id={this.name}></div>
      </div>
    );
  }
}

export default FootballWidget;