import { useDispatch } from "react-redux";
import { HeadingProps } from "../../models/models"
import { AppDispatch } from "../../app/store";
import { toggleCreateModalState, updateSpaceInfo } from "../../features/createModalSpaceSlice";
import axios from "axios";

export const Heading: React.FC<HeadingProps> = ({domain, spaceLogo}) => {
  const dispatch: AppDispatch = useDispatch();
  const url = import.meta.env.VITE_API_URL;
  const handleEditButtonClicked = async () => {
    dispatch(toggleCreateModalState());
    if(!domain){
      return;
    }
    let [spaceName] = domain.split('-');

    const response = await axios.get(`${url}/api/spaces/single-space/${spaceName}`, {
      headers: {
          Authorization: localStorage.getItem('token')
      }
    });
    dispatch(updateSpaceInfo(response.data.space));
  }

  return (
      <header className="bg-gray-50 dark:bg-gray-900 py-8 mt-20 border-b border-gray-50 dark:border-gray-800">
      <div className="mx-4 md:mx-auto container lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex justify-center sm:justify-start items-center">
            <img className="rounded-lg w-auto h-16 mr-5 border border-gray-200 dark:border-gray-800" src={spaceLogo} alt="Logo" />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold leading-7 sm:text-3xl tracking-wide text-white flex items-center"><span>{domain}</span></h1>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex justify-center sm:justify-start mt-4 lg:my-auto xl:ml-4">            
          <span className="pl-10 block">
            <button type="button"
              onClick={handleEditButtonClicked}
              className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="-ml-1 mr-2 h-5 w-5 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
              </svg>
              Edit space
            </button>
          </span>
        </div>
      </div>
    </header>
      
    )
}