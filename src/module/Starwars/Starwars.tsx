import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';

const Starwars = (props: any) => {
  const { starwars, getStarwarsRequest, loading } = props;

  return (
    <div className="starwars-section">
      <h2>Starwars Saga</h2>
      {loading && <h1>Loading...</h1>}

      {!loading && starwars.map((hero: any) => <h5>{hero.name}</h5>)}

      <button onClick={() => getStarwarsRequest()}> get starwars </button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starwars);
