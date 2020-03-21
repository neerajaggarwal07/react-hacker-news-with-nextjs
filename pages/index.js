import fetch from "isomorphic-fetch";
import { ThemeProvider } from "styled-components";
import theme from "../styles/themes/Default/index";
import GlobalStyle from "../styles/GlobalStyles";
import NewsFeedsList from "../components/organisms/NewsFeeds/NewsFeedsList";
import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";
import Error from "next/error";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.theme = theme;
  }
  static async getInitialProps({ req, res, query }) {
    let news;
    let page;

    try {
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      news = await response.json();
      console.log(news);
    } catch (err) {
      console.log(err);
      news = [];
    }

    return { news, page };
  }

  render() {
    const { news, page } = this.props;
    return (
      <ThemeProvider theme={this.theme}>
        <GlobalStyle />
        <Header
          title="Hacker News"
          description="A Hacker News clone made with Next.js"
        ></Header>
        {news.length ? (
          <NewsFeedsList itemsList={news} />
        ) : (
          <Error statusCode={503} />
        )}
        <Footer page={page}></Footer>
      </ThemeProvider>
    );
  }
}

export default Index;
