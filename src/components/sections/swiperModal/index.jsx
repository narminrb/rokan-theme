// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'; 
// import { getAPiData } from '../../../http/api'; 
// import "./style.css"
// import DetailSwiper from '../detailSwiper';

// const SwiperModal = () => {
//     const { slug } = useParams(); 
//     const [blog, setBlog] = useState(null);

//     useEffect(() => {
//         const fetchBlogDetail = async () => {
//             const result = await getAPiData(`swipers?filters[slug]=${slug}&populate=*`); 
//             setBlog(result.data[0]);  
//         };

//         fetchBlogDetail();
//     }, [slug]);

//     if (!blog) return <div>Loading...</div>;

//     const renderRichText = (richText) => {
//         if (!richText) return "No description available.";
    
//         return richText
//             .map(block => block.children.map(child => child.text).join(" "))
//             .join("\n");
//     };

//     return (
//         <div classNameName="container mx-auto my-10">
//           <div className="bg-gray-100 dark:bg-gray-800 py-8">
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row -mx-4">
//             <div className="md:flex-1 px-4">
//                 <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
//                     <img src={`http://localhost:1337${blog.image.url}`} alt={blog.title} />
//                 </div>
//                 <div className="flex -mx-2 mb-4">
//                     <div className="w-1/2 px-2">
//                         <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
//                     </div>
//                     <div className="w-1/2 px-2">
//                         <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="md:flex-1 px-4">
//             <h1>{blog.title}</h1>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
//                     ante justo. Integer euismod libero id mauris malesuada tincidunt.
//                 </p>
//                 <div className="flex mb-4">
//                     <div className="mr-4">
//                         <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
//                         <span className="text-gray-600 dark:text-gray-300">$29.99</span>
//                     </div>
//                     <div>
//                         <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
//                         <span className="text-gray-600 dark:text-gray-300">In Stock</span>
//                     </div>
//                 </div>
//                 <div className="mb-4">
//                     <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
//                     <div className="flex items-center mt-2">
//                         <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
//                         <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
//                         <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
//                         <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
//                     </div>
//                 </div>
//                 <div className="mb-4">
//                     <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
//                     <div className="flex items-center mt-2">
//                         <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
//                         <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
//                         <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
//                         <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
//                         <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
//                     </div>
//                 </div>
//                 <div>
//                     <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
//                     <p classNameName='text-[18px] text-[#555555]'>{renderRichText(blog.descc)}</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

//         </div>

//     );
// };

// export default SwiperModal;


import React from 'react';
import "./style.css"

const SwiperModal = ({ modalData, closeModal }) => {
  const renderRichText = (richText) => {
    if (!richText) return 'No description available.';
    return richText
      .map((block) => block.children.map((child) => child.text).join(' '))
      .join('\n');
  };

  return (
    <div>
        <div className="bg-white dark:bg-gray-800">
    <div className="min-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1">
                <div className="h-[500px] rounded-lg bg-gray-300 object-cover">
                <img className='h-[100%] w-[100%]' src={`http://localhost:1337${modalData.image.url}`} alt={modalData.title} />
                </div>
            </div>
            <div className="md:flex-1 px-4">
            <div className="modal-header">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                <div className="close-btn" onClick={closeModal}>
                &times;
                </div>
            </div>
                <h2>{modalData.title}</h2>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span>{modalData.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div className="flex items-center mt-2">
                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div className="flex items-center mt-2">
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p>{modalData.desc}</p>
                </div>
                <div className="flex my-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </div>

      {/* <div classNameName="close-btn" onClick={closeModal}>
        &times;     
      </div>
      <div classNameName="product-details">
        <div classNameName="image-container">
          <img src={`http://localhost:1337${modalData.image.url}`} alt={modalData.title} />
        </div>
        <div classNameName="details">
          <h2>{modalData.title}</h2>
          <p>{modalData.desc}</p>
          <span>{modalData.price}</span>
          <div>{renderRichText(modalData.descc)}</div>
        </div>
      </div> */}
    </div>
  );
};

export default SwiperModal;

