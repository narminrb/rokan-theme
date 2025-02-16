// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'; 
// import { getAPiData } from '../../../http/api'; 

// const BlogDetail = () => {
//     const { slug } = useParams(); 
//     const [blog, setBlog] = useState(null);

//     useEffect(() => {
//         const fetchBlogDetail = async () => {
//             const result = await getAPiData(`blogs?filters[slug]=${slug}&populate=*`); 
//             setBlog(result.data[0]);  
//         };

//         fetchBlogDetail();
//     }, [slug]);

//     if (!blog) return <div>Loading...</div>;

//     return (
//         <div className="container mx-auto my-10">
//             <h1>{blog.title}</h1>
//             <img src={`http://localhost:1337${blog.image.url}`} alt={blog.title} />
//             <p>{blog.desc}</p>
//             <p>Price: {blog.price}</p>
//         </div>
//     );
// };

// export default BlogDetail;
