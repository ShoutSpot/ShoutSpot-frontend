import { useDispatch, useSelector } from "react-redux"
import { CollectionType } from "./CollectionType"
import { CustomMessage } from "./CustomMessage"
import ExtraInformation from "./ExtraInformation"
import { HeaderTitle } from "./HeaderTitle"
import QuestionsContainer from "./Questions"
import { SpaceLogo } from "./SpaceLogo"
import { SpaceName } from "./SpaceName"
import { RootState } from "../app/store"
import axios from "axios"
import { toggleCreateModalState, updateSpaceInfo } from "../features/createModalSpaceSlice"
import { useNavigate } from "react-router-dom"

export const NewSpace = () => {
    const navigate = useNavigate();
    const generateRandomName = (originalFileName: string) => {
        const fileExtension = originalFileName.slice(originalFileName.lastIndexOf('.'));
        const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return randomString + fileExtension;
    };

    const dispatch = useDispatch();
    const spaceInfo = useSelector((state: RootState) => {
        return state.createSpaceModal.spaceInfo;
    })

    const handleNewSpaceCreation = async () => {
        const { spaceLogoFile, thankYouImageFile } = spaceInfo;
        if (!spaceLogoFile || !thankYouImageFile) {
            alert('All fields are required');
            return;
        }

        const spaceLogoRandomName = generateRandomName(spaceLogoFile.name);
        const thankYouImageRandomName = generateRandomName(thankYouImageFile.name);

        try {
            const [spaceLogoResponse, thankYouImageResponse] = await Promise.all([
                axios.get(`http://localhost:3000/api/generate-presigned-url`, {
                    params: {
                        fileName: spaceLogoRandomName,
                        fileType: spaceLogoFile.type,
                        folder: 'Images'
                    },
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                }),
                axios.get(`http://localhost:3000/api/generate-presigned-url`, {
                    params: {
                        fileName: thankYouImageRandomName,
                        fileType: thankYouImageFile.type,
                        folder: 'Images'
                    },
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
            ]);
    
            const spaceLogoURL = spaceLogoResponse.data.url;
            const thankYouImageURL = thankYouImageResponse.data.url;
    
            // Parallel uploading of files
            await Promise.all([
                axios.put(spaceLogoURL, spaceLogoFile, {
                    headers: { 'Content-Type': spaceLogoFile.type },
                }),
                axios.put(thankYouImageURL, thankYouImageFile, {
                    headers: { 'Content-Type': thankYouImageFile.type },
                })
            ]);

            const updatedSpaceInfo = {
                ...spaceInfo,
                logo: spaceLogoURL.split('?')[0],
                thankYouImage : thankYouImageURL.split('?')[0]
            }

            dispatch(updateSpaceInfo(updatedSpaceInfo));
            await axios.post('http://localhost:3000/api/spaces', updatedSpaceInfo, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });

            dispatch(toggleCreateModalState());
            navigate('/dashboard');
            window.location.reload();
        } catch (error) {
            alert('Error while creating a space');
        }
    }

    return (
        <>
            <SpaceName />
            <SpaceLogo />
            <HeaderTitle />
            <CustomMessage />
            <QuestionsContainer />
            <ExtraInformation />
            <CollectionType />
            <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                    <button onClick={handleNewSpaceCreation} className="btn text-white bg-blue-600 hover:bg-blue-700 w-full h-11">
                        Create new Space
                    </button>
                </div>
            </div>
        </>
    )
}