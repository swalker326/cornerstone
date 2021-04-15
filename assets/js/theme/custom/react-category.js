import React from 'react';
import ReactDOM from 'react-dom';
import PageManager from '../page-manager';
import Breadcrumbs from '../react/Breadcrumbs';
import PageTitle from '../react/PageTitle'
import Card from '../react/Card';
import styled from 'styled-components';

const Category = (props) => {
    console.log("props", props); // eslint-disable-line
    const CategoryWrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `;
    const products = props.context.category.products;
    return (
        <div>
            <Breadcrumbs breadcrumbs={props.context.breadcrumbs} />
            <PageTitle title={props.context.category.name} ></PageTitle>
            <CategoryWrapper>
                {
                    products.map((product) => (
                        <Card product={product} />
                    ))}
            </CategoryWrapper>
        </div>
    );
};

export default class ReactCategory extends PageManager {
    onReady() {
        const container = $('#root')[0];
        ReactDOM.render(<Category context={this.context}/>, container);
    }
}
