// import React, { useEffect, useState } from 'react'
// import SharedCard from '../../shared/SharedCard'
// import { createProduct, deleteProduct, getApiData } from '../../../services/api';
// import { useMutation, useQuery , useQueryClient} from '@tanstack/react-query';
// import { QueryKeys } from '../../../constants/QueryKeys';
// import { toast } from 'sonner';

// const ProductSection = () => {
//   const queryClient = useQueryClient();
  
// const {data,isLoading,isError,error} = useQuery({
//   queryKey:[QueryKeys.PRODUCTS],
//   queryFn: () => getApiData("products")
// })
// console.log(data)
// const [form,setForm] = useState({
//   title: "",
//   desc: "",
//   image: ""
// })
// const handleChange = (e) => {
//   let fileReader = new FileReader();
//   if(e.target.name === 'image') {
//     const file = e.target.files[0];
//     if(!file) return;

//     fileReader.onload = (event) =>{
//       setForm((prevForm) =>({
//         ...prevForm,
//         image:event.target.result
//       }))
//     }
//     fileReader.readAsDataURL(file);
//     }
//     else{
//       setForm((prevForm) =>({
//         ...prevForm,
//         [e.target.name]: e.target.value,
//       }))
//     }
// };

// const{mutate, isPending, isError:createIsErr, error:createErr} = useMutation({
//   mutationFn: (form) => createProduct('products', form),
//   mutationKey:["create-product"],
//   onSuccess:()=>{
//     setForm({
//       title: "",
//       desc: "",
//       image: ""
//     })
//     toast.success("Product added successfully");
//     queryClient.refetchQueries({
//       queryKey: [QueryKeys.PRODUCTS]
//     });


//   },
//   onError: (err) => {
//     toast.err(err.message)
//   },
//   onSettled:()=>{
//     console.log("Settled")
//   }

// })
//   const handleSubmit=(e) =>{
//     console.log(form);
//     mutate(form)

//   }
  
//   const { mutate: deleteMutate } = useMutation({
//     mutationFn: async (id) => deleteProduct('products', id), // Corrected arrow function syntax
//     onSuccess: () => {
//       queryClient.invalidateQueries(QueryKeys.PRODUCTS); // Refresh product list after delete
//       toast.success("Product deleted successfully!");
//     },
//     onError: (err) => {
//       toast.error(`Error deleting product: ${err.message}`);
//     }
//   });
  
//   const handleDelete = async(id) =>{
//     await deleteMutate(id)
//   }
//     console.log(form)
//   return (
//     <div id='product-section'>
//         <form 
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSubmit()
//         }}
//         className='max-w-5xl w-full my-20 rounded-2xl border border-gray-300'>
//           <div className='mb-3'>
//             <input onChange={handleChange}
//              value={form.title} 
//             type="text" name='title' className='border w-full rounded-md border-gray-300' placeholder='Product Name' />
//           </div>
//           <div className='mb-3'>
//             <textarea
//             onChange={handleChange}
//              value={form.desc}
//              name='desc' type="text" 
//              className='border w-full rounded-md border-gray-300' placeholder='Product description'></textarea>
//           </div>
//           <div className='mb-3'>
//             <input 
//             onChange={handleChange}
//             type="file" name='image' className='w-full rounded-md border-gray-300' placeholder='Product Price' />
//           </div>
//           <button 
//           type='submit'
//           className='w-full text-white bg-blue-500 rounded-md disabled:opacity-50 hover:bg-blue-600'>Add Product</button>
//         </form>
//        <div className='grid grid-cols-4'>
//        {data && data.map((product,index) => (
//             <SharedCard 
//             onDelete={() => handleDelete(product.id)} 
//             key={index} title={product.title} image={product.image} desc={product.desc}/>
//         ))}
//        </div>
//     </div>
//   )
// }

// export default ProductSection