import { css } from 'styled-components';

const styles = css`
    height:32px;
    display:flex;
    color:${props => props.theme.colors.BLACK};
    background-color:${props => props.theme.colors.HEADER.BACKGROUND};
    width:100%;
    margin: ${props => props.theme.spacing.ELEM_SPACING.MED} 0;
    text-align:left;
    
      nav > * {
        display: inline-block;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-title {
        font-weight: bold;
      }
      nav .back-button {
        font-size: 0.9rem;
        padding-right: ${props => props.theme.spacing.ELEM_SPACING.MED};
        cursor: pointer;
        color:${props => props.theme.colors.BLACK};
      }
 
`;

export default styles;

