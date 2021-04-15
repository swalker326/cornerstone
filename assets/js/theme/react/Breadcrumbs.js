import React from 'react';
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
    const BreadcrumbDivider = styled.span`
      margin: 0 5px;
    `;
    const breadcrumbLength = props.breadcrumbs.length;
    return (
        <BreadcrumbWrapper className='Breadcrumbs' >
            <BreadcrumbList>
                {
                    props.breadcrumbs.map((breadcrumb, i) => (
                        <li>
                            <BreadcrumbLink href={breadcrumb.url}>
                                {breadcrumb.name}
                            </BreadcrumbLink>
                            {(breadcrumbLength !== i + 1) ? <BreadcrumbDivider>/</BreadcrumbDivider> : null}
                        </li>
                    ))}
            </BreadcrumbList>
        </BreadcrumbWrapper>
    );
};

export default Breadcrumbs;
