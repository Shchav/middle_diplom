export const comments = async (url, pause) => {

    const commentsBlock = document.querySelector('.comments-container')
    const commentItemLeft = commentsBlock.querySelectorAll('.comment-item')[0]
    const commentItemRight = commentsBlock.querySelectorAll('.comment-item')[1]

    // Загрузить комментарии
    const getComments = async () => {
        try {
            const res = await fetch(url)
            return await res.json()
        } catch (error) {
            commentsBlock.innerHTML = '<p style="display: block; margin-left: 34%;">Отзывы не доступны ...</p>'
            throw new Error("");
        }
    }

    // Сформировать новый комментарий на основе исходного 
    const fillData = (srcCommentItem, commentIndex) => {
        let commentItem

        const colorComment = srcCommentItem.querySelector('.review-arrow').className
            .replace('review-inner', '')
            .replace('review-arrow-right', '')
            .replace('review-arrow-left', '')
            .replace('review-arrow', '')
            .trim()
            .replace(/\s+/g, '')

        if (commentIndex % 2) {
            commentItem = commentItemLeft.cloneNode(true)
            commentItem.querySelector('.review-arrow').className =
                commentItem.querySelector('.review-arrow').className
                    .replace('review-green', colorComment)
        } else {
            commentItem = commentItemRight.cloneNode(true)
            commentItem.querySelector('.review-arrow').className =
                commentItem.querySelector('.review-arrow').className
                    .replace('review-gray', colorComment)
        }

        commentItem.querySelector('.avatar')
            .setAttribute('src', `images/users/${comments.comments[commentIndex].image != '' ?
                comments.comments[commentIndex].image : '../logotype.png'
                }`)
        const authorAndComment = commentItem.querySelectorAll('p')
        authorAndComment[0].textContent = comments.comments[commentIndex].author
        authorAndComment[1].textContent = comments.comments[commentIndex].comment

        return commentItem
    }

    const commentsBlockClone = commentsBlock.cloneNode(true)
    commentsBlock.innerHTML = '<img style="display: block; margin-left: 29%;" src="images/loader.gif"></img>'
    const comments = await getComments()
    commentsBlock.textContent = ''
    let i = 0
    for (i; i < 3; i++) {
        commentsBlock.append(fillData(commentsBlockClone.querySelectorAll('.comment-item')[i], i))
    }
    let commentIndex = i;

    setInterval(() => {
        const commentsItem = commentsBlock.querySelectorAll('.comment-item')

        const filledCommentItem = fillData(commentsItem[0], commentIndex)
        commentsItem[0].remove()

        commentIndex++
        if (commentIndex >= comments.comments.length)
            commentIndex = 0

        commentsBlock.append(filledCommentItem)

    }, pause)
}