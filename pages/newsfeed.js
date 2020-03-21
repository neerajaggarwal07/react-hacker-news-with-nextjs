import fetch from "isomorphic-fetch";
import { ThemeProvider } from "styled-components";
import theme from "../styles/themes/Default/index";
import GlobalStyle from "../styles/GlobalStyles";

import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";

import NewsTitleDetails from "../components/organisms/NewsTitleDetails/NewsTitleDetails";

import CommentList from "../components/organisms/CommentsList/CommentsList";
import LABELS from '../constants/labels';

export default class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.theme = theme;
  }
  static async getInitialProps({ req, res, query }) {
    let newsFeed;

    try {
      const newsId = query.id;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/item/${newsId}`
      );

      newsFeed = await response.json();
    } catch (error) {
      console.log(error);
      newsFeed = null;
    }
    return { newsFeed };
  }

  render() {
    const { newsFeed } = this.props;
    return (
      <ThemeProvider theme={this.theme}>
        <GlobalStyle />
        <Header
          title="Hacker News"
          description="A Hacker News clone made with Next.js"
          backButton
        ></Header>
        <NewsTitleDetails newsFeed={newsFeed}/>
        <main>
          {newsFeed.comments.length > 0 ? (
            <CommentList comments={newsFeed.comments} />
          ) : (
            <div>{LABELS. NO_COMMENT}</div>
          )}
        </main>

        <Footer></Footer>
        <style jsx>{`
          main {
            padding: 1em;
          }
          
        `}</style>
      </ThemeProvider>
    );
  }
}
