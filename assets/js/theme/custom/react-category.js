import React from 'react';
import ReactDOM from 'react-dom';
import PageManager from '../page-manager';
import Card from '../react/Card';
import styled from 'styled-components';

const Category = (props) => {
    const CategoryWrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `;
    const products = props.context.category.products;
    return (
        <CategoryWrapper>
            {
                products.map((product) => (
                    <Card product={product} />
                ))}
        </CategoryWrapper>
    );
};

export default class ReactCategory extends PageManager {
    onReady() {
        const container = $('#root')[0];
        ReactDOM.render(<Category context={this.context}/>, container);
    }
}
