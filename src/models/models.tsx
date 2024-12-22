export interface SpaceType {
    videoCount: number;
    textCount: number;
    spaceInfo: SpaceInfo
}
export interface SpaceDropDownType {
    spaceDomain: string;
    setSpaceInfo: () => void;
    setDropdownOpen: (open: boolean) => void;
}

export interface OverviewCardProps {
    iconPath: string,
    total: string,
    maxAllowed: string,
    title: string
};

export interface footerElement {
    heading: string,
    targetLink: string
}

export interface InputWithLabelProps {
    id: string,
    label: string,
    placeholder: string,
    svgNeeded: boolean,
    value: string,
    handleInputChange: (value: string) => void
}

export interface CheckboxProps {
    id: string,
    title: string,
    handleChange: (value: boolean) => void,
    checked: boolean
}

export interface ActiveButtonProps {
    id: number;
    handleButtonClick: (id: number) => void;
}
export interface TextVideoButtonsInterface {
    isTextButtonRequired: boolean;
    isVideoButtonRequired: boolean;
}
export interface Question {
    id: number;
    text: string;
}
export interface CurrentHeadingProps {
    id?: number,
    heading: string;
    subHeading?: string;
}

export interface DraggableQuestionProps {
    id: number;
    initialText: string;
    index: number;
    moveQuestion: (dragIndex: number, hoverIndex: number) => void;
    maxLength: number;
    updateQuestionText: (id: number, newText: string) => void;
}

export interface DragItem {
    type: string;
    id: number;
    index: number;
}

export interface CreateModalSpaceState {
    isCreateSpaceModalOpen: boolean;
    isDeleteModalOpen: boolean;
    deleteModalProps: {
        spaceName: string;
        id: number;
    }
    spaceInfo: SpaceInfo;
}

interface SpaceInfo {
    id: number;
    spaceName: string;
    logo: string;
    squareLogo: boolean;
    spaceHeading: string;
    customMessage: string;
    questions: Question[];
    collectExtraInfo: CollectExtraInfo;
    collectionType: string;
    collectStarRatings: boolean;
    language: string;
    thankYouImage: string;
    thankYouTitle: string;
    thankYouMessage: string;
    redirectPageLink: string;
    maxVideoDuration: number;
    maxCharsAllowed: number;
    videoButtonText: string;
    textButtonText: string;
    consentText: string;
    textSubmissionTitle: string;
    questionLabel: string;
    spaceLogoFile: File | null;
    thankYouImageFile: File | null;
}

interface CollectExtraInfo {
    name: boolean;
    email: boolean;
    company: boolean;
    socialLink: boolean;
    address: boolean;
}

export interface EmbedTestiModalState {
    isCreateSpaceModalOpen: boolean;
    embedTestiModalInfo: EmbedTestiModalInfo;
}

export interface EmbedTestiModalInfo {
    designOption: string;
    showPadding: boolean;
    starRatingColor: string;
    textColor: string;
    backgroundColor: string;
    textFamily: string;
    showBorder: boolean;
    borderRadius: string;
    borderWidth: string;
    borderColor: string;
    shadowSize: string;
    reviewText: string;
    reviewID: string;
    positiveStarsCount: number;
    reviewVideo: string;
    reviewImage: string;
    userDetails: string;
    isLiked: boolean;
    reviewerDetails: UserDetails;
    reviewType: string;
}

export interface UserDetails {
    name: string;
    companyName?: string;
    email?: string;
    socialLink?: string;
    address?: string;
    userPhoto?: string;
}

// Define the props type using an interface
export interface RevieweeInfoProps {
    userDetails: UserDetails;
    submitDateTime: Date;
}

export interface SingleReviewProps {
    reviewType: string;
    positiveStarsCount: number;
    reviewText: string;
    reviewVideo?: string; // Optional if not all reviews include a video
    reviewImage?: string; // Optional if not all reviews include an image
    userDetails: UserDetails;
    submitDateTime: Date;
    isLiked: boolean;
    reviewID: number;
    isSpam: boolean;
    sentiment?: string;
}

export interface EmbedTestiHeaderProps {
    embedTestiAttribute: number;
    setEmbedTestiAttribute: (value: number) => void;
}

export interface ToggleButtonProps {
    isActive: boolean;
    setIsActive: (value: boolean) => void;
}


interface wolCustButtonPressed {
    buttonPressed: number
}

interface LivePreviewProps {
    Border: {
        showBorder: boolean
        borderRadius: string
        borderColor: string
        borderWidth: string
    };

    Shadow: {
        shadowType: string
        shadowColor: string
        shadowSize: string
    };

    Background: {
        color: string
        cardColor: string
    }

    Text: {
        color: string
        linkColor: string
        starColor: string
        heartColor: string
        fontSize: string
        highlightStyle: string
    }

    Video: {
        buttonColor: string
    }
}

export interface wolModalState {
    wolCustButtonPressed: wolCustButtonPressed;
    livePreview: LivePreviewProps;
}

export interface userReviewState {
    showTextModal: boolean
    showVideoReviewModal: boolean
    showVideoRecordModal: boolean,
    showLiveRecorderModal: boolean,
    reviewInfo: {
        reviewType: string;
        positiveStarsCount: number;
        reviewText: string;
        reviewVideo?: File | null; // Optional if not all reviews include a video
        reviewImage?: File | null; // Optional if not all reviews include an image
        userDetails: UserDetails;
        userPhoto: File | null,
        spaceId: number
    },
    showThankYouModal: boolean
}

// export interface ToggleButtonProps {
//     isActive: any;
//     setIsActive: (value : boolean) => void;
// }

export interface EmbedTestiDisplayProps {
    positiveStarsCount: number;
}

export interface SpaceDetailsProps {
    reviews: SingleReviewProps[]
}
export interface HeadingProps {
    domain: string,
    spaceLogo: string
}
export interface createSpaceModalProps {
    spaceInfo: SpaceInfo
}
export interface reviewSliceState {
    reviews: SingleReviewProps[]
}
export interface ReviewToneProps {
    setFilteredReviews: (value: SingleReviewProps[]) => void;
}

export interface LoginProps {
    isLoggedIn: boolean;
}