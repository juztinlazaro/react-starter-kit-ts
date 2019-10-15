import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';

const Starwars = (props: any) => {
  const {
    starwars,
    getStarwarsRequest,
    getStarwarsConfirm,
    getPlanetsSaga,
    getPlanetsFork,
    getPlanetsCancel,
    loading,
    planets
  } = props;
  const [isConfirm, setConfirm] = useState(false);

  const handleGetStarwars = () => {
    setConfirm(true);
    getStarwarsRequest();
  };

  const handleConfirmGet = () => {
    getStarwarsConfirm();
  };

  return (
    <div className="starwars-section">
      <h2>Starwars Saga</h2>
      {loading && <h1>Loading...</h1>}

      <div>
        {!loading && starwars.map((hero: any) => <h5>{hero.name}</h5>)}

        <button onClick={handleGetStarwars}> get starwars hero </button>
        {isConfirm && <button onClick={handleConfirmGet}> Confirm starwars </button>}
      </div>

      <hr />

      <div>
        {!loading && planets.map((planet: any) => <h5>{planet.name}</h5>)}
        <button onClick={() => getPlanetsFork()}> get planet </button>
        <button onClick={() => getPlanetsCancel()}>Cancel</button>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starwars);
