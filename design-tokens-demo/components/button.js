import React, { Component } from 'react';
import styled from 'styled-components';

import * as tokens from '../../tokens/src/style-dictionary-dist/variables.js'

const Box = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
/*  margin: `${tokens.SpacingMedium} auto 0`, */
  backgroundColor: tokens.SemanticPrimaryDark,
  width: '500px',
  height: '500px',
  borderRadius: '10px',
});


class MyComponent extends Component {
  render() {
    return (
      <Box>
          <Text>
          </Text>
      </Box>
    );
  }
}

export default MyComponent;