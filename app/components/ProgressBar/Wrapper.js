import styled from 'styled-components';

export default styled.div`
  top: 0;
  left: 0;
  height: 25px;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  visibility: ${(props) => props.hidden ? 'hidden' : 'visible'};
  opacity: ${(props) => props.hidden ? '0' : '1'};
  transition: all 500ms ease-in-out;
  z-index: ${(props) => props.hidden ? '-10' : '9999'};
`;
