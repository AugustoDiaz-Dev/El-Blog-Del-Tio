export default (req, res) => {
    res.status(200).json([
        { avatar1: 'https://firebasestorage.googleapis.com/v0/b/my-projects-97ae6.appspot.com/o/Blog-Augusto%2Fnew_avatar_2022_1.jpg?alt=media&token=189aafa9-7e59-47d2-948a-e5bd42ef6f2e' },
        { avatar2: 'https://firebasestorage.googleapis.com/v0/b/my-projects-97ae6.appspot.com/o/Blog-Augusto%2Fnew_avatar_2022_4.jpg?alt=media&token=09ecceeb-1164-4298-94b6-d9d3e0171034' }
    ])
}