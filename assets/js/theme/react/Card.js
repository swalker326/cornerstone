import React from 'react';
import utils from '@bigcommerce/stencil-utils';
import styled from 'styled-components';


const Card = (props) => {
  console.log("props", props); // eslint-disable-line
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
    const ImageButton = styled.a`
       border: 1px solid #313131;
    `;
    const ProductImg = styled.img`
      border: 1px solid #fff;
    `;
    const ImageButtons = styled.div`
       position: absolute;
       display: flex;
       top: 45%;
       justify-content: center;
       align-items: center;
       height: 30px;
       width: 100%;
    `;
    const ImageWrapper = styled.div`
      position: relative;
      ${ProductImg}:hover {
        border: 1px solid red;
        ${ImageButtons} {
          border: 1px solid purple;
        }
      }
    `;

    const addToCart = (event) => {
        event.preventDefault();
        console.log("Adding to Cart"); // eslint-disable-line
    };
    return (
        <CardWrapper className='Product-Card'>
            <ImageWrapper>
                <a href={props.product.url}>
                    <ProductImg src={utils.tools.imageSrcset.getSrcset(props.product.image.data, { '1x': '200x359' })}></ProductImg>
                </a>
                { props.product.add_to_cart_url ?
                    <ImageButtons>
                        <ImageButton data-event-type="product-click" data-button-type="add-cart" href={props.product.add_to_cart_url} className='button button--small card-figcaption-button'>Add to Cart</ImageButton>
                    </ImageButtons>
                    : null
                }
            </ImageWrapper>
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
