import Link from "next/link";
import { PropTypes } from "prop-types";

import Col from "../../atoms/Col/Col";
import Row from "../../atoms/Row/Row";

import withStyles from "../../hoc/withStyles";
import styles from "./NewsFeedsList.style";
import BodyCopy from "../../atoms/BodyCopy/BodyCopy";
import LABELS from "../../../constants/labels";

import Anchor from "../../atoms/Anchor/Anchor";
import VoteCounter from "../../molecules/VoteCounter/VoteCounter";
import ErrorBoundary from "../../molecules/ErrorBoundary/ErrorBoundary";

const NewsFeedsList = props => {
  const { className, itemsList } = props;

  return (
    <div className={className}>
      <ErrorBoundary>
        <ul>
          {itemsList.map(item => {
            const {
              id,
              points,
              title,
              user,
              time_ago,
              url,
              comments_count
            } = item;
            return (
              <li key={id}>
                <Row>
                  <Col lg="1" md="2" sm="4">
                    <BodyCopy component="span" className="points">
                      {points || 0}
                    </BodyCopy>
                    <VoteCounter itemList={itemsList} />
                  </Col>
                  <Col lg="11" md="10" sm="8">
                    <BodyCopy component="span" className="title">
                      {title}
                    </BodyCopy>
                    <Link href={`/newsfeed?id=${id}`}>
                      <a class="comments">{comments_count || 0} {LABELS.COMMENTS}</a>
                    </Link>
                    (
                    <Anchor
                      className="url"
                      rel="nofollow noreferrer noopener"
                      target="_blank"
                      href={url}
                    >
                      findwork.dev
                    </Anchor>
                    )
                    <BodyCopy component="span" className="label">
                      {LABELS.BY}
                    </BodyCopy>
                    <BodyCopy component="span" className="author">
                      {user}
                    </BodyCopy>
                    <BodyCopy component="span" className="timestamp">
                      {time_ago}
                    </BodyCopy>
                    {/* [
                    <Button
                      type="button"
                      ariaLabel={LABELS.HIDE}
                      variation="Link"
                      className="label"
                      onClick={() => {
                        hideClickHandler(id);
                      }}
                    >
                      {LABELS.HIDE}
                    </Button>
                    ] */}
                  </Col>
                </Row>
              </li>
            );
          })}
        </ul>
      </ErrorBoundary>
    </div>
  );
};

NewsFeedsList.propTypes = {
  className: PropTypes.string,
  itemsList: PropTypes.shape([]).isRequired,
  loadMoreHandler: PropTypes.func,
  hideClickHandler: PropTypes.func
};

NewsFeedsList.defaultProps = {
  className: "",
  loadMoreHandler: () => {},
  hideClickHandler: () => {}
};
export default withStyles(NewsFeedsList, styles);
