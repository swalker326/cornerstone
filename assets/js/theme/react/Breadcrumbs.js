import React from 'react';
import utils from '@bigcommerce/stencil-utils';
import styled from 'styled-components';


const Breadcrumbs = (props) => {
    const BreadcrumbWrapper = styled.div`
      list-style: none;
    `;
    const BreadcrumbList = styled.ul`
      list-style: none;
      display: flex;
      justify-content: center;
    `;
    const BreadcrumbLink = styled.a`
      text-decoration: none;
    `;
    return (
        <BreadcrumbWrapper className='Breadcrumbs' >
            <BreadcrumbList>
                {
                    props.breadcrumbs.map((breadcrumb) => (
                        <li>
                            <BreadcrumbLink href={breadcrumb.url}>
                                {breadcrumb.name}
                            </BreadcrumbLink>
                            <span> / </span>
                        </li>
                    ))}
            </BreadcrumbList>
        </BreadcrumbWrapper>
    );
};

export default Breadcrumbs;
