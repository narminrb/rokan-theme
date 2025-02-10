// import React, { useEffect, useState } from 'react'
// import SharedCard from '../../shared/SharedCard';
// import { getApiData } from '../../../services/api';

// const FeaturedSection = () => {
//     const [data,setData] = useState([]);
//     useEffect(()=> {
//         getApiData("products", (res) => {
//             setData(res.data);
//         })
//     },[])
//   return (
//     <div className='my-20'>
//         <h1>Featured Products</h1>
//         <div className='grid grid-cols-4'>
//             {
//                 data && data.map((product,index) => (
//                     <SharedCard key={index} image={product.image}/>
//                 ))
//             }

//         </div>
//     </div>
//   )
// }

// export default FeaturedSection