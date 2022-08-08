import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import Lane from '../components/Lane/Lane';

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			tickets: [],
		};
		this.onDragOver = this.onDragOver.bind(this);
		this.onDrop = this.onDrop.bind(this);
	}
	componentDidUpdate(prevProps) {
		if (prevProps.data !== this.props.data) {
			this.setState({ tickets: this.props.data });
		}
	}
}

export default Board;