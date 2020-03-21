import withStyles from "../../hoc/withStyles";
import NewsTitleDetailsStyles from "./NewsTitleDetails.style";
import BodyCopy from "../../atoms/BodyCopy/BodyCopy";
import LABELS from "../../../constants/labels";

const NewsTitleDetails = ({ className, newsFeed }) => (
  <div className={className}>
    <h1 className="news-title">
      <a href={newsFeed.url}>{newsFeed.title}</a>
    </h1>
    <div className="news-details">
      <BodyCopy component="strong">
        {newsFeed.points} {LABELS.POINTS}
      </BodyCopy>
      <BodyCopy component="strong">
        {newsFeed.comments_count} {LABELS.COMMENTS}
      </BodyCopy>
      <BodyCopy component="strong">{newsFeed.time_ago}</BodyCopy>
    </div>
  </div>
);

export default withStyles(NewsTitleDetails, NewsTitleDetailsStyles);
