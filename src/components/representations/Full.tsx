import { Layout } from 'antd';
import { StyledFull } from 'components/Rates/style';
import React from 'react';
import Header from '../Header';
import Plain from '../Plain';

const Full = ({ color }) => {
    return (
        <Layout style={{ minHeight: '100%' }}>
            <Header>Chat-solution</Header>
            <StyledFull>
                <Plain color={color} />
            </StyledFull>

        </Layout >
    );
};

export default Full;