import SingleComment from "./SingleComment";

function CommentList({ resultsFetchComments }) {
    return (
        <>
            {
                resultsFetchComments.map(comment => (
                    <SingleComment
                        key={comment._id}
                        comment={comment} />
                ))
            }

        </>
    )
}

export default CommentList;