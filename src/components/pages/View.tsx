import React, { FC } from 'react';

import Form from '../organisms/Form';
import Chart from '../organisms/Chart';
import Table from '../organisms/Table';
import Sidebar from '../organisms/Sidebar';
import Menu from '../organisms/Menu';

import Page from '../templates/Page';

const View: FC = () => (
    <Page>
        <Sidebar>
            <Form/>
        </Sidebar>
        <Menu/>
        <Chart/>
        <Table/>
    </Page>
);

export default View;
