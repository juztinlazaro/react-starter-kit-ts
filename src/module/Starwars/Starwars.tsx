import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    return () => {
      getPlanetsCancel();
    };
  }, []);

  const handleGetStarwars = () => {
    setConfirm(true);
    getPlanetsFork();
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
        <button onClick={() => getPlanetsSaga()}> get planet </button>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starwars);
