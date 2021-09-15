// import React from 'react'
// import { getSingleJordan, deleteJordan } from '../../lib/api'
// import Loading from '../common/Loading'
// import Error from '../common/Error'
// // import { useParams } from 'react-router'
// import { Link } from 'react-router-dom'
// import { isOwner } from '../../lib/auth'

// function JordanShow() {
//   // const { jordanId } = useParams()
//   const [jordan, setJordan] = React.useState('')
//   const [isError, setIsError] = React.useState(false)
//   const isLoading = !jordan && !isError


//   React.useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await getSingleJordan()
//         setJordan(response.data)
//       } catch (err) {
//         setIsError(true)
//       }
//     }
//     getData()
//   }, [])

//   const handleDelete = async () => {
//     await deleteJordan(jordan.id)
//     history.push('/jordans/')
//   }

//   return (
//     <section className="section">
//       <div className="container">
//         {isError && <Error />}
//         {isLoading && <Loading />}
//         {jordan &&
//           <>
//             <h2 className="title has-text-centered">{jordan.name}</h2>
//             <hr />
//             <div className="columns">
//               <div className="column is-half">
//                 <figure className="image">
//                   <img src={jordan.image} alt={jordan.name} />
//                 </figure>
//               </div>
//               <div className="column is-half">
//                 <h4 className="title is-4">
//                 Release Date
//                 </h4>
//                 <p>{jordan.releaseDate}</p>
//                 <hr />
//                 <h4 className="title is-4">
//                 Color
//                 </h4>
//                 <hr />
//                 <p>{jordan.color}</p>
//                 <hr />
//                 <h4 className="title is-4">
//                 Size
//                 </h4>
//                 <hr />
//                 <p>{jordan.size}</p>
//                 <hr />
//                 <h4 className="title is-4">
//                 Price
//                 </h4>
//                 <hr />
//                 <p>{jordan.price}</p>
//                 <hr />
//                 {/* <h4 className="title is-4">
//                 Added by
//               </h4>
//               <hr />
//               <p>{jordan.user.username}</p>
//               <hr /> */}
//                 {isOwner(jordan.user.id) && (
//                   <div className="buttons">
//                     <Link
//                       to={`/jordans/${jordan.id}/edit`}
//                       className="button is-danger"
//                     >
//                     Edit this Jordan
//                     </Link>
//                     <button onClick={handleDelete} className="button is-danger">
//                     Delete this Jordan
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </>
//         }
//       </div>
//     </section>
//   )
// }

// export default JordanShow
