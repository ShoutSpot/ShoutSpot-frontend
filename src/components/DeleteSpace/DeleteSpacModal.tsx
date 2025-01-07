import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { changeDeleteSpaceModalState } from "../../features/createModalSpaceSlice";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const DeleteSpaceModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const url = import.meta.env.VITE_API_URL;
    const isDeleteSpaceModalOpen = useSelector((state: RootState) => state.createSpaceModal.isDeleteModalOpen);
    const { spaceName, id } = useSelector((state: RootState) => state.createSpaceModal.deleteModalProps);
    const [inputSpaceName, setInputSpaceName] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputSpaceName(event.target.value);
    };

    const handleDeleteClicked = async () => {
        if (inputSpaceName === spaceName) {
            await axios.delete(`${url}/api/spaces/`, {
                data:{
                    id
                },
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            setInputSpaceName('');
            dispatch(changeDeleteSpaceModalState(false));
            navigate('/dashboard');
            window.location.reload();
        } else {
            alert('Type the space name correctly to confirm deletion.');
        }
    };

    return (
        isDeleteSpaceModalOpen &&
        <div
            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
        >
            <button
                className="text-gray-400 rounded-full w-6 h-6" onClick={() => dispatch(changeDeleteSpaceModalState(false))}
                style={{ position: "absolute", right: "5px", top: "5px", zIndex: 999, outline: "none" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </button>
            <section className="relative">
                <div className="w-full mx-auto px-4 sm:px-6 relative">
                    <div className="py-6">
                        <div className="w-full mx-auto text-center pb-6 text-gray-800">
                            <h3 className="h3 mb-4">Delete this space</h3>
                            <p className="text-base w-full text-gray-500">
                                Once deleted, all testimonials in this space will be gone forever. Please be certain!
                            </p>
                        </div>
                        <div className="max-w-xl mx-auto">
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-1"
                                        htmlFor="productId"
                                    >
                                        Type your space id <span className="font-bold text-red-600">{spaceName}</span> to
                                        confirm
                                    </label>
                                    <input
                                        id="productId"
                                        type="text"
                                        className="form-input w-full text-gray-800 border border-gray-300 border-solid p-2 rounded-sm"
                                        placeholder="Type the space name here"
                                        required
                                        value={inputSpaceName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mt-6">
                                <div className="w-full px-3">
                                    <button onClick={handleDeleteClicked} className="p-3 text-white bg-red-600 hover:bg-red-700 w-full">
                                        Confirm delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
