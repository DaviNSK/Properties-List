import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DetailsProperties from '../../components/Properties/DetailsProperties';
import Pagination from './../../components/Pagination';
import CardProperties from './../../components/Properties/CardProperties';
import { Container, Card, CardsList } from './styles';

import Repository from './../../services/repository';
import * as PropertiesActions from './../../store/modules/properties/actions';


export default function Home() {
  const api = new Repository();
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  const [currentProperties, setCurrentProperties] = useState({});
  const [modalEdit, setModalEdit] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: {
      first: 0,
      last: 10,
    },
    total: 800,
  });

  const dummyData = () => {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({ id: i });
    }

    dispatch(PropertiesActions.setProperties(data));
  };

  const getProperties = async () => {
    const response = await api.getProperties();

    if (!response.data) return;

    dummyData();
    dispatch(PropertiesActions.setProperties(response.data.data));
    setPagination({ ...pagination, total: response.data.meta.count });
  };

  useEffect(() => {
    getProperties();
  }, []);

  const handlePagination = async (newPagination) => {
    await setPagination(newPagination);
  };

  const openModal = (data) => {
    setCurrentProperties(data);
    setModalEdit(true);
  };


  return (
    <>
      <Container>
        <CardsList>
          {properties.map((element, i) => {
            if (i < pagination.limit.first || i >= pagination.limit.last) {
              return;
            }

            return (
              <Card key={element._id?.$id || i}>
                <CardProperties
                  openModal={() => openModal(element)}
                  {...element}
                />
              </Card>
            );
          })}
        </CardsList>
        <div className="container-pagination">
          {properties.length > 0 && (
            <Pagination
              pagination={pagination}
              changePagination={(newPagination) =>
                handlePagination(newPagination)
              }
            />
          )}
        </div>
      </Container>
      {modalEdit && (
        <DetailsProperties
          show={modalEdit}
          properties={currentProperties}
          close={() => setModalEdit(false)}
        />
      )}
    </>
  );
}
