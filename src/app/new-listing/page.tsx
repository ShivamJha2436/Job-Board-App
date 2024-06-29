import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs";
import {WorkOS} from "@workos-inc/node";

export default async function NewListingPage() {
  const { user } = await getUser();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  if(user){
    const listOrganizationMemberships = await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
    });
  }


  return (
    <div className="container">
      {!user && (
        <div>You need to be logged in to post a job</div>
      )}
      {user && (
        <div>

          <h2 className="text-lg mt-6">Your Companies</h2>
          <p className="text-gray-500 text-sm mb-2">Select a company to create a job for</p>
          <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
            No companies found assigned to your account
          </div>

          <h2 className="text-lg mt-6">Create new company</h2>
          <p className="text-gray-500 text-sm mb-2">To create a job listing you need to register a company</p>
          <form action="" className="flex gap-2">
            <input className="p-2 border border-gray-400 rounded-md "
              type="text" placeholder="Company name" />
            <button className=" flex gap-2 bg-gray-200 px-4 py-2 rounded-md">
              Create company
              <FontAwesomeIcon className="h-4 mt-1 items-center" icon={faPlusCircle} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}