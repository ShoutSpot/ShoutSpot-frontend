export const AffiliateLink = () => {
    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                    <label htmlFor="affiliateLink" className="flex text-gray-700 text-sm font-medium mb-1">
                        Add your affiliate link
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 my-auto ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-tip="true" data-for="affiliate-link">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </label>
                    <input id="affiliateLink" type="text" className="form-input w-full text-gray-800 border-gray-300 rounded-md" placeholder="https://testimonial.to/?via=xyz" required />
                </div>
            </div>
        </>
    )
}