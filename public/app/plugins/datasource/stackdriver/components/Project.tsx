import React from 'react';
import { Select } from '@grafana/ui';
import StackdriverDatasource from '../datasource';

export interface Props {
  datasource: StackdriverDatasource;
}

interface State {
  projectName: string;
}

export class Project extends React.Component<Props, State> {
  state: State = {
    projectName: 'Loading project...',
  };

  async componentDidMount() {
    const projectName = await this.props.datasource.getDefaultProject();
    this.setState({ projectName });
  }

  render() {
    const { projectName } = this.state;

    const options = [{ key: projectName, label: projectName, value: projectName }];
    const value = options[0];

    return (
      <div className="gf-form">
        <span className="gf-form-label width-9 query-keyword">Project</span>
        <Select className="gf-form-input width-15" isDisabled={true} options={options} value={value} />
      </div>
    );
  }
}
