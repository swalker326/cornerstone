import React from 'react';
import utils from '@bigcommerce/stencil-utils';
import styled from 'styled-components';


const Card = (props) => {
    const Title = styled.h3`
      font-size: 15px;
      color: #333;
      `;
    const CardWrapper = styled.div`
      margin: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 20%;
    `;
    return (
        <CardWrapper className='Product-Card'>
            <a href={props.product.url}>
                <img src={utils.tools.imageSrcset.getSrcset(props.product.image.data, { '1x': '200x359' })}></img>
            </a>
            <div>
                <Title>
                    <a href={props.product.url}>
                        {props.product.name}
                    </a>
                </Title>
                <span>{props.product.price.without_tax.formatted}</span>
            </div>
        </CardWrapper>

    );
};

export default Card;
