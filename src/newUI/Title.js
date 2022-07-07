import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title() {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            <h3>data fetched</h3>
        </Typography>
    );
}

export default Title;