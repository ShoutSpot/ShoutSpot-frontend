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
    svgNeeded: boolean
}

export interface CheckboxProps {
    id: string,
    title: string
}

export interface ActiveButtonProps {
    id: number;
    handleButtonClick: (id: number) => void;
}
export interface TextVideoButtonsInterface {
    isTextButtonRequired: boolean;
    isVideoButtonRequired: boolean;
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

export interface createModalSpaceState {
    isModalOpen: boolean
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

export interface ToggleButtonProps {
    isActive: boolean;
    setIsActive: (value: boolean) => void;
}


interface wolCustButtonPressed {
    buttonPressed: number
}

interface LivePreviewProps {
    Border : {
        showBorder: boolean
        borderRadius: string
        borderColor: string
        borderWidth: string
    };

    Shadow : {
        shadowType: string
        shadowColor: string
        shadowSize: string
    };
    
    Background : {
        color: string
        cardColor: string
    }

    Text : {
        color: string
        linkColor: string
        starColor: string
        heartColor: string
        fontSize: string
        highlightStyle: string
    }

    Video : {
        buttonColor: string
    }
}

export interface wolModalState {
    wolCustButtonPressed: wolCustButtonPressed;
    livePreview: LivePreviewProps;
}