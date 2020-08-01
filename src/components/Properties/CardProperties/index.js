import React from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CardProperties(props) {
  if (!props.advertisementAssets || !props.realestateSummary) return null;
  return (
    <Container>
      <div className="card-img">
        {Object.keys(props.advertisementAssets).length > 2 && (
          <Carousel interval={999999999}>
            {Object.values(props.advertisementAssets).map((image, key) => (
              <Carousel.Item key={key}>
                <img
                  className="d-block w-100"
                  src={image.advertisementThumbnails?.thumb_xs?.url}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
        {(props.advertisementAssets.advertisementThumbnails.inventory_m.url ||
          props.advertisementAssets.advertisementThumbnails.thumb_xs.url) && (
          <img
            className="d-block w-100"
            src={
              props.advertisementAssets.advertisementThumbnails.inventory_m
                .url ||
              props.advertisementAssets.advertisementThumbnails.thumb_xs.url
            }
            alt="First slide"
          />
        )}
      </div>
      <div className="card-infos" onClick={() => props.openModal()}>
        <div className="title">
          <p>{props.title}</p>
        </div>
        <div className="address">
          <p>{props.realestateSummary.address.postalCode}</p>
          <p>
            {props.realestateSummary.address.city}
            <span> / {props.realestateSummary.address.street}</span>
          </p>
        </div>
        <div className="infos-properties">
          <p className="price">
            {Math.round(props.advertisementPrice.sellPrice)} <span>€</span>
          </p>
          <div className="rooms">
            <p>
              {props.realestateSummary.numberOfRooms} <span>Zimmer</span>
            </p>
          </div>
          <div className="space">
            <p>
              <span>ab</span> {Math.floor(props.realestateSummary.space)}
              <span> m²</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

CardProperties.propTypes = {
  advertisementAssets: PropTypes.any,
  realestateSummary: PropTypes.any,
  advertisementPrice: PropTypes.any,
  numberOfRooms: PropTypes.number,
  space: PropTypes.number,
  openModal: PropTypes.func,
  title: PropTypes.string,
};
