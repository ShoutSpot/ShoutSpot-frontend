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
    }
]