import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { UseAsin } from "../ContextAsin/ContextAsin";

function CommentArea() {

    const { selected: asin } = UseAsin()





    return (
        <>
            <AddComment
                asin={asin} />
        </>
    )
}

export default CommentArea;