export interface SpaceType {
    logo: string;
    heading: string;
    videoCount: number;
    textCount: number;
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
    handleChange: (value: boolean) => void
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
    isModalOpen: boolean;
    isDeleteModalOpen: boolean;
    spaceInfo: SpaceInfo;
}

interface SpaceInfo {
    spaceName: string;
    logo: string;
    squareLogo: boolean;
    collectStars: boolean;
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
}

interface CollectExtraInfo {
    name: boolean;
    email: boolean;
    company: boolean;
    socialLink: boolean;
    address: boolean;
}

export interface embedTestiModalState {
    isModalOpen: boolean
}

export interface UserDetails {
    name: string;
    companyName?: string;
    email?: string;
    socialLink?: string;
    address?: string;
    submitDateTime?: string;
}

// Define the props type using an interface
export interface RevieweeInfoProps {
    userDetails: UserDetails;
}

export interface SingleReviewProps {
    reviewType: string;
    positiveStarsCount: number;
    reviewText: string;
    reviewVideo?: string; // Optional if not all reviews include a video
    reviewImage?: string; // Optional if not all reviews include an image
    userDetails: UserDetails;
}

export interface EmbedTestiHeaderProps {
    embedTestiAttribute: number;
    setEmbedTestiAttribute: (value: number) => void;
}

export interface DeleteSpaceModalProps {
    spaceId: string;
}

export interface ToggleButtonProps {
    isActive: any;
    setIsActive: (value : boolean) => void;
}