import LogoAnimation from "./Logo"
/* eslint-disable */
// @ts-ignore
import IntersectionObserver from "intersection-observer"
/* eslint-enable */
import { ScrollIO, Handler } from "@imjasonmiller/scroll-io"

const serviceWorker = (): void => {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("../serviceworker.js")
                .then(() => console.log("Service worker: Registered"))
                .catch(err => console.log(`Service Worker: Error: ${err}`))
        })
    }
}

const logo = (): void => {
    const logo = new LogoAnimation(document.querySelector(
        ".logo__link",
    ) as HTMLElement)

    let hasLeft = false

    const handleIntersect: Handler = ({ enterUp, leaveDown }): void => {
        if (leaveDown) {
            logo.animate()
            hasLeft = true
        } else if (enterUp && hasLeft) {
            logo.animate(true)
        }
    }

    new ScrollIO(".logo__link", handleIntersect, {
        range: { min: 0.75, steps: 0 },
    })
}

const features = (): void => {
    const swipes = document.querySelectorAll(
        ".feature .feature__swipe",
    ) as NodeListOf<HTMLElement>
    const images = document.querySelectorAll(
        ".feature .feature__image img",
    ) as NodeListOf<HTMLElement>
    const borders = document.querySelectorAll(
        ".feature .media-border",
    ) as NodeListOf<HTMLElement>
    const captions = document.querySelectorAll(
        ".feature .feature__caption",
    ) as NodeListOf<HTMLElement>

    const handleIntersect: Handler = (
        { index, leaveUp, enterDown, leaveDown },
        entry,
    ): void => {
        const ratio = entry.intersectionRatio

        if (enterDown || leaveUp) {
            captions[index].style.transform = `translateY(${50 * (1 - ratio)}%)`
            captions[index].style.opacity = ratio.toString()
        }

        if (leaveDown || leaveUp || ratio < 0.5) return

        images[index].style.transform = "scale(1)"
        swipes[index].style.transform = "scaleX(0)"

        Array.from(borders[index].children).forEach(border => {
            border.classList.remove("media-border__line--hidden")
        })
    }

    new ScrollIO(".feature", handleIntersect, { range: { steps: 50 } })
}

const main = (): void => {
    serviceWorker()
    logo()
    features()
}

main()