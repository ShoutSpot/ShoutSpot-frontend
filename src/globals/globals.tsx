import { footerElement } from "../models/models"
import { CurrentHeadingProps } from "../models/models"

export const footerProducts : footerElement[] = [
    {
        heading : "Our Wall of Love",
        targetLink : "/"
    },
    {
        heading : "AI features",
        targetLink : "https://testimonial.to/resources/testimonial-integrates-with-ai"
    }
]

export const footerResources : footerElement[] = [
    {
        heading : "Customer stories",
        targetLink : "https://testimonial.to/customer-stories"
    },
    {
        heading : "Contact Us",
        targetLink : "/"
    }
]

export const CurrentHeadingDisplayValues: CurrentHeadingProps[] = [
    {
        id: 1,
        heading: "Create a new Space",
        subHeading: "After the Space is created, it will generate a dedicated page for collecting testimonials."
    },
    {
        id: 2,
        heading: "Customize thank you page",
        subHeading: "Add your personalized message to show your appreciate"
    },
    {
        id: 3,
        heading: "Some extra settings"
    },
    {
        id: 4,
        heading: "Edit the Space"
    }
]

export const starRatingColorPalatee: string[] = [
    "#FF6900", // Orange
    "#FDCC0D", // Yellow
    "#7BDCB5", // Light green
    "#00D084", // Green
    "#8ED1FC", // Light blue
    "#0693E3", // Blue
    "#ABB8C3", // Grey
    "#EB144C", // Red
    "#000000", // Black
    "#5D5DFF"  // Purple
]
export const textColorPalatee: string[] = [
    "#FFFFFF", // White
    "#000000", // Black
    "#FF6900", // Orange
    "#FCB900", // Gold
    "#7BDCB5", // Light green
    "#00D084", // Green
    "#8ED1FC", // Light blue
    "#0693E3", // Blue
    "#ABB8C3", // Grey
    "#EB144C", // Red
    "#F78DA7", // Pink
    "#5D5DFF"  // Purple
]

export const fonts: string[] = ["Helvetica", "Times New Roman", "Futura", "Garamond", "Arial", "Roboto", "Georgia", "Comic Sans MS", "Baskerville", "Courier New"]
