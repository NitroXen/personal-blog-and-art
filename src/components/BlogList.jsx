import '../styles/global.css'

function BlogList({ posts }) {
    return (
        <div className="flex flex-wrap w-screen ">
            {
                posts.map((post) => (
                    <div key={post.id} className="p-5 md:p-10 w-1/3 bg-gray-400 my-2">
                        <h3 className='font-bold text-xl text-center'>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default BlogList;