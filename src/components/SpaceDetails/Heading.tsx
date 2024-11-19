
export const Heading = () => {
    return (
        <header className="bg-gray-50 dark:bg-gray-900 py-8 mt-20 border-b border-gray-50 dark:border-gray-800">
        <div className="mx-4 md:mx-auto container lg:flex lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex justify-center sm:justify-start items-center">
              <img className="rounded-lg w-auto h-16 mr-5 border border-gray-200 dark:border-gray-800" src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/spaces%2Fabcd%2Flogo?alt=media&token=7f8cd762-b93f-4f8d-8032-6df27e57feb0" alt="Logo" />
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-bold leading-7 sm:text-3xl tracking-wide text-white flex items-center"><span>abcd</span></h1>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex justify-center sm:justify-start mt-4 lg:my-auto xl:ml-4">
            <span className="block">
              <div className="flex flex-col">
                <dt className="flex">
                  <div className="rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="h-5 w-5">
                      <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path>
                    </svg>
                  </div>
                  <p className="ml-2 text-sm font-medium text-white">Video credits</p>
                </dt>
                <dd className="pl-7">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">1</p>
                </dd>
              </div>
            </span>
            <span className="pl-10 block">
              <div className="flex flex-col">
                <dt className="flex">
                  <div className="rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                    </svg>
                  </div>
                  <p className="ml-2 text-sm font-medium text-white">Text credits</p>
                </dt>
                <dd className="pl-7">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">10</p>
                </dd>
              </div>
            </span>
            <span className="pl-10 block">
              <button type="button" className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
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