module.exports = {
    posts: (req, res) => {
        res.json({
            "id": 1,
            "title": "new post",
            "content": "this is new content"
        })
    }
}