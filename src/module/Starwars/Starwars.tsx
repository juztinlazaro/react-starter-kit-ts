import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';

const Starwars = (props: any) => {
  const { starwars, getStarwarsRequest, loading, getStarwarsConfirm } = props;
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

      {!loading && starwars.map((hero: any) => <h5>{hero.name}</h5>)}

      <button onClick={handleGetStarwars}> get starwars </button>

      {isConfirm && <button onClick={handleConfirmGet}> Confirm starwars </button>}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starwars);
