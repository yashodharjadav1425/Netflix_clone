    import React from 'react';
    import Modal from "react-modal";

    const Detail = ({ selectedMovie, setSelectedMovie }) => {
        return (
            <div>
                {selectedMovie && (
                    <Modal
                        isOpen={true}
                        onRequestClose={() => setSelectedMovie(null)}
                        overlayClassName="custom-modal-backdrop"
                    >
                        <div className='modal-content'>
                            <div className="row">
                                <div className="container modal-body col col-12 col-sm-12 col-md-6 col-lg-6">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
                                        alt={selectedMovie.title}
                                        className="container img-modal"
                                    />
                                </div>
                                <div className="container modal-header col col-12 col-sm-12 col-md-6 col-lg-6">
                                    <h1 className="modal-title">{selectedMovie.title}</h1>
                                    <p className='modal-detail'>{selectedMovie.overview}</p>
                                    <p className='modal-date'><strong>Release Date :</strong>{selectedMovie.release_date}</p>
                                </div>

                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        );
    };

    export default Detail;
