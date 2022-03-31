{
    <div className="container">
    <h1 className="title is-2 header">{mountainDetail.name}</h1>
    <div className="tile is-ancestor">

  /* <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-child notification is-dark">
              <p className="tile">
                <img
                  className="largeImage"
                  src={mountainDetail.image}
                  alt="mountain"
                />
              </p>
            </div>

            <div className="tile is-parent">
              <article className="tile is-child notification is-light">
                <div className="tile">
                  <img
                    className="largeImage"
                    src={mountainDetail.map}
                    alt="map"
                  />
                </div>
              </article>
            </div>

            <div className="tile is-parent">
              <article className="tile is-child notification is-light">
                <p className="tile">
                  {mountainDetail.location}
                  {mountainDetail.country}
                  Vertical feet: {mountainDetail.vert}
                </p>
                <p className="subtitle">THIS IS SUBTITLE</p>
              </article>
            </div>
          </div>
        </div>

        <div>
          <h4>{mountainDetail.location}</h4>
          <h5>{mountainDetail.country}</h5>
          <h6>Vertical feet: {mountainDetail.vert}</h6>
        </div>
        <div>
          <h4>{mountainDetail.name} Runs </h4>
          <ul></ul>
        </div>
        <div>
          <h4>My runs at {mountainDetail.name}</h4>
          <ul>{ur}</ul>
        </div>

        <div className="field is-grouped">
          <Link to={`/user_mts_list/${id}`}>
            <button className="mt-4 mb-6 mr-4 button is-dark is-responsive is-outlined">
              My Mountains
            </button>
          </Link>
          <p>
            <Link to="/">
              <button className="mt-4 mb-6 button is-dark is-focused">
                Log Out
              </button>
            </Link>
          </p>
        </div>
</div> */
}
