import withStyles from '../../hoc/withStyles';
import CommentsListStyles from './CommentsList.style';
import Comment from "../Comments/Comments";


const CommentsList =  ({ comments }) => (
  <React.Fragment>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </React.Fragment>
);


export default withStyles(CommentsList,CommentsListStyles);
