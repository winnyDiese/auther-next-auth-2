import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";



const Page = async () => {
  const data = await getServerSession(authOptions)
  return (
    <div>
      { JSON.stringify(data) }
    </div>
  );
}

export default Page;
