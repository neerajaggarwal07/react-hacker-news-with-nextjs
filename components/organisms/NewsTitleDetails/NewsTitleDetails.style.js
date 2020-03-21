

import { css } from 'styled-components';

const styles = css`
.news-title {
    font-size: 1.2rem;
    margin: 0;
    font-weight: 300;
    padding-bottom: 0.5em;
  }
  .news-title a {
    color: #333;
    text-decoration: none;
  }
  .news-title a:hover {
    text-decoration: underline;
  }
  .news-details {
    font-size: 0.8rem;
    padding-bottom: 1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 1em;
  }
  .news-details strong {
    margin-right: 1em;
  }
  .news-details a {
    color: #f60;
  }
 
`;

export default styles;

