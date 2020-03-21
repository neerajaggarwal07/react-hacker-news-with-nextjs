import { css } from 'styled-components';

const styles = css`
  .points{
    color:${props => props.theme.colors.BLACK};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy2}px;
    font-weight:${props => props.theme.fonts.fontWeight.bold};
    width:20px;
    display:inline-block;
  }
  .title{
    color:${props => props.theme.colors.BLACK};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy2}px;
    font-weight:${props => props.theme.fonts.fontWeight.bold};
    
  }
  .author{
    color:${props => props.theme.colors.TEXT.BLACK};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy1}px;
  }
  .timestamp{
    color:${props => props.theme.colors.TEXT.DARKGRAY};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy1}px;
  }
  .url{
    color:${props => props.theme.colors.TEXT.DARKGRAY};
    text-decoration:none;
  }
  .label{
    color:${props => props.theme.colors.TEXT.BLACK};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy1}px;
  }
  .comments{
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy2}px;
    display:inline-block;
    padding: 0 4px;
    text-decoration:none;
  }
  span{
    display:inline-block;
    padding:0 ${props => props.theme.spacing.ELEM_SPACING.XXS};
  }
  .icon-up:before {
    content: "\\25B2";
    color:${props => props.theme.colors.TEXT.GRAY};
    font-size:${props => props.theme.fonts.fontSize.body.bodytext.copy2}px;
  }
  li{
    color:${props => props.theme.colors.TEXT.DARK};
    
    padding: ${props => props.theme.spacing.ELEM_SPACING.XXS};
    &:nth-child(even){
        background-color: ${props => props.theme.colors.BACKGROUND.BEIGE};
    }
    &:nth-child(odd){
        background-color:${props => props.theme.colors.BACKGROUND.DARKBEIGE};
    }
  }
  
`;

export default styles;
