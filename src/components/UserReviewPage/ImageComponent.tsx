import { useState } from "react";
import { ImageFile } from "./ImageFile";
import { useDispatch } from "react-redux";
import { setReviewInfo } from "../../features/UserReviewSlice";

interface ImageFile {
    id: string;
    data: string;
}

export const ImageComponent = () => {
    const [image, setImage] = useState<ImageFile | null>(null);
    const dispatch = useDispatch();

    const generateHash = async (filename: string): Promise<string> => {
        const msgUint8 = new TextEncoder().encode(filename); // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        return hashHex;
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = async () => {
                const id = await generateHash(file.name);
                setImage({ id: id, data: fileReader.result as string });
            };

            fileReader.onerror = () => {
                console.error("Error reading the file");
            };
            dispatch(setReviewInfo({reviewImage: file}));
        }
    };

    const removeImage = () => {
        setImage(null);
        dispatch(setReviewInfo({reviewImage: null}));
    };

    return (
        <>
            <div className="flex flex-wrap -mx-3 mt-2">
                <div className="w-full px-3">
                    <label className="text-sm text-gray-700" htmlFor="avatar">Attach Image</label>
                    <div className="mt-2 flex flex-col space-y-3">
                        <div className="flex space-x-3">
                            <div>
                                <span className="rounded-md">
                                    <input
                                        type="file"
                                        accept="image/png,image/jpeg,image/jpg,image/gif,image/webp"
                                        name="single-image-select"
                                        id="single-image-select"
                                        className="h-0 w-0 opacity-0 overflow-hidden absolute -z-10"
                                        onChange={handleImageChange}
                                    />
                                    <label
                                        htmlFor="single-image-select"
                                        className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out cursor-pointer"
                                    >
                                        Choose file
                                    </label>
                                </span>
                            </div>
                            {image && (
                                <button type="button" title="Remove image" onClick={removeImage}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-600 hover:text-gray-400 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        ></path>
                                    </svg>
                                </button>
                            )}
                        </div>
                        {image && (
                            <div style={{ width: "350px" }}>
                                <div style={{ position: "relative", height: "70px" }}>
                                    <ImageFile
                                        imageId={image.id}
                                        src={image.data}
                                        position={0}
                                        removeImage={removeImage}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
