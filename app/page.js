


"use client"
import { useSession } from 'next-auth/react';
import React from 'react'

const Home = () => {
  const {data} = useSession()
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

export default Home;













// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";


// const Page = async () => {
//   const data = await getServerSession(authOptions)
//   return (
//     <div>
//       { JSON.stringify(data) }
//     </div>
//   );
// }

// export default Page;




