import React from 'react';
import PropTypes from 'prop-types';

import { X, ArrowUpRightSquare } from 'react-bootstrap-icons';
import { Carousel } from 'react-bootstrap';
import { Modal, Container } from './styles';

function ModalEdit(props) {
  return (
    <Container show={props.show}>
      <Modal>
        <X onClick={props.close} className="close-icon" size={25} />
        <div className="card-img">
          {Object.keys(props.properties.advertisementAssets).length > 2 && (
            <Carousel interval={999999999}>
              {Object.values(props.properties.advertisementAssets).map(
                (image) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image.advertisementThumbnails?.thumb_xs?.url}
                      alt="First slide"
                    />
                  </Carousel.Item>
                )
              )}
            </Carousel>
          )}
          {(props.properties.advertisementAssets.advertisementThumbnails
            .inventory_m.url ||
            props.properties.advertisementAssets.advertisementThumbnails
              .thumb_xs.url) && (
              <img
                className="d-block w-100"
                src={
                props.properties.advertisementAssets.advertisementThumbnails
                  .inventory_m.url ||
                props.properties.advertisementAssets.advertisementThumbnails
                  .thumb_xs.url
              }
                alt="First slide"
              />
          )}
        </div>
        <div className="card-infos">
          <div className="title">
            <p>{props.properties.title}</p>
          </div>
          <div className="form-group">
            <div className="address">
              <h1>Address:</h1>
              <p>{props.properties.realestateSummary.address.fullAddress}</p>
            </div>
            <div className="sell-price">
              <h1>Sell Price:</h1>
              <p>
                {Math.round(props.properties.advertisementPrice.sellPrice)}
                <span>€</span>
              </p>
            </div>
            <div className="base-rent">
              <h1>Base Rent:</h1>
              <p>
                {Math.round(props.properties.advertisementPrice.baseRent)}
                <span>€</span>
              </p>
            </div>
            <div className="rooms">
              <h1>Bedrooms:</h1>
              <p>{props.properties.realestateSummary.numberOfRooms}</p>
            </div>
            <div className="space">
              <h1>m²:</h1>
              <p>{Math.floor(props.properties.realestateSummary.space)}</p>
            </div>
            <div className="maps">
              <a
                target="_blank"
                href={`https://maps.google.com/?q=${props.properties.realestateSummary.address.location.coordinates[0]},${props.properties.realestateSummary.address.location.coordinates[1]}`}
              >
                Ver no Google Maps
              </a>
              <ArrowUpRightSquare />
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
}

export default ModalEdit;

ModalEdit.propTypes = {
  advertisementAssets: PropTypes.any,
  properties: PropTypes.any,
  show: PropTypes.bool,
  close: PropTypes.func,
  realestateSummary: PropTypes.any,
  advertisementPrice: PropTypes.any,
  numberOfRooms: PropTypes.number,
  space: PropTypes.number,
  title: PropTypes.string,
};
