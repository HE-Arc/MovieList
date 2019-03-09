import React from 'react';

class ListMovie extends React.Component {
    constructor(props)
    {
      super(props);
    }

    createListGenres(currentGenres) {
        let genres = JSON.parse(this.props.genres);
        let listGenres = [];

        currentGenres.forEach(pk => {
            if (listGenres.length > 0)
            {
                listGenres.push(', '); 
            }
            listGenres.push(genres.filter( genre => genre.pk == pk)[0].fields.name);
        });

        return listGenres;
    }
    createThumbnails() {
        let listThumbails = [];
        if (this.props.movies != null && this.props.movies != undefined)
        {
            JSON.parse(this.props.movies).forEach(movie => {
                listThumbails.push(
                    <div className="tile box is-parent is-vertical" key={ movie.pk }>
                        <div className="tile is-child is-12 has-text-centered">
                            <h1 className="subtitle has-text-weight-bold">{ movie.fields.name }</h1>
                        </div>
                        <div className="tile is-child">
                            <div className="tile">
                                <div className="tile is-2 has-text-centered">
                                    <figure className="container image is-128x128">
                                        <img src={ movie.fields.poster_link } alt={ movie.fields.name } />
                                    </figure>                              
                                </div>
                                <div className="tile is-10 is-vertical is-parent">
                                        <div className="tile is-child">
                                            <span className="has-text-weight-bold">Genre </span>
                                            <span>{this.createListGenres(movie.fields.genres)}</span>
                                        </div>
                                        <div className="tile is-child">
                                            <span className="has-text-weight-bold">Note </span>
                                            <span>{ movie.fields.note }</span>
                                        </div>
                                    <div className="tile is-child">
                                        <h2 className="has-text-weight-bold">Plot</h2>
                                        <span>{ movie.fields.plot }</span>
                                    </div>          
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
            return listThumbails;
        }
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="tile is-ancestor is-vertical">
                        <div className="tile is-parent">
                            <div className="tile is-child">
                                <h1 className="title">Recherche de film</h1>
                            </div>
                        </div>
                        {this.createThumbnails()}
                    </div>
                </div>
            </section>
        );
    }    
}
export default ListMovie;