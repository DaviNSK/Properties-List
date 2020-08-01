import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PaginationComponent(props) {
  const [totalPages, setTotalPages] = useState(0);
  const { pagination } = props;

  const init = async () => {
    const { total, limit } = props.pagination;

    setTotalPages(total / limit.last);
  };

  const getPages = () => {
    const data = [];

    if (!totalPages) return [];

    for (
      let i =
        totalPages - pagination.page <= 6 ? totalPages - 5 : pagination.page;
      i <= totalPages;
      i++
    ) {
      data.push(i);
    }

    return data;
  };

  const changePagination = (page, increase) => {
    props.changePagination({
      page: page,
      limit: {
        first: pagination.limit.first + increase,
        last: pagination.limit.last + increase,
      },
      total: pagination.total,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <Pagination>
        {totalPages > 0 && (
          <Pagination.Prev
            style={{ color: '#000' }}
            onClick={() =>
              pagination.page > 1 && changePagination(pagination.page - 1, -10)
            }
          />
        )}
        {getPages().map((page, i) => {
          if (i > 5) return null;

          return (
            <Pagination.Item
              onClick={() =>
                page !== pagination.page
                  ? changePagination(page, pagination.page > page ? -10 : 10)
                  : ''
              }
              key={page}
              active={page === pagination.page}
            >
              {page}
            </Pagination.Item>
          );
        })}
        <Pagination.Next
          onClick={() =>
            pagination.page < totalPages &&
            changePagination(pagination.page + 1, 10)
          }
        />
      </Pagination>
    </Container>
  );
}

PaginationComponent.propTypes = {
  pagination: PropTypes.any,
  changePagination: PropTypes.func,
  total: PropTypes.any,
  limit: PropTypes.any,
};
