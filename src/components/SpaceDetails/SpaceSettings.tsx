import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { toggleCreateModalState, updateSpaceInfo } from "../../features/createModalSpaceSlice";
import axios from "axios";
import { useParams } from "react-router-dom";

export const SpaceSettings = () => {
    const dispatch: AppDispatch = useDispatch();
    const { domain } = useParams<{ domain: string }>();
    if(!domain){
        return;
    }
    let [spaceName, id] = domain.split('-');

    const handleEditButtonClicked = async () => {
        dispatch(toggleCreateModalState());
        if(!spaceName){
          return;
        }
    
        const response = await axios.get(`http://localhost:3000/api/spaces/single-space/${spaceName}`, {
          headers: {
              Authorization: localStorage.getItem('token')
          }
        });
        dispatch(updateSpaceInfo(response.data.space));
      }

    return (
        <>
            <div className="mt-2 md:mt-5">
                <button id="space-settings-header" className="w-full flex items-center justify-between px-2 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white pl-4">
                    <h1 className="text-base font-semibold">Space settings</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>

                <div className="pl-4 overflow-hidden transition-all duration-300 ease-in-out max-h-screen">
                    <button 
                    onClick={handleEditButtonClicked}
                    className="w-full mt-1 group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition ease-in-out duration-150 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 mr-2">
                            <path stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                        </svg>
                        Edit the space
                    </button>
                </div>
            </div>
        </>
    )
}