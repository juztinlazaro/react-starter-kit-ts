import * as React from 'react';
import { connect } from 'react-redux';
import { getHomeDataEpics } from '../../store/home/actions';

interface ITestProps {
  getHomeDataEpics: () => void;
}

class Test extends React.Component<ITestProps, {}> {
  onGetBlog = () => {
    this.props.getHomeDataEpics();
  };

  render() {
    return (
      <div>
        <h1>Test component</h1>
        <button onClick={this.onGetBlog}>get blog</button>
      </div>
    );
  }
}

export default connect(
  null,
  { getHomeDataEpics },
)(Test);
