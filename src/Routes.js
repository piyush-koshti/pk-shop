import { generatePath } from "react-router"

export const homePath = "/home"
export const homePathPattern = () => {
    generatePath(homePath)
}

export const projectsPath = "/projects/:id?"
export const projectsPathPattern = () => {
    generatePath(projectsPath)
}

export const contactPath = "/contact-us"
export const contactPathPattern = () => {
    generatePath(contactPath)
}

// export const signUpPath = "/auth"
export const signUpPath = "auth"

export const signUpPathPattern = () => {
    generatePath(signUpPath)
}

// export const shopPath = "/shop"
export const shopPath = "shop/*"
export const shopPathPattern = () => {
    generatePath(shopPath)
}

// export const checkoutPath = "/checkout"
export const checkoutPath = "checkout"
export const checkoutPathPattern = () => {
    generatePath(checkoutPath)
}