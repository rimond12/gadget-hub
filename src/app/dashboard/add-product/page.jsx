import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import AddProductForm from "./AddProductForm"; 

export default async function AddProductPage() {
  const session = await getServerSession(authOptions); 

  if (!session) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Access Denied</h2>
        <p>You must be logged in to add a product.</p>
      </div>
    );
  }

  return <AddProductForm />; // client component
}
