import withStyles from '../../hoc/withStyles';
import CommentsStyles from './Comments.style';

const Comment = ({ className, comment }) => (
    <div className={className}>
      <div className="comment-user">{comment.user}</div>
      <div
        className="comment-content"
        dangerouslySetInnerHTML={{ __html: comment.content }}
      />
      {comment.comments && (
        <div className="nested-comments">
          {comment.comments.map(nestedComment => (
            <Comment key={nestedComment.id} comment={nestedComment} />
          ))}
        </div>
      )}
  
    </div>
  );
  

  export default withStyles(Comment,CommentsStyles);
  